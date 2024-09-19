import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { NovelSubscription } from '@prisma/client';

@Injectable()
export class NovelSubscriptionService {
  constructor(private prisma: PrismaService) {}

  async subscribeToNovel(
    userId: number,
    novelId: number,
  ): Promise<NovelSubscription> {
    return this.prisma.novelSubscription.create({
      data: {
        userId,
        novelId,
      },
    });
  }

  async unsubscribeFromNovel(
    userId: number,
    novelId: number,
  ): Promise<NovelSubscription> {
    const subscription = await this.prisma.novelSubscription.findFirst({
      where: {
        userId,
        novelId,
      },
    });

    if (!subscription) {
      throw new NotFoundException('Підписку не знайдено');
    }

    return this.prisma.novelSubscription.delete({
      where: { id: subscription.id },
    });
  }

  async getNovelSubscribers(novelId: number): Promise<NovelSubscription[]> {
    return this.prisma.novelSubscription.findMany({
      where: { novelId },
      include: { user: true },
    });
  }

  async getUserSubscriptions(userId: number): Promise<NovelSubscription[]> {
    return this.prisma.novelSubscription.findMany({
      where: { userId },
      include: { novel: true },
    });
  }

  async isUserSubscribedToNovel(
    userId: number,
    novelId: number,
  ): Promise<boolean> {
    const subscription = await this.prisma.novelSubscription.findFirst({
      where: {
        userId,
        novelId,
      },
    });

    return !!subscription;
  }

  async getSubscriptionCount(novelId: number): Promise<number> {
    return this.prisma.novelSubscription.count({
      where: { novelId },
    });
  }

  async getRecentSubscribers(
    novelId: number,
    limit: number = 5,
  ): Promise<NovelSubscription[]> {
    return this.prisma.novelSubscription.findMany({
      where: { novelId },
      orderBy: { createdAt: 'desc' },
      take: limit,
      include: { user: true },
    });
  }

  async getMostSubscribedNovels(
    limit: number = 10,
  ): Promise<{ novel: any; subscriberCount: number }[]> {
    return this.prisma.novel
      .findMany({
        take: limit,
        orderBy: {
          novelSubscription: {
            _count: 'desc',
          },
        },
        select: {
          id: true,
          title: true,
          img: true,
          _count: {
            select: {
              novelSubscription: true,
            },
          },
        },
      })
      .then((novels) =>
        novels.map((novel) => ({
          novel: {
            id: novel.id,
            title: novel.title,
            img: novel.img,
          },
          subscriberCount: novel._count.novelSubscription,
        })),
      );
  }

  async getSubscribedNovelsByUser(
    userId: number,
  ): Promise<{ novel: any; subscriptionDate: Date }[]> {
    return this.prisma.novelSubscription
      .findMany({
        where: { userId },
        orderBy: { createdAt: 'desc' },
        select: {
          createdAt: true,
          novel: {
            select: {
              id: true,
              title: true,
              img: true,
            },
          },
        },
      })
      .then((subscriptions) =>
        subscriptions.map((sub) => ({
          novel: sub.novel,
          subscriptionDate: sub.createdAt,
        })),
      );
  }
}
