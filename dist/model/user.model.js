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
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const graphql_1 = require("@nestjs/graphql");
const enums_1 = require("./enums");
const role_model_1 = require("./role.model");
const team_model_1 = require("./team.model");
const user_rating_model_1 = require("./user-rating.model");
const comment_model_1 = require("./comment.model");
const bookmark_model_1 = require("./bookmark.model");
const review_model_1 = require("./review.model");
const user_collection_mapping_model_1 = require("./user-collection-mapping.model");
const continue_reading_model_1 = require("./continue-reading.model");
const news_model_1 = require("./news.model");
const user_complaint_model_1 = require("./user-complaint.model");
const complaint_reason_model_1 = require("./complaint-reason.model");
const content_complaint_model_1 = require("./content-complaint.model");
const ban_model_1 = require("./ban.model");
const appeal_model_1 = require("./appeal.model");
const user_notification_settings_model_1 = require("./user-notification-settings.model");
const novel_subscription_model_1 = require("./novel-subscription.model");
const notification_model_1 = require("./notification.model");
const author_subscription_model_1 = require("./author-subscription.model");
(0, graphql_1.registerEnumType)(enums_1.Provider, {
    name: 'Provider',
});
(0, graphql_1.registerEnumType)(enums_1.ROLE_NAME, {
    name: 'ROLE_NAME',
});
let User = class User {
};
exports.User = User;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => enums_1.Provider),
    __metadata("design:type", String)
], User.prototype, "provider", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], User.prototype, "img", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], User.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], User.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], User.prototype, "roleId", void 0);
__decorate([
    (0, graphql_1.Field)(() => role_model_1.Role),
    __metadata("design:type", role_model_1.Role)
], User.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], User.prototype, "teamId", void 0);
__decorate([
    (0, graphql_1.Field)(() => team_model_1.Team, { nullable: true }),
    __metadata("design:type", team_model_1.Team)
], User.prototype, "team", void 0);
__decorate([
    (0, graphql_1.Field)(() => [user_rating_model_1.UserRating]),
    __metadata("design:type", Array)
], User.prototype, "usersRatings", void 0);
__decorate([
    (0, graphql_1.Field)(() => [comment_model_1.Comment]),
    __metadata("design:type", Array)
], User.prototype, "comments", void 0);
__decorate([
    (0, graphql_1.Field)(() => [bookmark_model_1.Bookmark]),
    __metadata("design:type", Array)
], User.prototype, "bookmarks", void 0);
__decorate([
    (0, graphql_1.Field)(() => [review_model_1.Review]),
    __metadata("design:type", Array)
], User.prototype, "reviews", void 0);
__decorate([
    (0, graphql_1.Field)(() => [user_collection_mapping_model_1.UserCollectionMapping]),
    __metadata("design:type", Array)
], User.prototype, "userCollectionMapping", void 0);
__decorate([
    (0, graphql_1.Field)(() => [continue_reading_model_1.ContinueReading]),
    __metadata("design:type", Array)
], User.prototype, "continueReading", void 0);
__decorate([
    (0, graphql_1.Field)(() => [news_model_1.News]),
    __metadata("design:type", Array)
], User.prototype, "news", void 0);
__decorate([
    (0, graphql_1.Field)(() => [user_complaint_model_1.UserComplaint]),
    __metadata("design:type", Array)
], User.prototype, "userComplaints", void 0);
__decorate([
    (0, graphql_1.Field)(() => [complaint_reason_model_1.ComplaintReason]),
    __metadata("design:type", Array)
], User.prototype, "complaintReasons", void 0);
__decorate([
    (0, graphql_1.Field)(() => [content_complaint_model_1.ContentComplaint]),
    __metadata("design:type", Array)
], User.prototype, "issuedContentComplaints", void 0);
__decorate([
    (0, graphql_1.Field)(() => [content_complaint_model_1.ContentComplaint]),
    __metadata("design:type", Array)
], User.prototype, "resolvedContentComplaints", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ban_model_1.Ban]),
    __metadata("design:type", Array)
], User.prototype, "issuedBans", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ban_model_1.Ban]),
    __metadata("design:type", Array)
], User.prototype, "userBans", void 0);
__decorate([
    (0, graphql_1.Field)(() => [appeal_model_1.Appeal]),
    __metadata("design:type", Array)
], User.prototype, "reviewedAppeals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [user_notification_settings_model_1.UserNotificationSettings]),
    __metadata("design:type", Array)
], User.prototype, "userNotificationSettings", void 0);
__decorate([
    (0, graphql_1.Field)(() => [novel_subscription_model_1.NovelSubscription]),
    __metadata("design:type", Array)
], User.prototype, "novelsSubscription", void 0);
__decorate([
    (0, graphql_1.Field)(() => [notification_model_1.Notification]),
    __metadata("design:type", Array)
], User.prototype, "notifications", void 0);
__decorate([
    (0, graphql_1.Field)(() => [author_subscription_model_1.AuthorSubscription]),
    __metadata("design:type", Array)
], User.prototype, "authorSubscription", void 0);
exports.User = User = __decorate([
    (0, graphql_1.ObjectType)()
], User);
//# sourceMappingURL=user.model.js.map