import { PrismaService } from '@/prisma/prisma.service';
import { AuthorSubscription } from '@prisma/client';
export declare class AuthorSubscriptionService {
    private prisma;
    constructor(prisma: PrismaService);
    subscribeToAuthor(userId: number, authorId: number): Promise<AuthorSubscription>;
    unsubscribeFromAuthor(userId: number, authorId: number): Promise<AuthorSubscription>;
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
