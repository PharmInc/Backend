import { Client } from "minio";
import { v4 } from "uuid";

const url = new URL(process.env.OBJECT_STORAGE_URL || "http://minio:9000");

const minioClient = new Client({
  endPoint: url.hostname,
  port: url.port
    ? parseInt(url.port)
    : process.env.OBJECT_STORAGE_PORT
      ? parseInt(process.env.OBJECT_STORAGE_PORT)
      : 9000,
  useSSL: url.protocol === "https:",
  accessKey: process.env.OBJECT_STORAGE_ROOT_USER as string,
  secretKey: process.env.OBJECT_STORAGE_ROOT_PASSWORD as string,
});

const bucketName = process.env.OBJECT_STORAGE_BUCKET as string;

async function ensureBucketExists(bucket: string) {
  try {
    const exists = await minioClient.bucketExists(bucket);
    if (!exists) {
      await minioClient.makeBucket(bucket, "");
      console.log(`Bucket "${bucket}" created`);
    } else {
      console.log(`Bucket "${bucket}" already exists`);
    }
  } catch (error) {
    console.error("Error checking or creating bucket:", error);
    throw error;
  }
}

const createDocument = async (file: File): Promise<string> => {
  try {
    await ensureBucketExists(bucketName);

    const docId = v4();

    const params = {
      Bucket: bucketName,
      Key: docId,
      Body: Buffer.from(await file.arrayBuffer()),
      ContentType: file.type,
    };

    await minioClient.putObject(
      params.Bucket,
      params.Key,
      params.Body,
      params.Body.length,
      { "Content-Type": params.ContentType }
    );

    return docId;
  } catch (error) {
    console.error("Error uploading document:", error);
    throw error;
  }
};

const readDocument = async (
  docId: string
): Promise<{
  data: Buffer;
  contentType: string;
}> => {
  try {
    const stream = await minioClient.getObject(bucketName, docId);

    const data: Buffer = await new Promise((resolve, reject) => {
      const chunks: Uint8Array[] = [];
      stream.on("data", (chunk) => chunks.push(chunk));
      stream.on("end", () => resolve(Buffer.concat(chunks)));
      stream.on("error", (err) => reject(err));
    });

    const stat = await minioClient.statObject(bucketName, docId);

    return {
      data,
      contentType: stat.metaData["content-type"] || "application/octet-stream",
    };
  } catch (error) {
    console.error("Error reading document:", error);
    throw error;
  }
};

const deleteDocument = async (docId: string): Promise<void> => {
  try {
    await minioClient.removeObject(bucketName, docId);
  } catch (error) {
    console.error("Error deleting document:", error);
    throw error;
  }
};

export { createDocument, readDocument, deleteDocument };
