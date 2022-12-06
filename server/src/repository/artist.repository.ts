import { Artist } from "src/entity/artist.entity";
import { CustomRepository } from "src/typeorm-ex.decorator";
import { Repository } from "typeorm";

@CustomRepository(Artist)
export class ArtistRepository extends Repository<Artist>{}