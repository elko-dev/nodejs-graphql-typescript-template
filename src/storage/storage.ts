import Express from 'express';

export interface IStorage {
    // @ts-ignore
    storeFile(file: Express.Multer.File, path: string): Promise<FileDTO>;
}

export interface FileDTO {
    publicUrl: string;
}