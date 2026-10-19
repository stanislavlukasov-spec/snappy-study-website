#!/usr/bin/env bash
# ═══════════════════════════════════════════════════════════════
# create-cert.sh — Request an ACM certificate for snappystudy.com
#
# Must be run in us-east-1 (CloudFront requirement).
# The certificate covers both the apex and www subdomain.
# Validation is via DNS — the script will print the CNAME records
# you need to add to Route 53 (or they can be auto-created if you
# use the Route 53 console → "Create records in Route 53" button).
# ═══════════════════════════════════════════════════════════════

set -euo pipefail

DOMAIN="${1:-snappystudy.com}"

echo "▶  Requesting ACM certificate for $DOMAIN and www.$DOMAIN in us-east-1..."

CERT_ARN=$(aws acm request-certificate \
  --domain-name "$DOMAIN" \
  --subject-alternative-names "www.$DOMAIN" \
  --validation-method DNS \
  --region us-east-1 \
  --query CertificateArn \
  --output text)

echo ""
echo "✅  Certificate requested!"
echo "   ARN: $CERT_ARN"
echo ""
echo "Next steps:"
echo "  1. Go to ACM console (us-east-1): https://us-east-1.console.aws.amazon.com/acm/home?region=us-east-1"
echo "  2. Find the certificate and click 'Create records in Route 53' to auto-add DNS validation records."
echo "  3. Wait ~5 minutes for validation to complete (status: Issued)."
echo "  4. Copy the ARN above and pass it to CloudFormation as the CertificateArn parameter."
