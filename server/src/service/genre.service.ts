import { Injectable, Post } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateGenreDto } from "src/dto/create-genre-dto";
import { Genre } from "src/entity/genre.entity";
import { Track } from "src/entity/track.entity";
import { GenreRepository } from "../repository/genre.repository";

@Injectable()
export class GenreService{
    constructor(@InjectRepository(GenreRepository) private readonly genrerepository:GenreRepository){}
    async creategenre(genre:CreateGenreDto):Promise<Genre>{
        return await this.genrerepository.save(genre)
    }
    async getall(){
        const genre=await this.genrerepository.createQueryBuilder("genre")
        .getMany()
        return genre
    }
    async getone(_id):Promise<Genre>{
        const genre=await this.genrerepository.createQueryBuilder("genre")
        .where("genre.id=:id",{id:_id})
        .getOne()
        return genre
    }
    async createfortrack(track:Track,genre:Genre){
        track.genres=[...track.genres,genre]
        return await track.save()
    }
}