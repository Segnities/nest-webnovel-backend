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
exports.CommentController = void 0;
const common_1 = require("@nestjs/common");
const comment_service_1 = require("./comment.service");
const client_1 = require("@prisma/client");
let CommentController = class CommentController {
    constructor(commentService) {
        this.commentService = commentService;
    }
    async createComment(data) {
        return this.commentService.createComment(data);
    }
    async getCommentById(id) {
        return this.commentService.getCommentById(id);
    }
    async updateComment(id, data) {
        return this.commentService.updateComment(id, data);
    }
    async deleteComment(id) {
        return this.commentService.deleteComment(id);
    }
    async getCommentsByUserId(userId) {
        return this.commentService.getCommentsByUserId(userId);
    }
    async getCommentsByNovelId(novelId) {
        return this.commentService.getCommentsByNovelId(novelId);
    }
    async getRepliesToComment(commentId) {
        return this.commentService.getRepliesToComment(commentId);
    }
    async countCommentsByNovelId(novelId) {
        return this.commentService.countCommentsByNovelId(novelId);
    }
    async likeComment(id) {
        return this.commentService.likeComment(id);
    }
    async dislikeComment(id) {
        return this.commentService.dislikeComment(id);
    }
    async changeCommentStatus(id, status) {
        return this.commentService.changeCommentStatus(id, status);
    }
};
exports.CommentController = CommentController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "createComment", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "getCommentById", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "updateComment", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "deleteComment", null);
__decorate([
    (0, common_1.Get)('user/:userId'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "getCommentsByUserId", null);
__decorate([
    (0, common_1.Get)('novel/:novelId'),
    __param(0, (0, common_1.Param)('novelId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "getCommentsByNovelId", null);
__decorate([
    (0, common_1.Get)('replies/:commentId'),
    __param(0, (0, common_1.Param)('commentId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "getRepliesToComment", null);
__decorate([
    (0, common_1.Get)('count/novel/:novelId'),
    __param(0, (0, common_1.Param)('novelId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "countCommentsByNovelId", null);
__decorate([
    (0, common_1.Put)('like/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "likeComment", null);
__decorate([
    (0, common_1.Put)('dislike/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "dislikeComment", null);
__decorate([
    (0, common_1.Put)('status/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "changeCommentStatus", null);
exports.CommentController = CommentController = __decorate([
    (0, common_1.Controller)('comment'),
    __metadata("design:paramtypes", [comment_service_1.CommentService])
], CommentController);
//# sourceMappingURL=comment.controller.js.map