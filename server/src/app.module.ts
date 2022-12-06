import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Filemodule } from './track/file.module';
import { TrackModule } from './track/track.module';
import * as path from 'path'

@Module({
  imports: [
    ServeStaticModule.forRoot({rootPath:path.resolve(__dirname,'static'),
    serveRoot: '/',
  }),
    TypeOrmModule.forRoot({
    type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'database1224',
      database: 'music',
      entities: [__dirname+'/*/*.entity{.ts,.js}'],
      synchronize: true
  }),
  TrackModule,
  Filemodule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
