import { User } from './user.model';
import { Novel } from './novel.model';
export declare class NovelSubscription {
    id: number;
    createdAt: Date;
    userId: number;
    user: User;
    novelId: number;
    novel: Novel;
}
