import { CreateArtistDto } from "src/dto/create-artist-dto";
import { UpdateTrackArtistDto } from "src/dto/update-track_artist-dto";
import { Artist } from "src/entity/artist.entity";
import { Track } from "src/entity/track.entity";
import { TrackService } from "src/service/track.service";
import { ArtistService } from "../service/artist.service";
export declare class ArtistController {
    private readonly artistservice;
    private readonly trackservice;
    constructor(artistservice: ArtistService, trackservice: TrackService);
    create(artist: CreateArtistDto): Promise<Artist>;
    getall(): Promise<Artist[]>;
    getone(id: any): Promise<Artist>;
    createfortrack(data: UpdateTrackArtistDto): Promise<Track>;
}
