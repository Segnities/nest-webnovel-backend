import { User } from './user.model';
import { Author } from './author.model';
export declare class AuthorSubscription {
    id: number;
    createdAt: Date;
    userId: number;
    user: User;
    authorId: number;
    author: Author;
}
