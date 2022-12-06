import { CreateGenreDto } from "src/dto/create-genre-dto";
import { UpdateTrackGenreDto } from "src/dto/update-track_genre-dto";
import { Genre } from "src/entity/genre.entity";
import { Track } from "src/entity/track.entity";
import { TrackService } from "src/track/track.service";
import { GenreService } from "./genre.service";
export declare class GenreController {
    private readonly genreservice;
    private readonly trackservice;
    constructor(genreservice: GenreService, trackservice: TrackService);
    create(genre: CreateGenreDto): Promise<Genre>;
    getall(): Promise<Genre[]>;
    getone(id: any): Promise<Genre>;
    creategenre_fortrack(data: UpdateTrackGenreDto): Promise<Track>;
}
