// src/report.ts
import { databases } from './appwrite';
import dotenv from 'dotenv';
dotenv.config();

const databaseId = process.env.DATABASE_ID;
const collectionId = process.env.REPORTS_COLLECTION_ID;
export const reportPost = async (postId: string, reason: string) => {
  try {
    const response = await databases.createDocument(databaseId, collectionId, {
      postId,
      reportedAt: new Date().toISOString(),
      reason,
    });
    console.log('Report submitted:', response);
  } catch (error) {
    console.error('Error reporting post:', error);
    throw error;
  }
};
