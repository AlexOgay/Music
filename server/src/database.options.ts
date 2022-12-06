import { Injectable } from "@nestjs/common";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { Track } from "./entity/track.entity";

@Injectable()
export class DatabaseOptions implements TypeOrmOptionsFactory {

  public createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      entities: [Track],
    };
  }
}