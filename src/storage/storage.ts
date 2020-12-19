export interface IStorage {
    storeFile(file: Express.Multer.File, path: string): Promise<FileDTO>;
}

export interface FileDTO {
    publicUrl: string;
}