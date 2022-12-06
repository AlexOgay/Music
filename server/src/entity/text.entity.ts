import { BaseEntity, Column, Entity, JoinColumn, JoinTable, ManyToOne, ObjectID, PrimaryGeneratedColumn } from "typeorm";
import { Track } from "./track.entity";

@Entity()
export class Text extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number
    @Column()
    text:string
    @Column()
    timing:number
    @ManyToOne(()=> Track,(track:Track)=>track.texts)
    @JoinColumn({name : 'track_id', referencedColumnName: 'id'})
    track:Track
    
}