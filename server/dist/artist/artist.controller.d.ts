import { TrackService } from "src/track/track.service";
import { ArtistService } from "./artist.service";
export declare class ArtistController {
    private readonly artistservice;
    private readonly trackservice;
    constructor(artistservice: ArtistService, trackservice: TrackService);
}
