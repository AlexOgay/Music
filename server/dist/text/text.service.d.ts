import { CreateTextDto } from "src/dto/create-text.dto";
import { Track } from "src/entity/track.entity";
import { TrackRepository } from "src/repository/track.repository";
import { TextRepository } from "../repository/text.repository";
export declare class TextService {
    private readonly textrepository;
    private readonly trackrepository;
    constructor(textrepository: TextRepository, trackrepository: TrackRepository);
    createtext(text: CreateTextDto, track: Track): Promise<CreateTextDto & import("../entity/text.entity").Text>;
    getall(): string;
}
