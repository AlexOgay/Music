import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateTextDto } from "src/dto/create-text.dto";
import { Track } from "src/entity/track.entity";
import { TrackRepository } from "src/repository/track.repository";
import { Repository } from "typeorm";
import { TextRepository } from "../repository/text.repository";

@Injectable()
export class TextService{
    constructor(
        @InjectRepository(TextRepository) private readonly textrepository:TextRepository,
        @InjectRepository(TrackRepository) private readonly trackrepository:TrackRepository
    ){}
    async createtext(text:CreateTextDto,track:Track){
        const newtext=await this.textrepository.save(text)
        track.texts=[...track.texts,newtext]
        await track.save()
        return newtext
    }

    getall(){
        return "bla"
    }
}