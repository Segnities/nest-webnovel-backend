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
let UserService = class UserService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createUser(data) {
        return this.prisma.user.create({ data });
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
    async getUserCollections(userId) {
        return this.prisma.userCollectionMapping.findMany({
            where: { userId },
            include: {
                collection: true,
                novelCollectionMapping: {
                    include: {
                        novel: true,
                    },
                },
            },
        });
    }
    async getUserBans(userId) {
        return this.prisma.ban.findMany({
            where: { userId },
            include: {
                appeal: true,
            },
        });
    }
    async getUserComplaints(userId) {
        return this.prisma.userComplaint.findMany({
            where: { userId },
            include: {
                reason: true,
                complaintTargetType: true,
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
    async getContinueReadingList(userId) {
        return this.prisma.continueReading.findMany({
            where: { userId },
            include: {
                novel: true,
                lastChapter: true,
            },
            orderBy: {
                novel: {
                    updatedAt: 'desc',
                },
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
    async getUserContentComplaints(userId) {
        return this.prisma.contentComplaint.findMany({
            where: { issuedBy: userId },
            include: {
                complaintReason: true,
                complaintTargetType: true,
            },
        });
    }
    async getUserIssuedBans(userId) {
        return this.prisma.ban.findMany({
            where: { issuedBy: userId },
            include: {
                user: true,
                complaintTargetType: true,
            },
        });
    }
    async getUserPermissions(userId) {
        return this.prisma.user.findUnique({
            where: { id: userId },
            select: {
                role: {
                    include: {
                        permissions: true,
                    },
                },
            },
        });
    }
    async getUserAppeals(userId) {
        return this.prisma.appeal.findMany({
            where: {
                bans: {
                    some: {
                        userId,
                    },
                },
            },
            include: {
                appeal: true,
                reviewedByUser: true,
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
                        novelRating: true,
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