import { Module } from "@nestjs/common";
import { FileService } from "src/service/file.service";


@Module({
    providers:[FileService]
})
export class Filemodule{}