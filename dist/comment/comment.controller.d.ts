import { CommentService } from './comment.service';
import { Comment, CommentStatus, Prisma } from '@prisma/client';
export declare class CommentController {
    private readonly commentService;
    constructor(commentService: CommentService);
    createComment(data: Prisma.CommentCreateInput): Promise<Comment>;
    getCommentById(id: number): Promise<Comment>;
    updateComment(id: number, data: Prisma.CommentUpdateInput): Promise<Comment>;
    deleteComment(id: number): Promise<Comment>;
    getCommentsByUserId(userId: number): Promise<Comment[]>;
    getCommentsByNovelId(novelId: number): Promise<Comment[]>;
    getRepliesToComment(commentId: number): Promise<Comment[]>;
    countCommentsByNovelId(novelId: number): Promise<number>;
    likeComment(id: number): Promise<Comment>;
    dislikeComment(id: number): Promise<Comment>;
    changeCommentStatus(id: number, status: CommentStatus): Promise<Comment>;
}
