import { BaseEntity } from "typeorm";
import { Artist } from "./artist.entity";
import { Genre } from "./genre.entity";
import { Text } from "./text.entity";
export declare class Track extends BaseEntity {
    id: number;
    name: string;
    released: Date;
    img: string;
    audio: string;
    length: number;
    artists: Artist[];
    texts: Text[];
    genres: Genre[];
}
