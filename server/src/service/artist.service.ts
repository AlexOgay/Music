import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateArtistDto } from "src/dto/create-artist-dto";
import { Artist } from "src/entity/artist.entity";
import { Track } from "src/entity/track.entity";
import { ArtistRepository } from "../repository/artist.repository";

@Injectable()
export class ArtistService{
    constructor(@InjectRepository(ArtistRepository) private readonly artistrepository:ArtistRepository){}
    async create(artist:CreateArtistDto){
        return await this.artistrepository.save(artist)
    }
    async getall(){
        return await this.artistrepository.createQueryBuilder("artist")
        .getMany()
    }
    async getone(_id):Promise<Artist>{
        const artist= await this.artistrepository.createQueryBuilder("artist")
        .where("artist.id=:id",{id:_id})
        .getOne()
        return artist
    }
    async createfortrack(track:Track,artist:Artist){
        track.artists=[...track.artists,artist]
        return await track.save()
    }
}