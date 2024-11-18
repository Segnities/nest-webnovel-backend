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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const role_1 = require("../../constants/role");
let UserService = class UserService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async checkUserUnique(username, email) {
        const [usernameCheck, emailCheck] = await Promise.all([
            this.prisma.user.findUnique({ where: { username } }),
            this.prisma.user.findUnique({ where: { email } }),
        ]);
        return {
            usernameUnique: !Boolean(usernameCheck),
            emailUnique: !Boolean(emailCheck),
        };
    }
    async createUser(data) {
        return this.prisma.user.create({
            data: {
                email: data.email,
                username: data.username,
                fuid: data.fuid,
                role: {
                    connect: {
                        id: role_1.DEFAULT_ROLE.id,
                    },
                },
            },
        });
    }
    async getByFirebaseUid(fuid) {
        return this.prisma.user.findFirst({
            where: {
                fuid,
            },
        });
    }
    async getAllUsers() {
        return this.prisma.user.findMany({
            select: {
                id: true,
                fuid: true,
                email: true,
                username: true,
            },
        });
    }
    async getUserById(id) {
        return this.prisma.user.findUnique({
            where: { id },
            include: {
                role: true,
                team: true,
                userNotificationSettings: true,
            },
        });
    }
    async getUserByEmail(email) {
        return this.prisma.user.findUnique({
            where: { email },
            include: {
                role: true,
            },
        });
    }
    async updateUser(id, data) {
        return this.prisma.user.update({
            where: { id },
            data,
        });
    }
    async deleteUser(id) {
        return this.prisma.user.delete({
            where: { id },
        });
    }
    async getUserReviews(userId) {
        return this.prisma.review.findMany({
            where: { userId },
            include: {
                novel: true,
            },
        });
    }
    async getUserBookmarks(userId) {
        return this.prisma.bookmark.findMany({
            where: { userId },
            include: {
                chapter: {
                    include: {
                        novel: true,
                    },
                },
            },
        });
    }
    async getUserNotifications(userId) {
        return this.prisma.notification.findMany({
            where: { userId },
            orderBy: {
                createdAt: 'desc',
            },
        });
    }
    async getUserComments(userId) {
        return this.prisma.comment.findMany({
            where: { userId },
            include: {
                commendableType: true,
            },
            orderBy: { createdAt: 'desc' },
        });
    }
    async getUserNews(userId) {
        return this.prisma.news.findMany({
            where: { userId },
            orderBy: { createdAt: 'desc' },
        });
    }
    async getUserNovelSubscriptions(userId) {
        return this.prisma.novel.findMany({
            where: {
                novelSubscription: {
                    some: { userId },
                },
            },
        });
    }
    async getUserAuthorSubscriptions(userId) {
        return this.prisma.author.findMany({
            where: {
                authorSubscription: {
                    some: { userId },
                },
            },
        });
    }
    async updateUserRole(userId, roleId) {
        return this.prisma.user.update({
            where: { id: userId },
            data: { roleId },
        });
    }
    async getUserRatings(userId) {
        return this.prisma.userRating.findMany({
            where: { userId },
            include: {
                novel: true,
            },
        });
    }
    async getUserTeam(userId) {
        return this.prisma.user.findUnique({
            where: { id: userId },
            select: {
                team: true,
            },
        });
    }
    async getUserNovelRatings(userId) {
        return this.prisma.userRating.findMany({
            where: { userId },
            include: {
                novel: {
                    select: {
                        id: true,
                        title: true,
                        likes: true,
                        dislikes: true,
                    },
                },
            },
        });
    }
    async getUserCreatedContent(userId) {
        const [novels, reviews, comments, news] = await Promise.all([
            this.prisma.novel.count({ where: { authorId: userId } }),
            this.prisma.review.count({ where: { userId } }),
            this.prisma.comment.count({ where: { userId } }),
            this.prisma.news.count({ where: { userId } }),
        ]);
        return { novels, reviews, comments, news };
    }
    async getUserActivityStats(userId) {
        const [bookmarksCount, ratingsCount, reviewsCount, commentsCount] = await Promise.all([
            this.prisma.bookmark.count({ where: { userId } }),
            this.prisma.userRating.count({ where: { userId } }),
            this.prisma.review.count({ where: { userId } }),
            this.prisma.comment.count({ where: { userId } }),
        ]);
        return { bookmarksCount, ratingsCount, reviewsCount, commentsCount };
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserService);
//# sourceMappingURL=user.service.js.map