import { Controller, Body,Post, Get,UsePipes,ValidationPipe, Param, UseInterceptors, UploadedFiles} from "@nestjs/common";
import { FileFieldsInterceptor } from "@nestjs/platform-express";
import { CreateTrackDto } from "src/dto/create-track.dto";
import { Track } from "src/entity/track.entity";
import { TrackService } from "../service/track.service";

@Controller('/track')
export class TrackController{
    TrackRepository: any;
    constructor(private trackservice:TrackService){}
    @Post()
    @UseInterceptors(FileFieldsInterceptor([
        {name:'img', maxCount:1},
        {name:'audio', maxCount:1}
    ]))
    async create(@UploadedFiles() files ,@Body() dto:CreateTrackDto):Promise<Track>{
        const {img,audio}=files
        return await this.trackservice.createtrack(dto,img[0],audio[0]);
    }
    @Get()
    async getall():Promise<Track[]>{
        const tracks=await this.trackservice.getall();
        return tracks
    }
    @Get('/:id')
    async getone(@Param('id') id):Promise<Track>{
        return await this.trackservice.getone(id)
    }
    async delete(){
        
    }
}