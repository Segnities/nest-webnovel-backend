import { User } from './user.model';
import { Novel } from './novel.model';
import { CommendableType } from './commendable-type.model';
import { ComplaintTargetType } from './complaint-target-type.model';
export declare class Review {
    id: number;
    title: string;
    body: string;
    createdAt: Date;
    updatedAt: Date;
    likes: number;
    views: number;
    userId: number;
    user: User;
    novelId: number;
    novel: Novel;
    commendableTypeId: number;
    commendableType: CommendableType;
    complaintTargetId: number;
    complainTargetType: ComplaintTargetType;
}
