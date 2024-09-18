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
exports.AuthorSubscriptionService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let AuthorSubscriptionService = class AuthorSubscriptionService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async subscribeToAuthor(userId, authorId) {
        return this.prisma.authorSubscription.create({
            data: {
                userId,
                authorId,
            },
        });
    }
    async unsubscribeFromAuthor(userId, authorId) {
        const subscription = await this.prisma.authorSubscription.findFirst({
            where: {
                userId,
                authorId,
            },
        });
        if (!subscription) {
            throw new common_1.NotFoundException('Підписку не знайдено');
        }
        return this.prisma.authorSubscription.delete({
            where: { id: subscription.id },
        });
    }
    async getAuthorSubscribers(authorId) {
        return this.prisma.authorSubscription.findMany({
            where: { authorId },
            include: { user: true },
        });
    }
    async getUserSubscriptions(userId) {
        return this.prisma.authorSubscription.findMany({
            where: { userId },
            include: { author: true },
        });
    }
    async isUserSubscribedToAuthor(userId, authorId) {
        const subscription = await this.prisma.authorSubscription.findFirst({
            where: {
                userId,
                authorId,
            },
        });
        return !!subscription;
    }
    async getSubscriptionCount(authorId) {
        return this.prisma.authorSubscription.count({
            where: { authorId },
        });
    }
    async getRecentSubscribers(authorId, limit = 5) {
        return this.prisma.authorSubscription.findMany({
            where: { authorId },
            orderBy: { createdAt: 'desc' },
            take: limit,
            include: { user: true },
        });
    }
    async getMostSubscribedAuthors(limit = 10) {
        return this.prisma.author
            .findMany({
            take: limit,
            orderBy: {
                authorSubscription: {
                    _count: 'desc',
                },
            },
            select: {
                id: true,
                name: true,
                img: true,
                _count: {
                    select: {
                        authorSubscription: true,
                    },
                },
            },
        })
            .then((authors) => authors.map((author) => ({
            author: {
                id: author.id,
                name: author.name,
                img: author.img,
            },
            subscriberCount: author._count.authorSubscription,
        })));
    }
};
exports.AuthorSubscriptionService = AuthorSubscriptionService;
exports.AuthorSubscriptionService = AuthorSubscriptionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AuthorSubscriptionService);
//# sourceMappingURL=author-subscription.service.js.map