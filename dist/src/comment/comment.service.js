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
exports.CommentService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let CommentService = class CommentService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createComment(data) {
        return this.prisma.comment.create({
            data,
        });
    }
    async getCommentById(id) {
        const comment = await this.prisma.comment.findUnique({
            where: { id },
        });
        if (!comment) {
            throw new common_1.NotFoundException(`Comment with ID ${id} not found`);
        }
        return comment;
    }
    async updateComment(id, data) {
        const comment = await this.prisma.comment.findUnique({
            where: { id },
        });
        if (!comment) {
            throw new common_1.NotFoundException(`Comment with ID ${id} not found`);
        }
        return this.prisma.comment.update({
            where: { id },
            data,
        });
    }
    async deleteComment(id) {
        const comment = await this.prisma.comment.findUnique({
            where: { id },
        });
        if (!comment) {
            throw new common_1.NotFoundException(`Comment with ID ${id} not found`);
        }
        return this.prisma.comment.delete({
            where: { id },
        });
    }
    async getCommentsByUserId(userId) {
        return this.prisma.comment.findMany({
            where: { userId },
        });
    }
    async getCommentsByNovelId(novelId) {
        return this.prisma.comment.findMany({
            where: { commendableTypeId: novelId },
        });
    }
    async getRepliesToComment(commentId) {
        return this.prisma.comment.findMany({
            where: { replyToId: commentId },
        });
    }
    async countCommentsByNovelId(novelId) {
        return this.prisma.comment.count({
            where: { commendableTypeId: novelId },
        });
    }
    async dislikeComment(id) {
        return this.prisma.comment.update({
            where: { id },
            data: { dislikes: { increment: 1 } },
        });
    }
    async likeComment(id) {
        return this.prisma.comment.update({
            where: { id },
            data: { likes: { increment: 1 } },
        });
    }
    async changeCommentStatus(id, status) {
        return this.prisma.comment.update({
            where: { id },
            data: { status },
        });
    }
};
exports.CommentService = CommentService;
exports.CommentService = CommentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CommentService);
//# sourceMappingURL=comment.service.js.map