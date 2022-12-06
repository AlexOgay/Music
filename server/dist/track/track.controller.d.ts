import { CreateTrackDto } from "src/dto/create-track.dto";
import { Track } from "src/entity/track.entity";
import { TrackService } from "./track.service";
export declare class TrackController {
    private trackservice;
    TrackRepository: any;
    constructor(trackservice: TrackService);
    create(dto: CreateTrackDto): Promise<Track>;
    getall(): Promise<Track[]>;
    getone(id: any): Promise<Track>;
    delete(): Promise<void>;
}
