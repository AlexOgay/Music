import { Text } from "src/entity/text.entity";
import { CustomRepository } from "src/typeorm-ex.decorator";
import { Repository } from "typeorm";

@CustomRepository(Text)
export class TextRepository extends Repository<Text>{}