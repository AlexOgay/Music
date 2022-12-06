import { BaseEntity } from "typeorm";
export declare class Artist extends BaseEntity {
    id: number;
    name: string;
    description: string;
    start_date: Date;
}
