import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Comment, CommentStatus, Prisma } from '@prisma/client';

@Injectable()
export class CommentService {
  constructor(private prisma: PrismaService) {}

  async createComment(data: Prisma.CommentCreateInput): Promise<Comment> {
    return this.prisma.comment.create({
      data,
    });
  }

  async getCommentById(id: number): Promise<Comment> {
    const comment = await this.prisma.comment.findUnique({
      where: { id },
    });
    if (!comment) {
      throw new NotFoundException(`Comment with ID ${id} not found`);
    }
    return comment;
  }

  async updateComment(
    id: number,
    data: Prisma.CommentUpdateInput,
  ): Promise<Comment> {
    const comment = await this.prisma.comment.findUnique({
      where: { id },
    });
    if (!comment) {
      throw new NotFoundException(`Comment with ID ${id} not found`);
    }
    return this.prisma.comment.update({
      where: { id },
      data,
    });
  }

  async deleteComment(id: number): Promise<Comment> {
    const comment = await this.prisma.comment.findUnique({
      where: { id },
    });
    if (!comment) {
      throw new NotFoundException(`Comment with ID ${id} not found`);
    }
    return this.prisma.comment.delete({
      where: { id },
    });
  }

  async getCommentsByUserId(userId: number): Promise<Comment[]> {
    return this.prisma.comment.findMany({
      where: { userId },
    });
  }

  async getCommentsByNovelId(novelId: number): Promise<Comment[]> {
    return this.prisma.comment.findMany({
      where: { commendableTypeId: novelId },
    });
  }

  async getRepliesToComment(commentId: number): Promise<Comment[]> {
    return this.prisma.comment.findMany({
      where: { replyToId: commentId },
    });
  }
  async countCommentsByNovelId(novelId: number): Promise<number> {
    return this.prisma.comment.count({
      where: { commendableTypeId: novelId },
    });
  }

  async dislikeComment(id: number): Promise<Comment> {
    return this.prisma.comment.update({
      where: { id },
      data: { dislikes: { increment: 1 } },
    });
  }

  async likeComment(id: number): Promise<Comment> {
    return this.prisma.comment.update({
      where: { id },
      data: { likes: { increment: 1 } },
    });
  }

  async changeCommentStatus(
    id: number,
    status: CommentStatus,
  ): Promise<Comment> {
    return this.prisma.comment.update({
      where: { id },
      data: { status },
    });
  }
}
