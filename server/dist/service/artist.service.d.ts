import { CreateArtistDto } from "src/dto/create-artist-dto";
import { Artist } from "src/entity/artist.entity";
import { Track } from "src/entity/track.entity";
import { ArtistRepository } from "../repository/artist.repository";
export declare class ArtistService {
    private readonly artistrepository;
    constructor(artistrepository: ArtistRepository);
    create(artist: CreateArtistDto): Promise<CreateArtistDto & Artist>;
    getall(): Promise<Artist[]>;
    getone(_id: any): Promise<Artist>;
    createfortrack(track: Track, artist: Artist): Promise<Track>;
}
