import { Genre } from "src/entity/genre.entity";
import { CustomRepository } from "src/typeorm-ex.decorator";
import { Repository } from "typeorm";

@CustomRepository(Genre)
export class GenreRepository extends Repository<Genre>{}