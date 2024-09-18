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
const author_subscription_module_1 = require("./author-subscription/author-subscription.module");
const author_module_1 = require("./author/author.module");
const country_service_1 = require("./country/country.service");
const genre_service_1 = require("./genre/genre.service");
const notification_module_1 = require("./notification/notification.module");
const novel_module_1 = require("./novel/novel.module");
const prisma_service_1 = require("./prisma/prisma.service");
const status_service_1 = require("./status/status.service");
const tag_service_1 = require("./tag/tag.service");
const user_module_1 = require("./user/user.module");
const tag_module_1 = require("./tag/tag.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            author_module_1.AuthorModule,
            novel_module_1.NovelModule,
            notification_module_1.NotificationModule,
            author_subscription_module_1.AuthorSubscriptionModule,
            user_module_1.UserModule,
            tag_module_1.TagModule,
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