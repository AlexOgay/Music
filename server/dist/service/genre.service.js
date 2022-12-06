"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenreService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const genre_repository_1 = require("../repository/genre.repository");
let GenreService = class GenreService {
    constructor(genrerepository) {
        this.genrerepository = genrerepository;
    }
    async creategenre(genre) {
        return await this.genrerepository.save(genre);
    }
    async getall() {
        const genre = await this.genrerepository.createQueryBuilder("genre")
            .getMany();
        return genre;
    }
    async getone(_id) {
        const genre = await this.genrerepository.createQueryBuilder("genre")
            .where("genre.id=:id", { id: _id })
            .getOne();
        return genre;
    }
    async createfortrack(track, genre) {
        track.genres = [...track.genres, genre];
        return await track.save();
    }
};
GenreService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(genre_repository_1.GenreRepository)),
    __metadata("design:paramtypes", [genre_repository_1.GenreRepository])
], GenreService);
exports.GenreService = GenreService;
//# sourceMappingURL=genre.service.js.map