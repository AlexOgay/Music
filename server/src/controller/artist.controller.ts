import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CreateArtistDto } from "src/dto/create-artist-dto";
import { UpdateTrackArtistDto } from "src/dto/update-track_artist-dto";
import { Artist } from "src/entity/artist.entity";
import { Track } from "src/entity/track.entity";
import { TrackService } from "src/service/track.service";
import { ArtistService } from "../service/artist.service";

@Controller('/artist')
export class ArtistController{
    constructor(private readonly artistservice:ArtistService,
                private readonly trackservice:TrackService
                ){}
    @Post()
    async create(@Body() artist:CreateArtistDto):Promise<Artist>{
        return await this.artistservice.create(artist)
    }
    @Get()
    async getall():Promise<Artist[]>{
        return await this.artistservice.getall()
    }
    @Get('/:id')
    async getone(@Param('id') id):Promise<Artist>{
        return await this.artistservice.getone(id)
    }
    @Post('/track')
    async createfortrack(@Body() data:UpdateTrackArtistDto):Promise<Track>{
        const track=await this.trackservice.getone(data.track_id)
        const artist=await this.artistservice.getone(data.artist_id)
        return await this.artistservice.createfortrack(track,artist)
    }
}