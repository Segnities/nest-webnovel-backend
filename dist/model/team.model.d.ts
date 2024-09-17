import { User } from './user.model';
export declare class Team {
    id: number;
    name: string;
    chapters_count: number;
    books_count: number;
    createdAt: Date;
    updatedAt: Date;
    users: User[];
}
