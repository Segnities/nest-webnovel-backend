import { User } from './user.model';
import { CommendableType } from './commendable-type.model';
import { ComplaintTargetType } from './complaint-target-type.model';
export declare class News {
    id: number;
    title: string;
    body: string;
    likes: number;
    views: number;
    published: boolean;
    createdAt: Date;
    updatedAt: Date;
    commendableTypeId: number;
    commendableType: CommendableType;
    userId: number;
    user: User;
    complaintTargetId: number;
    complainTargetType: ComplaintTargetType;
}
