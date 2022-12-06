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
exports.ArtistController = void 0;
const common_1 = require("@nestjs/common");
const create_artist_dto_1 = require("../dto/create-artist-dto");
const update_track_artist_dto_1 = require("../dto/update-track_artist-dto");
const track_service_1 = require("../service/track.service");
const artist_service_1 = require("../service/artist.service");
let ArtistController = class ArtistController {
    constructor(artistservice, trackservice) {
        this.artistservice = artistservice;
        this.trackservice = trackservice;
    }
    async create(artist) {
        return await this.artistservice.create(artist);
    }
    async getall() {
        return await this.artistservice.getall();
    }
    async getone(id) {
        return await this.artistservice.getone(id);
    }
    async createfortrack(data) {
        const track = await this.trackservice.getone(data.track_id);
        const artist = await this.artistservice.getone(data.artist_id);
        return await this.artistservice.createfortrack(track, artist);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_artist_dto_1.CreateArtistDto]),
    __metadata("design:returntype", Promise)
], ArtistController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ArtistController.prototype, "getall", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ArtistController.prototype, "getone", null);
__decorate([
    (0, common_1.Post)('/track'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_track_artist_dto_1.UpdateTrackArtistDto]),
    __metadata("design:returntype", Promise)
], ArtistController.prototype, "createfortrack", null);
ArtistController = __decorate([
    (0, common_1.Controller)('/artist'),
    __metadata("design:paramtypes", [artist_service_1.ArtistService,
        track_service_1.TrackService])
], ArtistController);
exports.ArtistController = ArtistController;
//# sourceMappingURL=artist.controller.js.map