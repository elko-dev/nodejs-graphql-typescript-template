import * as FirebaseAdmin from 'firebase-admin';
import {Bucket} from '@google-cloud/storage';
import {GCFileStorage} from './GCFileStorage';
import {FileDTO} from './storage';
import {elkoFirebaseConfig, firebaseServiceAccount} from "../config/config";

const firebaseConfig = firebaseServiceAccount, elkoConfig = elkoFirebaseConfig;
const storageBucket = elkoConfig.storageBucket || `gs://${firebaseConfig.project_id}`;

FirebaseAdmin.initializeApp({
    credential: FirebaseAdmin.credential.cert(firebaseConfig),
    storageBucket: storageBucket
});

const bucket: Bucket = FirebaseAdmin.storage().bucket(storageBucket);
const storage = new GCFileStorage(bucket);

// @ts-ignore
export async function uploadUserProfilePhoto(file: Express.Multer.File, env: string, userId: string): Promise<FileDTO> {
    return await storage.storeFile(file, `api/${env}/User_Profile_Photo/${userId}/`);
}