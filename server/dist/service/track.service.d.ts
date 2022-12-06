import { CreateTrackDto } from "src/dto/create-track.dto";
import { Track } from "src/entity/track.entity";
import { TrackRepository } from "../repository/track.repository";
import { FileService } from "./file.service";
export declare class TrackService {
    private readonly TrackRepository;
    private fileservice;
    constructor(TrackRepository: TrackRepository, fileservice: FileService);
    createtrack(track: CreateTrackDto, img: any, audio: any): Promise<Track>;
    getall(): Promise<Track[]>;
    getone(_id: any): Promise<Track>;
}
