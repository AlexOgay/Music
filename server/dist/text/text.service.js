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
exports.TextService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const track_repository_1 = require("../repository/track.repository");
const text_repository_1 = require("../repository/text.repository");
let TextService = class TextService {
    constructor(textrepository, trackrepository) {
        this.textrepository = textrepository;
        this.trackrepository = trackrepository;
    }
    async createtext(text, track) {
        const newtext = await this.textrepository.save(text);
        track.texts = [...track.texts, newtext];
        await track.save();
        return newtext;
    }
    getall() {
        return "bla";
    }
};
TextService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(text_repository_1.TextRepository)),
    __param(1, (0, typeorm_1.InjectRepository)(track_repository_1.TrackRepository)),
    __metadata("design:paramtypes", [text_repository_1.TextRepository,
        track_repository_1.TrackRepository])
], TextService);
exports.TextService = TextService;
//# sourceMappingURL=text.service.js.map