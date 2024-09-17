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
var _a, _b, _c, _d, _e, _f, _g, _h, _j;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notification = void 0;
const graphql_1 = require("@nestjs/graphql");
const user_model_1 = require("../../user/model/user.model");
const notification_type_model_1 = require("../../notification-type/model/notification-type.model");
const notification_group_model_1 = require("../../notification-group/model/notification-group.model");
const novel_model_1 = require("../../novel/model/novel.model");
const comment_model_1 = require("../../comment/model/comment.model");
const review_model_1 = require("../../review/model/review.model");
const author_model_1 = require("../../author/model/author.model");
const notification_enum_1 = require("../../enums/notification.enum");
const graphql_type_json_1 = require("graphql-type-json");
let Notification = class Notification {
};
exports.Notification = Notification;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Notification.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Notification.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Notification.prototype, "message", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Notification.prototype, "img", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], Notification.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], Notification.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Notification.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_model_1.User),
    __metadata("design:type", typeof (_a = typeof user_model_1.User !== "undefined" && user_model_1.User) === "function" ? _a : Object)
], Notification.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)(() => notification_type_model_1.NotificationType),
    __metadata("design:type", typeof (_b = typeof notification_type_model_1.NotificationType !== "undefined" && notification_type_model_1.NotificationType) === "function" ? _b : Object)
], Notification.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Notification.prototype, "typeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => notification_enum_1.NotificationRelatedEntity),
    __metadata("design:type", typeof (_c = typeof notification_enum_1.NotificationRelatedEntity !== "undefined" && notification_enum_1.NotificationRelatedEntity) === "function" ? _c : Object)
], Notification.prototype, "relatedEntityType", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Notification.prototype, "relatedEntityId", void 0);
__decorate([
    (0, graphql_1.Field)(() => notification_enum_1.NotificationMessageStatus),
    __metadata("design:type", typeof (_d = typeof notification_enum_1.NotificationMessageStatus !== "undefined" && notification_enum_1.NotificationMessageStatus) === "function" ? _d : Object)
], Notification.prototype, "notificationStatus", void 0);
__decorate([
    (0, graphql_1.Field)(() => novel_model_1.Novel, { nullable: true }),
    __metadata("design:type", typeof (_e = typeof novel_model_1.Novel !== "undefined" && novel_model_1.Novel) === "function" ? _e : Object)
], Notification.prototype, "novel", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], Notification.prototype, "novelId", void 0);
__decorate([
    (0, graphql_1.Field)(() => comment_model_1.Comment, { nullable: true }),
    __metadata("design:type", typeof (_f = typeof comment_model_1.Comment !== "undefined" && comment_model_1.Comment) === "function" ? _f : Object)
], Notification.prototype, "comment", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], Notification.prototype, "commentId", void 0);
__decorate([
    (0, graphql_1.Field)(() => review_model_1.Review, { nullable: true }),
    __metadata("design:type", typeof (_g = typeof review_model_1.Review !== "undefined" && review_model_1.Review) === "function" ? _g : Object)
], Notification.prototype, "review", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], Notification.prototype, "reviewId", void 0);
__decorate([
    (0, graphql_1.Field)(() => author_model_1.Author, { nullable: true }),
    __metadata("design:type", typeof (_h = typeof author_model_1.Author !== "undefined" && author_model_1.Author) === "function" ? _h : Object)
], Notification.prototype, "author", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], Notification.prototype, "authorId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_type_json_1.default, { nullable: true }),
    __metadata("design:type", Object)
], Notification.prototype, "metadata", void 0);
__decorate([
    (0, graphql_1.Field)(() => notification_group_model_1.NotificationGroup, { nullable: true }),
    __metadata("design:type", typeof (_j = typeof notification_group_model_1.NotificationGroup !== "undefined" && notification_group_model_1.NotificationGroup) === "function" ? _j : Object)
], Notification.prototype, "notificationGroup", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], Notification.prototype, "notificationGroupId", void 0);
exports.Notification = Notification = __decorate([
    (0, graphql_1.ObjectType)()
], Notification);
//# sourceMappingURL=notification.model.js.map