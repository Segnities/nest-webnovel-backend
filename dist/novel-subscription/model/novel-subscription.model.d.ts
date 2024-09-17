import { User } from '../../user/model/user.model';
import { Novel } from '../../novel/model/novel.model';
export declare class NovelSubscription {
    id: number;
    user: User;
    novel: Novel;
    createdAt: Date;
}
