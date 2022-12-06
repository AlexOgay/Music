import { Track } from "src/entity/track.entity";
import { CustomRepository } from "src/typeorm-ex.decorator";
import { EntityRepository, Repository } from "typeorm";

@CustomRepository(Track)
export class TrackRepository extends Repository<Track>{}