import { User } from '../../user/model/user.model';
import { Author } from '../../author/model/author.model';
export declare class AuthorSubscription {
    id: number;
    user: User;
    author: Author;
    createdAt: Date;
}
