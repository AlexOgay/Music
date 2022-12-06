import { Module } from '@nestjs/common';
import { ArtistController } from 'src/controller/artist.controller';
import { ArtistRepository } from 'src/repository/artist.repository';
import { ArtistService } from 'src/service/artist.service';
import { GenreController } from 'src/controller/genre.controller';
import { GenreRepository } from 'src/repository/genre.repository';
import { GenreService } from 'src/service/genre.service';
import { TextController } from 'src/controller/text.controller';
import { TextRepository } from 'src/repository/text.repository';
import { TextService } from 'src/service/text.service';
import { TypeOrmExModule } from 'src/typeorm-ex.module';
import { TrackController } from '../controller/track.controller';
import { TrackRepository } from '../repository/track.repository';
import { TrackService } from '../service/track.service';
import { FileService } from 'src/service/file.service';
@Module({
  imports: [TypeOrmExModule.forCustomRepository([TrackRepository,TextRepository,GenreRepository,ArtistRepository])],
  providers: [TrackService,TextService,GenreService,ArtistService,FileService],
  controllers: [TrackController,TextController,GenreController,ArtistController],
})
export class TrackModule {}