import { User } from './user.model';
import { Novel } from './novel.model';
export declare class UserRating {
    id: number;
    rating: number;
    createdAt: Date;
    updatedAt: Date;
    novelId: number;
    novel: Novel;
    userId: number;
    user: User;
}
