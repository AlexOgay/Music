import { CreateGenreDto } from "src/dto/create-genre-dto";
import { Genre } from "src/entity/genre.entity";
import { Track } from "src/entity/track.entity";
import { GenreRepository } from "../repository/genre.repository";
export declare class GenreService {
    private readonly genrerepository;
    constructor(genrerepository: GenreRepository);
    creategenre(genre: CreateGenreDto): Promise<Genre>;
    getall(): Promise<Genre[]>;
    getone(_id: any): Promise<Genre>;
    createfortrack(track: Track, genre: Genre): Promise<Track>;
}
