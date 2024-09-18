export declare enum CommentStatus {
    ACTIVE = "ACTIVE",
    DELETED = "DELETED",
    HIDDEN_BY_MODERATOR = "HIDDEN_BY_MODERATOR",
    HIDDEN = "HIDDEN"
}
export declare class Comment {
    id: number;
    userId: number;
    nestedLevel?: number;
    body: string;
    likes: number;
    dislikes: number;
    status: CommentStatus;
    commendableTypeId: number;
    createdAt: Date;
    updatedAt: Date;
    complaintTypeId: number;
    replyToId?: number;
    complaintTargetId: number;
    replyTo?: Comment;
    replies: Comment[];
}
