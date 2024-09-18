import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Query,
  ParseIntPipe,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { AuthorSubscriptionService } from './author-subscription.service';
import { AuthorSubscription } from '@prisma/client';

@Controller('author-subscriptions')
export class AuthorSubscriptionController {
  constructor(
    private readonly authorSubscriptionService: AuthorSubscriptionService,
  ) {}

  @Post(':userId/:authorId')
  @HttpCode(HttpStatus.CREATED)
  async subscribeToAuthor(
    @Param('userId', ParseIntPipe) userId: number,
    @Param('authorId', ParseIntPipe) authorId: number,
  ): Promise<AuthorSubscription> {
    return this.authorSubscriptionService.subscribeToAuthor(userId, authorId);
  }

  @Delete(':userId/:authorId')
  @HttpCode(HttpStatus.NO_CONTENT)
  async unsubscribeFromAuthor(
    @Param('userId', ParseIntPipe) userId: number,
    @Param('authorId', ParseIntPipe) authorId: number,
  ): Promise<void> {
    await this.authorSubscriptionService.unsubscribeFromAuthor(
      userId,
      authorId,
    );
  }

  @Get('author/:authorId')
  async getAuthorSubscribers(
    @Param('authorId', ParseIntPipe) authorId: number,
  ): Promise<AuthorSubscription[]> {
    return this.authorSubscriptionService.getAuthorSubscribers(authorId);
  }

  @Get('user/:userId')
  async getUserSubscriptions(
    @Param('userId', ParseIntPipe) userId: number,
  ): Promise<AuthorSubscription[]> {
    return this.authorSubscriptionService.getUserSubscriptions(userId);
  }

  @Get('check/:userId/:authorId')
  async isUserSubscribedToAuthor(
    @Param('userId', ParseIntPipe) userId: number,
    @Param('authorId', ParseIntPipe) authorId: number,
  ): Promise<boolean> {
    return this.authorSubscriptionService.isUserSubscribedToAuthor(
      userId,
      authorId,
    );
  }

  @Get('count/:authorId')
  async getSubscriptionCount(
    @Param('authorId', ParseIntPipe) authorId: number,
  ): Promise<number> {
    return this.authorSubscriptionService.getSubscriptionCount(authorId);
  }

  @Get('recent/:authorId')
  async getRecentSubscribers(
    @Param('authorId', ParseIntPipe) authorId: number,
    @Query('limit', ParseIntPipe) limit: number = 5,
  ): Promise<AuthorSubscription[]> {
    return this.authorSubscriptionService.getRecentSubscribers(authorId, limit);
  }

  @Get('most-subscribed')
  async getMostSubscribedAuthors(
    @Query('limit', ParseIntPipe) limit: number = 10,
  ): Promise<{ author: any; subscriberCount: number }[]> {
    return this.authorSubscriptionService.getMostSubscribedAuthors(limit);
  }
}
