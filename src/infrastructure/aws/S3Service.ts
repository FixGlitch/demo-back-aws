import AWS from "aws-sdk";
import dotenv from "dotenv";

dotenv.config();

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: "us-east-1",
});

export class S3Service {
  async uploadFile(file: Buffer, fileName: string, mimeType: string) {
    const params = {
      Bucket: process.env.AWS_BUCKET_NAME!,
      Key: fileName,
      Body: file,
      ContentType: mimeType,
    };

    return s3.upload(params).promise();
  }
}
