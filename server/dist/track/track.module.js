"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrackModule = void 0;
const common_1 = require("@nestjs/common");
const artist_controller_1 = require("../controller/artist.controller");
const artist_repository_1 = require("../repository/artist.repository");
const artist_service_1 = require("../service/artist.service");
const genre_controller_1 = require("../controller/genre.controller");
const genre_repository_1 = require("../repository/genre.repository");
const genre_service_1 = require("../service/genre.service");
const text_controller_1 = require("../controller/text.controller");
const text_repository_1 = require("../repository/text.repository");
const text_service_1 = require("../service/text.service");
const typeorm_ex_module_1 = require("../typeorm-ex.module");
const track_controller_1 = require("../controller/track.controller");
const track_repository_1 = require("../repository/track.repository");
const track_service_1 = require("../service/track.service");
const file_service_1 = require("../service/file.service");
let TrackModule = class TrackModule {
};
TrackModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_ex_module_1.TypeOrmExModule.forCustomRepository([track_repository_1.TrackRepository, text_repository_1.TextRepository, genre_repository_1.GenreRepository, artist_repository_1.ArtistRepository])],
        providers: [track_service_1.TrackService, text_service_1.TextService, genre_service_1.GenreService, artist_service_1.ArtistService, file_service_1.FileService],
        controllers: [track_controller_1.TrackController, text_controller_1.TextController, genre_controller_1.GenreController, artist_controller_1.ArtistController],
    })
], TrackModule);
exports.TrackModule = TrackModule;
//# sourceMappingURL=track.module.js.map