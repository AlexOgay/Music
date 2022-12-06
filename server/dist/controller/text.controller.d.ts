import { CreateTextDto } from "src/dto/create-text.dto";
import { Text } from "src/entity/text.entity";
import { TrackService } from "src/service/track.service";
import { TextService } from "../service/text.service";
export declare class TextController {
    private readonly TextService;
    private readonly TrackService;
    constructor(TextService: TextService, TrackService: TrackService);
    create(text: CreateTextDto): Promise<Text>;
    getall(): string;
    delete(): Promise<void>;
}
