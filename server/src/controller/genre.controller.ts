import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CreateGenreDto } from "src/dto/create-genre-dto";
import { UpdateTrackGenreDto } from "src/dto/update-track_genre-dto";
import { Genre } from "src/entity/genre.entity";
import { Track } from "src/entity/track.entity";
import { TrackService } from "src/service/track.service";
import { GenreService } from "../service/genre.service";

@Controller('/genre')
export class GenreController{
    constructor(private readonly genreservice:GenreService,
                private readonly trackservice:TrackService
        ){}
    @Post()
    async create(@Body() genre:CreateGenreDto):Promise<Genre>{
        return await this.genreservice.creategenre(genre)
    }
    @Get()
    async getall():Promise<Genre[]>{
        return this.genreservice.getall()
    }
    @Get('/:id')
    async getone(@Param('id') id):Promise<Genre>{
        return await this.genreservice.getone(id)
    }
    @Post('/track')
    async creategenre_fortrack(@Body() data:UpdateTrackGenreDto):Promise<Track>{
        const track=await this.trackservice.getone(data.track_id)
        const genre=await this.genreservice.getone(data.genre_id)
        return await this.genreservice.createfortrack(track,genre)
    }
}