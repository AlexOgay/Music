import { ArtistRepository } from "../repository/artist.repository";
export declare class ArtistService {
    private readonly artistrepository;
    constructor(artistrepository: ArtistRepository);
    create(): Promise<void>;
}
