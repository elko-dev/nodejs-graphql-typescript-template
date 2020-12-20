import * as FirebaseAdmin from 'firebase-admin';
import { Bucket } from '@google-cloud/storage';
import { GCFileStorage } from './GCFileStorage';
import { FileDTO } from './storage';
import firebaseCredConfigJson from "../../config/firebase-service-account.json";

const storageBucket = `gs://${firebaseCredConfigJson.project_id}`;

FirebaseAdmin.initializeApp({
    credential: FirebaseAdmin.credential.cert(require("../../config/firebase-service-account.json")),
    storageBucket: storageBucket
});

const bucket: Bucket = FirebaseAdmin.storage().bucket(storageBucket);
const storage = new GCFileStorage(bucket);

// @ts-ignore
export async function uploadUserProfilePhoto(file: Express.Multer.File, env: string, userId: string): Promise<FileDTO> {
    return await storage.storeFile(file, `pr/${env}/User_Profile_Photo/${userId}/`);
}