# AWS Rekognition
- AI image detect service

## Prerequisite
- AWS config with S3, Rekognition access

```
aws rekognition detect-labels --image "S3Object={Bucket=okdevtv,Name=okfolder/photo.jpg}" --region ap-northeast-1 > out.json
```
