import { text } from "stream/consumers";
import { BaseEntity, Column, Entity, JoinColumn, JoinTable, ManyToMany, ObjectID, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Artist } from "./artist.entity";
import { Genre } from "./genre.entity";
import { Text } from "./text.entity";


@Entity()
export class Track extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number
    @Column()
    name:string
    @Column()
    released:Date
    @Column()
    img:string
    @Column()
    audio:string
    @Column()
    length:number

    @ManyToMany(()=>Artist,{
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
    })
    @JoinTable()
    artists:Artist[]

    @OneToMany(()=>Text,(texts:Text)=>texts.track,{
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
    })
    texts:Text[]

    @ManyToMany(()=>Genre,{
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
    })
    @JoinTable()
    genres:Genre[]
}