import { Get, Inject, Injectable, Param } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateTrackDto } from "src/dto/create-track.dto";
import { Track } from "src/entity/track.entity";
import { createQueryBuilder, DataSource, getConnection, getCustomRepository, getManager, ObjectID, QueryBuilder, Repository } from "typeorm";
import { TrackRepository } from "../repository/track.repository";
import { FileService, FileType } from "./file.service";

@Injectable()
export class TrackService{
    constructor(
        @InjectRepository(TrackRepository) private readonly TrackRepository:TrackRepository,
        private fileservice:FileService
    ){}
    async createtrack(track:CreateTrackDto,img,audio):Promise<Track>{
        const audiopath=this.fileservice.createfile(FileType.AUDIO,audio)
        const imgpath=this.fileservice.createfile(FileType.IMG,img)
        return await this.TrackRepository.save({...track,audio:audiopath,img:imgpath})
    }
    async getall():Promise<Track[]>{
        const track=await this.TrackRepository.createQueryBuilder("track")
        .leftJoinAndSelect("track.texts","text")
        .leftJoinAndSelect("track.genres","genre")
        .leftJoinAndSelect("track.artists","artist")
        .getMany()
        return track
    }
    async getone(_id):Promise<Track>{
        const track=await this.TrackRepository.createQueryBuilder("track")
        .leftJoinAndSelect("track.texts","text")
        .leftJoinAndSelect("track.genres","genre")
        .leftJoinAndSelect("track.artists","artist")
        .where("track.id=:id",{id:_id})
        .getOne()
        return track
    }
}