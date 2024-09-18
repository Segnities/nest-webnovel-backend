import { AuthorSubscriptionService } from './author-subscription.service';
import { AuthorSubscription } from '@prisma/client';
export declare class AuthorSubscriptionController {
    private readonly authorSubscriptionService;
    constructor(authorSubscriptionService: AuthorSubscriptionService);
    subscribeToAuthor(userId: number, authorId: number): Promise<AuthorSubscription>;
    unsubscribeFromAuthor(userId: number, authorId: number): Promise<void>;
    getAuthorSubscribers(authorId: number): Promise<AuthorSubscription[]>;
    getUserSubscriptions(userId: number): Promise<AuthorSubscription[]>;
    isUserSubscribedToAuthor(userId: number, authorId: number): Promise<boolean>;
    getSubscriptionCount(authorId: number): Promise<number>;
    getRecentSubscribers(authorId: number, limit?: number): Promise<AuthorSubscription[]>;
    getMostSubscribedAuthors(limit?: number): Promise<{
        author: any;
        subscriberCount: number;
    }[]>;
}
