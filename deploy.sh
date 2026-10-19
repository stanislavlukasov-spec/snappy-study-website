#!/usr/bin/env bash
# ═══════════════════════════════════════════════════════════════
# deploy.sh — One-command deploy for snappystudy.com
#
# Usage (from snappy-study-website/):
#   ./deploy.sh
#
# First run: creates the CloudFormation stack (S3 + CloudFront +
#            Route 53 DNS). Subsequent runs just upload files.
#
# Prerequisites:
#   • AWS CLI v2  (brew install awscli)
#   • Logged in   (aws configure  OR  aws sso login)
#   • Domain snappystudy.com already in Route 53
#   • ACM certificate in us-east-1 (run aws/create-cert.sh first
#     if you don't have one yet)
# ═══════════════════════════════════════════════════════════════

set -euo pipefail

STACK_NAME="${STACK_NAME:-snappy-study-website}"
AWS_REGION="${AWS_REGION:-eu-central-1}"
DIR="$(cd "$(dirname "$0")" && pwd)"
TEMPLATE="$DIR/aws/template.yaml"

# ── Helpers ───────────────────────────────────────────────────
stack_status() {
  aws cloudformation describe-stacks \
    --stack-name "$STACK_NAME" --region "$AWS_REGION" \
    --query "Stacks[0].StackStatus" --output text 2>/dev/null || echo "DOES_NOT_EXIST"
}

nonempty() {
  # Returns false if value is empty or the literal string "None"
  [[ -n "${1:-}" && "${1:-}" != "None" ]]
}

# ── 1. Check / create infrastructure ─────────────────────────
STATUS=$(stack_status)
echo "▶  Stack status: $STATUS"

if [[ "$STATUS" == "DOES_NOT_EXIST" || "$STATUS" == "REVIEW_IN_PROGRESS" ]]; then
  echo ""
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  echo "  First run — stack does not exist yet."
  echo "  You need two values before we can continue:"
  echo ""
  echo "  1. Route 53 Hosted Zone ID for snappystudy.com"
  echo "     → AWS Console → Route 53 → Hosted zones → snappystudy.com"
  echo ""
  echo "  2. ACM Certificate ARN (MUST be in us-east-1)"
  echo "     → Run  ./aws/create-cert.sh  if you don't have one yet"
  echo "     → AWS Console → Certificate Manager (us-east-1) → copy ARN"
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  echo ""
  read -rp "  Hosted Zone ID (e.g. Z1ABC123EXAMPLE): " HOSTED_ZONE_ID
  read -rp "  Certificate ARN (arn:aws:acm:us-east-1:...): " CERT_ARN
  if [[ -z "$HOSTED_ZONE_ID" || -z "$CERT_ARN" ]]; then
    echo "❌  Both values are required. Aborting."; exit 1
  fi
  echo ""
  echo "▶  Creating CloudFormation stack (~5 min)..."
  aws cloudformation deploy \
    --stack-name "$STACK_NAME" \
    --region "$AWS_REGION" \
    --template-file "$TEMPLATE" \
    --parameter-overrides \
        HostedZoneId="$HOSTED_ZONE_ID" \
        CertificateArn="$CERT_ARN" \
    --capabilities CAPABILITY_NAMED_IAM \
    --no-fail-on-empty-changeset
  echo "✅  Infrastructure ready."
  echo ""

elif [[ "$STATUS" == *"ROLLBACK"* || "$STATUS" == *"FAILED"* ]]; then
  echo ""
  echo "❌  Stack is in a failed state: $STATUS"
  echo ""
  echo "   This usually means one of the parameters was wrong."
  echo "   Fix it by deleting the failed stack and re-running:"
  echo ""
  echo "   aws cloudformation delete-stack \\"
  echo "     --stack-name $STACK_NAME --region $AWS_REGION"
  echo ""
  echo "   Then wait ~2 min for deletion, and run ./deploy.sh again."
  exit 1

elif [[ "$STATUS" == *"IN_PROGRESS"* ]]; then
  echo ""
  echo "⏳  Stack is still being created/updated ($STATUS)."
  echo "   Wait a few minutes and run ./deploy.sh again."
  exit 1
fi

# ── 2. Resolve bucket + distribution from stack outputs ───────
echo "▶  Fetching stack outputs..."
BUCKET=$(aws cloudformation describe-stacks \
  --stack-name "$STACK_NAME" --region "$AWS_REGION" \
  --query "Stacks[0].Outputs[?OutputKey=='BucketName'].OutputValue" \
  --output text)

DIST_ID=$(aws cloudformation describe-stacks \
  --stack-name "$STACK_NAME" --region "$AWS_REGION" \
  --query "Stacks[0].Outputs[?OutputKey=='CloudFrontDistributionId'].OutputValue" \
  --output text)

if ! nonempty "$BUCKET" || ! nonempty "$DIST_ID"; then
  echo ""
  echo "❌  Stack outputs are empty. Check the CloudFormation console for errors:"
  echo "   https://console.aws.amazon.com/cloudformation/home?region=$AWS_REGION"
  exit 1
fi

echo "   Bucket:       $BUCKET"
echo "   Distribution: $DIST_ID"

# ── 3. HTML — no-cache so users always get the latest ─────────
echo "▶  Uploading HTML..."
aws s3 cp "$DIR/index.html" "s3://$BUCKET/index.html" \
  --content-type "text/html; charset=utf-8" \
  --cache-control "public, no-cache, must-revalidate"

# ── 4. CSS & JS — long cache (filenames are cache-busted) ─────
echo "▶  Uploading CSS & JS..."
aws s3 sync "$DIR/css" "s3://$BUCKET/css" \
  --exclude ".DS_Store" \
  --cache-control "public, max-age=31536000, immutable" \
  --metadata-directive REPLACE

aws s3 sync "$DIR/js" "s3://$BUCKET/js" \
  --exclude ".DS_Store" \
  --cache-control "public, max-age=31536000, immutable" \
  --metadata-directive REPLACE

# ── 5. Images — long cache ────────────────────────────────────
echo "▶  Uploading images..."
aws s3 sync "$DIR/images" "s3://$BUCKET/images" \
  --exclude ".DS_Store" \
  --cache-control "public, max-age=31536000, immutable" \
  --metadata-directive REPLACE

# ── 6. Legal PDFs — short cache ───────────────────────────────
echo "▶  Uploading legal PDFs..."
aws s3 sync "$DIR/legal" "s3://$BUCKET/legal" \
  --exclude ".DS_Store" \
  --content-type "application/pdf" \
  --cache-control "public, max-age=86400" \
  --metadata-directive REPLACE

# ── 7. Remove any stale files from S3 ─────────────────────────
echo "▶  Pruning deleted files..."
aws s3 sync "$DIR" "s3://$BUCKET/" \
  --exclude "*" \
  --include "index.html" \
  --include "css/*" \
  --include "js/*" \
  --include "images/*" \
  --include "images/screenshots/*" \
  --include "legal/*" \
  --delete \
  --size-only 2>/dev/null || true

# ── 8. Invalidate CloudFront ──────────────────────────────────
echo "▶  Invalidating CloudFront cache..."
INVALIDATION_ID=$(aws cloudfront create-invalidation \
  --distribution-id "$DIST_ID" \
  --paths "/*" \
  --query "Invalidation.Id" \
  --output text)

echo ""
echo "✅  Deploy complete!"
echo "   Invalidation: $INVALIDATION_ID"
echo "   Live in ~1–2 min → https://snappystudy.com"
