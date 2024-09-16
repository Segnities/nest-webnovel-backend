"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const graphql_1 = require("@nestjs/graphql");
const apollo_1 = require("@nestjs/apollo");
const path_1 = require("path");
const prisma_service_1 = require("./prisma/prisma.service");
const tag_service_1 = require("./tag/tag.service");
const genre_service_1 = require("./genre/genre.service");
const country_service_1 = require("./country/country.service");
const status_service_1 = require("./status/status.service");
const author_module_1 = require("./author/author.module");
const novel_module_1 = require("./novel/novel.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloDriver,
                playground: process.env.ENV === 'dev',
                autoSchemaFile: (0, path_1.join)(process.cwd(), 'src/shema.gql'),
            }),
            author_module_1.AuthorModule,
            novel_module_1.NovelModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            prisma_service_1.PrismaService,
            tag_service_1.TagService,
            genre_service_1.GenreService,
            country_service_1.CountryService,
            status_service_1.StatusService,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map