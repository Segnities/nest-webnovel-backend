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
exports.Comment = exports.CommentStatus = void 0;
const graphql_1 = require("@nestjs/graphql");
var CommentStatus;
(function (CommentStatus) {
    CommentStatus["ACTIVE"] = "ACTIVE";
    CommentStatus["DELETED"] = "DELETED";
    CommentStatus["HIDDEN_BY_MODERATOR"] = "HIDDEN_BY_MODERATOR";
    CommentStatus["HIDDEN"] = "HIDDEN";
})(CommentStatus || (exports.CommentStatus = CommentStatus = {}));
(0, graphql_1.registerEnumType)(CommentStatus, {
    name: 'CommentStatus',
    description: 'Статуси коментарів',
});
let Comment = class Comment {
};
exports.Comment = Comment;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Comment.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Comment.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], Comment.prototype, "nestedLevel", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Comment.prototype, "body", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Comment.prototype, "likes", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Comment.prototype, "dislikes", void 0);
__decorate([
    (0, graphql_1.Field)(() => CommentStatus),
    __metadata("design:type", String)
], Comment.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Comment.prototype, "commendableTypeId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], Comment.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], Comment.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Comment.prototype, "complaintTypeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], Comment.prototype, "replyToId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Comment.prototype, "complaintTargetId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Comment, { nullable: true }),
    __metadata("design:type", Comment)
], Comment.prototype, "replyTo", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Comment]),
    __metadata("design:type", Array)
], Comment.prototype, "replies", void 0);
exports.Comment = Comment = __decorate([
    (0, graphql_1.ObjectType)()
], Comment);
//# sourceMappingURL=comment.model.js.map