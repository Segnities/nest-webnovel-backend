import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { AuthorSubscription } from '@prisma/client';

@Injectable()
export class AuthorSubscriptionService {
  constructor(private prisma: PrismaService) {}

  async subscribeToAuthor(
    userId: number,
    authorId: number,
  ): Promise<AuthorSubscription> {
    return this.prisma.authorSubscription.create({
      data: {
        userId,
        authorId,
      },
    });
  }

  async unsubscribeFromAuthor(
    userId: number,
    authorId: number,
  ): Promise<AuthorSubscription> {
    const subscription = await this.prisma.authorSubscription.findFirst({
      where: {
        userId,
        authorId,
      },
    });

    if (!subscription) {
      throw new NotFoundException('Підписку не знайдено');
    }

    return this.prisma.authorSubscription.delete({
      where: { id: subscription.id },
    });
  }

  async getAuthorSubscribers(authorId: number): Promise<AuthorSubscription[]> {
    return this.prisma.authorSubscription.findMany({
      where: { authorId },
      include: { user: true },
    });
  }

  async getUserSubscriptions(userId: number): Promise<AuthorSubscription[]> {
    return this.prisma.authorSubscription.findMany({
      where: { userId },
      include: { author: true },
    });
  }

  async isUserSubscribedToAuthor(
    userId: number,
    authorId: number,
  ): Promise<boolean> {
    const subscription = await this.prisma.authorSubscription.findFirst({
      where: {
        userId,
        authorId,
      },
    });

    return !!subscription;
  }

  async getSubscriptionCount(authorId: number): Promise<number> {
    return this.prisma.authorSubscription.count({
      where: { authorId },
    });
  }

  async getRecentSubscribers(
    authorId: number,
    limit: number = 5,
  ): Promise<AuthorSubscription[]> {
    return this.prisma.authorSubscription.findMany({
      where: { authorId },
      orderBy: { createdAt: 'desc' },
      take: limit,
      include: { user: true },
    });
  }

  async getMostSubscribedAuthors(
    limit: number = 10,
  ): Promise<{ author: any; subscriberCount: number }[]> {
    return this.prisma.author
      .findMany({
        take: limit,
        orderBy: {
          authorSubscription: {
            _count: 'desc',
          },
        },
        select: {
          id: true,
          name: true,
          img: true,
          _count: {
            select: {
              authorSubscription: true,
            },
          },
        },
      })
      .then((authors) =>
        authors.map((author) => ({
          author: {
            id: author.id,
            name: author.name,
            img: author.img,
          },
          subscriberCount: author._count.authorSubscription,
        })),
      );
  }
}
