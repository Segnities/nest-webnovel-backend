import { NovelSubscriptionService } from './novel-subscription.service';
import { NovelSubscription } from '@prisma/client';
export declare class NovelSubscriptionController {
    private readonly novelSubscriptionService;
    constructor(novelSubscriptionService: NovelSubscriptionService);
    subscribeToNovel(userId: number, novelId: number): Promise<NovelSubscription>;
    unsubscribeFromNovel(userId: number, novelId: number): Promise<void>;
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
