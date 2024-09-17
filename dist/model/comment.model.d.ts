import { User } from './user.model';
import { CommendableType } from './commendable-type.model';
import { ComplaintTargetType } from './complaint-target-type.model';
import { CommentStatus } from './enums';
export declare class Comment {
    id: number;
    userId: number;
    user: User;
    nestedLevel?: number;
    body: string;
    likes: number;
    dislikes: number;
    status: CommentStatus;
    commendableTypeId: number;
    commendableType: CommendableType;
    createdAt: Date;
    updatedAt: Date;
    complaintTypeId: number;
    replyToId?: number;
    complaintTargetId: number;
    complainTargetType: ComplaintTargetType;
    replyTo?: Comment;
    replies: Comment[];
}
