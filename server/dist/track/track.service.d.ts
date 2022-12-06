import { CreateTrackDto } from "src/dto/create-track.dto";
import { Track } from "src/entity/track.entity";
import { TrackRepository } from "../repository/track.repository";
export declare class TrackService {
    private readonly TrackRepository;
    constructor(TrackRepository: TrackRepository);
    createtrack(track: CreateTrackDto): Promise<Track>;
    getall(): Promise<Track[]>;
    getone(_id: any): Promise<Track>;
}
