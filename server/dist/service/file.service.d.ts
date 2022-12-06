export declare enum FileType {
    AUDIO = "audio",
    IMG = "img"
}
export declare class FileService {
    createfile(type: FileType, file: any): string;
    removefile(file: string): void;
}
