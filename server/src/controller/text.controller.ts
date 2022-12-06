import { Controller, Post, Body,UsePipes, ValidationPipe, Get } from "@nestjs/common";
import { CreateTextDto } from "src/dto/create-text.dto";
import { Text } from "src/entity/text.entity";
import { TrackService } from "src/service/track.service";
import { TextService } from "../service/text.service";

@Controller('/text')
export class TextController{
    constructor(
        private readonly TextService:TextService,
        private readonly TrackService:TrackService
    ){}
    @Post()
    async create(@Body() text:CreateTextDto):Promise<Text>{
        const track=await this.TrackService.getone(text.track_id)
        return await this.TextService.createtext(text,track)
    }
    @Get()
    getall(){
        return this.TextService.getall()
    }
    async delete(){
        
    }
}