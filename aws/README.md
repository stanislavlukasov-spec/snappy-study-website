# AWS Deployment — snappystudy.com

## Architecture

```
snappystudy.com (Route 53)
        │
        ▼
CloudFront Distribution  ←── ACM Certificate (us-east-1)
        │
        ▼  (OAC signed request)
S3 Bucket (private)
```

## One-time setup

### 1. Request a TLS certificate

CloudFront requires certificates to live in **us-east-1**.

```bash
chmod +x aws/create-cert.sh
./aws/create-cert.sh
```

Then open the ACM console, validate the certificate via Route 53, and wait for status **Issued**.

### 2. Deploy the CloudFormation stack

```bash
aws cloudformation deploy \
  --template-file aws/template.yaml \
  --stack-name snappy-study-website \
  --region eu-west-1 \
  --parameter-overrides \
    DomainName=snappystudy.com \
    HostedZoneId=<YOUR_HOSTED_ZONE_ID> \
    CertificateArn=<YOUR_CERT_ARN_IN_US_EAST_1> \
  --capabilities CAPABILITY_IAM
```

### 3. Upload the website files

```bash
chmod +x aws/deploy.sh
./aws/deploy.sh
```

## Ongoing deployments

Every time you update the site, just run:

```bash
./aws/deploy.sh
```

This syncs files to S3 and creates a CloudFront invalidation automatically.

## Costs (estimated)

| Service | Cost |
|---|---|
| S3 storage (~1 MB site) | ~$0.00/month |
| CloudFront (first 1TB/month free tier) | ~$0.00–$1/month |
| Route 53 hosted zone | $0.50/month |
| ACM certificate | Free |
| **Total** | **~$0.50–$1.50/month** |
