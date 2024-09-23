import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { CommentService } from './comment.service';
import { Comment, CommentStatus, Prisma } from '@prisma/client';

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post()
  async createComment(
    @Body() data: Prisma.CommentCreateInput,
  ): Promise<Comment> {
    return this.commentService.createComment(data);
  }

  @Get(':id')
  async getCommentById(@Param('id') id: number): Promise<Comment> {
    return this.commentService.getCommentById(id);
  }

  @Put(':id')
  async updateComment(
    @Param('id') id: number,
    @Body() data: Prisma.CommentUpdateInput,
  ): Promise<Comment> {
    return this.commentService.updateComment(id, data);
  }

  @Delete(':id')
  async deleteComment(@Param('id') id: number): Promise<Comment> {
    return this.commentService.deleteComment(id);
  }

  @Get('user/:userId')
  async getCommentsByUserId(
    @Param('userId') userId: number,
  ): Promise<Comment[]> {
    return this.commentService.getCommentsByUserId(userId);
  }

  @Get('novel/:novelId')
  async getCommentsByNovelId(
    @Param('novelId') novelId: number,
  ): Promise<Comment[]> {
    return this.commentService.getCommentsByNovelId(novelId);
  }

  @Get('replies/:commentId')
  async getRepliesToComment(
    @Param('commentId') commentId: number,
  ): Promise<Comment[]> {
    return this.commentService.getRepliesToComment(commentId);
  }

  @Get('count/novel/:novelId')
  async countCommentsByNovelId(
    @Param('novelId') novelId: number,
  ): Promise<number> {
    return this.commentService.countCommentsByNovelId(novelId);
  }

  @Put('like/:id')
  async likeComment(@Param('id') id: number): Promise<Comment> {
    return this.commentService.likeComment(id);
  }

  @Put('dislike/:id')
  async dislikeComment(@Param('id') id: number): Promise<Comment> {
    return this.commentService.dislikeComment(id);
  }

  @Put('status/:id')
  async changeCommentStatus(
    @Param('id') id: number,
    @Body('status') status: CommentStatus,
  ): Promise<Comment> {
    return this.commentService.changeCommentStatus(id, status);
  }
}
