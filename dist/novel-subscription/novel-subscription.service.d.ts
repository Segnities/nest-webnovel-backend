import { PrismaService } from '@/prisma/prisma.service';
import { NovelSubscription } from '@prisma/client';
export declare class NovelSubscriptionService {
    private prisma;
    constructor(prisma: PrismaService);
    subscribeToNovel(userId: number, novelId: number): Promise<NovelSubscription>;
    unsubscribeFromNovel(userId: number, novelId: number): Promise<NovelSubscription>;
    getNovelSubscribers(novelId: number): Promise<NovelSubscription[]>;
    getUserSubscriptions(userId: number): Promise<NovelSubscription[]>;
    isUserSubscribedToNovel(userId: number, novelId: number): Promise<boolean>;
    getSubscriptionCount(novelId: number): Promise<number>;
    getRecentSubscribers(novelId: number, limit?: number): Promise<NovelSubscription[]>;
    getMostSubscribedNovels(limit?: number): Promise<{
        novel: any;
        subscriberCount: number;
    }[]>;
    getSubscribedNovelsByUser(userId: number): Promise<{
        novel: any;
        subscriptionDate: Date;
    }[]>;
}
