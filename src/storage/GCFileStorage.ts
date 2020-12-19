import { IStorage, FileDTO } from './storage';
import { Bucket } from '@google-cloud/storage';

export class GCFileStorage implements IStorage {

    private readonly bucket: Bucket;

    constructor(bucket: Bucket) {
        this.bucket = bucket;
    }

    public async storeFile(file: Express.Multer.File, path: string): Promise<FileDTO> {
        // IT IS WORTH NOTING - the below logic needs to be wrapped in a Promise
        // to work around the lack of promise support for the blobStream.on methods
        // required by the GCS API
        return new Promise<FileDTO>((
            resolve: (value?: FileDTO | PromiseLike<FileDTO> | undefined) => void,
            reject: (reason?: any) => void) => {

            const objectName = file.originalname;

            const fileBlob = this.bucket.file(`${path}${objectName}`);
            // Create a new blob in the bucket and upload the file data.
            fileBlob
                .createWriteStream({
                    metadata: {
                        contentType: file.mimetype
                    }
                }).on('error', (err: Error) => {
                console.log(err);
                return reject(err);
            }).on('finish', () => {

                const publicUrl = `https://storage.googleapis.com/${this.bucket.name}/${path}${objectName}`;
                fileBlob.makePublic().then(() => {
                    console.log('File available at', publicUrl);
                    return resolve({
                        publicUrl

                    });
                });

            }).end(file.buffer);
        });
    }
}
