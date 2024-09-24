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
const config_1 = require("@nestjs/config");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const author_subscription_module_1 = require("./author-subscription/author-subscription.module");
const author_module_1 = require("./author/author.module");
const country_service_1 = require("./country/country.service");
const genre_service_1 = require("./genre/genre.service");
const notification_module_1 = require("./notification/notification.module");
const novel_module_1 = require("./novel/novel.module");
const prisma_service_1 = require("./prisma/prisma.service");
const tag_service_1 = require("./tag/tag.service");
const user_module_1 = require("./user/user.module");
const tag_module_1 = require("./tag/tag.module");
const genre_module_1 = require("./genre/genre.module");
const alternative_title_module_1 = require("./alternative-title/alternative-title.module");
const country_module_1 = require("./country/country.module");
const user_rating_module_1 = require("./user-rating/user-rating.module");
const novel_subscription_module_1 = require("./novel-subscription/novel-subscription.module");
const user_notification_settings_module_1 = require("./user-notification-settings/user-notification-settings.module");
const role_module_1 = require("./role/role.module");
const team_module_1 = require("./team/team.module");
const auth_module_1 = require("./auth/auth.module");
const ban_module_1 = require("./ban/ban.module");
const appeal_module_1 = require("./appeal/appeal.module");
const bookmark_module_1 = require("./bookmark/bookmark.module");
const comment_module_1 = require("./comment/comment.module");
const complaint_reason_module_1 = require("./complaint-reason/complaint-reason.module");
const content_complaint_module_1 = require("./content-complaint/content-complaint.module");
const continue_reading_module_1 = require("./continue-reading/continue-reading.module");
const news_module_1 = require("./news/news.module");
const notification_group_module_1 = require("./notification-group/notification-group.module");
const review_module_1 = require("./review/review.module");
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
            genre_module_1.GenreModule,
            alternative_title_module_1.AlternativeTitleModule,
            country_module_1.CountryModule,
            user_rating_module_1.UserRatingModule,
            novel_subscription_module_1.NovelSubscriptionModule,
            user_notification_settings_module_1.UserNotificationSettingsModule,
            role_module_1.RoleModule,
            team_module_1.TeamModule,
            auth_module_1.AuthModule,
            config_1.ConfigModule.forRoot(),
            ban_module_1.BanModule,
            appeal_module_1.AppealModule,
            bookmark_module_1.BookmarkModule,
            comment_module_1.CommentModule,
            complaint_reason_module_1.ComplaintReasonModule,
            content_complaint_module_1.ContentComplaintModule,
            continue_reading_module_1.ContinueReadingModule,
            news_module_1.NewsModule,
            notification_group_module_1.NotificationGroupModule,
            review_module_1.ReviewModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            prisma_service_1.PrismaService,
            tag_service_1.TagService,
            genre_service_1.GenreService,
            country_service_1.CountryService,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map