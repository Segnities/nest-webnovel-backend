import { Controller } from '@nestjs/common';
import { CommentService } from './comment.service';
import { Comment, CommentStatus, Prisma } from '@prisma/client';

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  async createComment(data: Prisma.CommentCreateInput): Promise<Comment> {
    return this.commentService.createComment(data);
  }

  async getCommentById(id: number): Promise<Comment> {
    return this.commentService.getCommentById(id);
  }

  async updateComment(
    id: number,
    data: Prisma.CommentUpdateInput,
  ): Promise<Comment> {
    return this.commentService.updateComment(id, data);
  }

  async deleteComment(id: number): Promise<Comment> {
    return this.commentService.deleteComment(id);
  }

  async getCommentsByUserId(userId: number): Promise<Comment[]> {
    return this.commentService.getCommentsByUserId(userId);
  }

  async getCommentsByNovelId(novelId: number): Promise<Comment[]> {
    return this.commentService.getCommentsByNovelId(novelId);
  }

  async getRepliesToComment(commentId: number): Promise<Comment[]> {
    return this.commentService.getRepliesToComment(commentId);
  }

  async countCommentsByNovelId(novelId: number): Promise<number> {
    return this.commentService.countCommentsByNovelId(novelId);
  }

  async likeComment(id: number): Promise<Comment> {
    return this.commentService.likeComment(id);
  }

  async dislikeComment(id: number): Promise<Comment> {
    return this.commentService.dislikeComment(id);
  }

  async changeCommentStatus(
    id: number,
    status: CommentStatus,
  ): Promise<Comment> {
    return this.commentService.changeCommentStatus(id, status);
  }
}
