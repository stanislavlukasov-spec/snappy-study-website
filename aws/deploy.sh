#!/usr/bin/env bash
# ═══════════════════════════════════════════════════════════════
# deploy.sh — Upload website files to S3 and invalidate CloudFront
#
# Usage:
#   ./aws/deploy.sh
#
# Prerequisites:
#   • AWS CLI v2 installed and configured (aws configure)
#   • Stack already deployed via CloudFormation (template.yaml)
#   • STACK_NAME and AWS_REGION set below (or as env vars)
# ═══════════════════════════════════════════════════════════════

set -euo pipefail

STACK_NAME="${STACK_NAME:-snappy-study-website}"
AWS_REGION="${AWS_REGION:-eu-west-1}"
WEBSITE_DIR="$(cd "$(dirname "$0")/.." && pwd)"

echo "▶  Fetching stack outputs..."
BUCKET=$(aws cloudformation describe-stacks \
  --stack-name "$STACK_NAME" \
  --region "$AWS_REGION" \
  --query "Stacks[0].Outputs[?OutputKey=='BucketName'].OutputValue" \
  --output text)

DIST_ID=$(aws cloudformation describe-stacks \
  --stack-name "$STACK_NAME" \
  --region "$AWS_REGION" \
  --query "Stacks[0].Outputs[?OutputKey=='CloudFrontDistributionId'].OutputValue" \
  --output text)

echo "▶  Bucket:       $BUCKET"
echo "▶  Distribution: $DIST_ID"

echo "▶  Syncing files to S3..."
aws s3 sync "$WEBSITE_DIR" "s3://$BUCKET/" \
  --exclude "*.sh" \
  --exclude "*.yaml" \
  --exclude "aws/*" \
  --exclude ".DS_Store" \
  --exclude "*.map" \
  --delete \
  --cache-control "public, max-age=31536000, immutable" \
  --metadata-directive REPLACE

# HTML files should not be cached (always fresh)
aws s3 cp "$WEBSITE_DIR/index.html" "s3://$BUCKET/index.html" \
  --content-type "text/html; charset=utf-8" \
  --cache-control "public, no-cache, must-revalidate"

echo "▶  Creating CloudFront invalidation..."
INVALIDATION_ID=$(aws cloudfront create-invalidation \
  --distribution-id "$DIST_ID" \
  --paths "/*" \
  --query "Invalidation.Id" \
  --output text)

echo "✅  Deploy complete!"
echo "   Invalidation ID: $INVALIDATION_ID"
echo "   Site will be live at https://snappystudy.com in ~1-2 minutes."
