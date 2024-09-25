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
exports.NovelSubscriptionService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let NovelSubscriptionService = class NovelSubscriptionService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async subscribeToNovel(userId, novelId) {
        return this.prisma.novelSubscription.create({
            data: {
                userId,
                novelId,
            },
        });
    }
    async unsubscribeFromNovel(userId, novelId) {
        const subscription = await this.prisma.novelSubscription.findFirst({
            where: {
                userId,
                novelId,
            },
        });
        if (!subscription) {
            throw new common_1.NotFoundException('Підписку не знайдено');
        }
        return this.prisma.novelSubscription.delete({
            where: { id: subscription.id },
        });
    }
    async getNovelSubscribers(novelId) {
        return this.prisma.novelSubscription.findMany({
            where: { novelId },
            include: { user: true },
        });
    }
    async getUserSubscriptions(userId) {
        return this.prisma.novelSubscription.findMany({
            where: { userId },
            include: { novel: true },
        });
    }
    async isUserSubscribedToNovel(userId, novelId) {
        const subscription = await this.prisma.novelSubscription.findFirst({
            where: {
                userId,
                novelId,
            },
        });
        return !!subscription;
    }
    async getSubscriptionCount(novelId) {
        return this.prisma.novelSubscription.count({
            where: { novelId },
        });
    }
    async getRecentSubscribers(novelId, limit = 5) {
        return this.prisma.novelSubscription.findMany({
            where: { novelId },
            orderBy: { createdAt: 'desc' },
            take: limit,
            include: { user: true },
        });
    }
    async getMostSubscribedNovels(limit = 10) {
        return this.prisma.novel
            .findMany({
            take: limit,
            orderBy: {
                novelSubscription: {
                    _count: 'desc',
                },
            },
            select: {
                id: true,
                title: true,
                img: true,
                _count: {
                    select: {
                        novelSubscription: true,
                    },
                },
            },
        })
            .then((novels) => novels.map((novel) => ({
            novel: {
                id: novel.id,
                title: novel.title,
                img: novel.img,
            },
            subscriberCount: novel._count.novelSubscription,
        })));
    }
    async getSubscribedNovelsByUser(userId) {
        return this.prisma.novelSubscription
            .findMany({
            where: { userId },
            orderBy: { createdAt: 'desc' },
            select: {
                createdAt: true,
                novel: {
                    select: {
                        id: true,
                        title: true,
                        img: true,
                    },
                },
            },
        })
            .then((subscriptions) => subscriptions.map((sub) => ({
            novel: sub.novel,
            subscriptionDate: sub.createdAt,
        })));
    }
};
exports.NovelSubscriptionService = NovelSubscriptionService;
exports.NovelSubscriptionService = NovelSubscriptionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], NovelSubscriptionService);
//# sourceMappingURL=novel-subscription.service.js.map