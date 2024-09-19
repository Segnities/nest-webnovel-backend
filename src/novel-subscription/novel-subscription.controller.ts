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
import { NovelSubscriptionService } from './novel-subscription.service';
import { NovelSubscription } from '@prisma/client';

@Controller('novel-subscriptions')
export class NovelSubscriptionController {
  constructor(
    private readonly novelSubscriptionService: NovelSubscriptionService,
  ) {}

  @Post(':userId/:novelId')
  @HttpCode(HttpStatus.CREATED)
  async subscribeToNovel(
    @Param('userId', ParseIntPipe) userId: number,
    @Param('novelId', ParseIntPipe) novelId: number,
  ): Promise<NovelSubscription> {
    return this.novelSubscriptionService.subscribeToNovel(userId, novelId);
  }

  @Delete(':userId/:novelId')
  @HttpCode(HttpStatus.NO_CONTENT)
  async unsubscribeFromNovel(
    @Param('userId', ParseIntPipe) userId: number,
    @Param('novelId', ParseIntPipe) novelId: number,
  ): Promise<void> {
    await this.novelSubscriptionService.unsubscribeFromNovel(userId, novelId);
  }

  @Get('novel/:novelId')
  async getNovelSubscribers(
    @Param('novelId', ParseIntPipe) novelId: number,
  ): Promise<NovelSubscription[]> {
    return this.novelSubscriptionService.getNovelSubscribers(novelId);
  }

  @Get('user/:userId')
  async getUserSubscriptions(
    @Param('userId', ParseIntPipe) userId: number,
  ): Promise<NovelSubscription[]> {
    return this.novelSubscriptionService.getUserSubscriptions(userId);
  }

  @Get('check/:userId/:novelId')
  async isUserSubscribedToNovel(
    @Param('userId', ParseIntPipe) userId: number,
    @Param('novelId', ParseIntPipe) novelId: number,
  ): Promise<boolean> {
    return this.novelSubscriptionService.isUserSubscribedToNovel(
      userId,
      novelId,
    );
  }

  @Get('count/:novelId')
  async getSubscriptionCount(
    @Param('novelId', ParseIntPipe) novelId: number,
  ): Promise<number> {
    return this.novelSubscriptionService.getSubscriptionCount(novelId);
  }

  @Get('recent/:novelId')
  async getRecentSubscribers(
    @Param('novelId', ParseIntPipe) novelId: number,
    @Query('limit', ParseIntPipe) limit: number = 5,
  ): Promise<NovelSubscription[]> {
    return this.novelSubscriptionService.getRecentSubscribers(novelId, limit);
  }

  @Get('most-subscribed')
  async getMostSubscribedNovels(
    @Query('limit', ParseIntPipe) limit: number = 10,
  ): Promise<{ novel: any; subscriberCount: number }[]> {
    return this.novelSubscriptionService.getMostSubscribedNovels(limit);
  }

  @Get('user-subscribed/:userId')
  async getSubscribedNovelsByUser(
    @Param('userId', ParseIntPipe) userId: number,
  ): Promise<{ novel: any; subscriptionDate: Date }[]> {
    return this.novelSubscriptionService.getSubscribedNovelsByUser(userId);
  }
}
