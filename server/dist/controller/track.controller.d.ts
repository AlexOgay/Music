import { CreateTrackDto } from "src/dto/create-track.dto";
import { Track } from "src/entity/track.entity";
import { TrackService } from "../service/track.service";
export declare class TrackController {
    private trackservice;
    TrackRepository: any;
    constructor(trackservice: TrackService);
    create(files: any, dto: CreateTrackDto): Promise<Track>;
    getall(): Promise<Track[]>;
    getone(id: any): Promise<Track>;
    delete(): Promise<void>;
}
