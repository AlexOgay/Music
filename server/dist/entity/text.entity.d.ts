import { BaseEntity } from "typeorm";
import { Track } from "./track.entity";
export declare class Text extends BaseEntity {
    id: number;
    text: string;
    timing: number;
    track: Track;
}
