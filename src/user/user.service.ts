import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import {
  User,
  Prisma,
  News,
  Novel,
  UserRating,
  Comment,
} from '@prisma/client';
import { CreateUserDto } from './dto/CreateUserDto';
import { DEFAULT_ROLE } from 'constants/role';

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService,
  ) { }
  async checkUserUnique(username: string, email: string) {
    const [usernameCheck, emailCheck] = await Promise.all([
      this.prisma.user.findUnique({ where: { username } }),
      this.prisma.user.findUnique({ where: { email } }),
    ]);
    return {
      usernameUnique: !Boolean(usernameCheck),
      emailUnique: !Boolean(emailCheck),
    };
  }

  async createUser(data: CreateUserDto): Promise<User> {
    return this.prisma.user.create({
      data: {
        email: data.email,
        username: data.username,
        fuid: data.fuid,
        role: {
          connect: {
            id: DEFAULT_ROLE.id,
          },
        },
      },
    });
  }

  async getByFirebaseUid(fuid: string) {
    return this.prisma.user.findFirst({
      where: {
        fuid,
      },
    });
  }

  async getAllUsers() {
    return this.prisma.user.findMany({
      select: {
        id: true,
        fuid: true,
        email: true,
        username: true,
      },
    });
  }

  async getUserById(id: number): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { id },
      include: {
        role: true,
        team: true,
        userNotificationSettings: true,
      },
    });
  }

  async getUserByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { email },
      include: {
        role: true,
      },
    });
  }

  async updateUser(id: number, data: Prisma.UserUpdateInput): Promise<User> {
    return this.prisma.user.update({
      where: { id },
      data,
    });
  }

  async deleteUser(id: number): Promise<User> {
    return this.prisma.user.delete({
      where: { id },
    });
  }

  async getUserReviews(userId: number) {
    return this.prisma.review.findMany({
      where: { userId },
      include: {
        novel: true,
      },
    });
  }

  async getUserBookmarks(userId: number) {
    return this.prisma.bookmark.findMany({
      where: { userId },
      include: {
        chapter: {
          include: {
            novel: true,
          },
        },
      },
    });
  }

  async getUserNotifications(userId: number) {
    return this.prisma.notification.findMany({
      where: { userId },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }
  async getUserComments(userId: number): Promise<Comment[]> {
    return this.prisma.comment.findMany({
      where: { userId },
      include: {
        commendableType: true,
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async getUserNews(userId: number): Promise<News[]> {
    return this.prisma.news.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });
  }

  async getUserNovelSubscriptions(userId: number): Promise<Novel[]> {
    return this.prisma.novel.findMany({
      where: {
        novelSubscription: {
          some: { userId },
        },
      },
    });
  }

  async getUserAuthorSubscriptions(userId: number) {
    return this.prisma.author.findMany({
      where: {
        authorSubscription: {
          some: { userId },
        },
      },
    });
  }

  async updateUserRole(userId: number, roleId: number): Promise<User> {
    return this.prisma.user.update({
      where: { id: userId },
      data: { roleId },
    });
  }

  async getUserRatings(userId: number): Promise<UserRating[]> {
    return this.prisma.userRating.findMany({
      where: { userId },
      include: {
        novel: true,
      },
    });
  }

  async getUserTeam(userId: number) {
    return this.prisma.user.findUnique({
      where: { id: userId },
      select: {
        team: true,
      },
    });
  }

  async getUserNovelRatings(userId: number) {
    return this.prisma.userRating.findMany({
      where: { userId },
      include: {
        novel: {
          select: {
            id: true,
            title: true,
            likes: true,
            dislikes: true,
          },
        },
      },
    });
  }

  async getUserCreatedContent(userId: number) {
    const [novels, reviews, comments, news] = await Promise.all([
      this.prisma.novel.count({ where: { authorId: userId } }),
      this.prisma.review.count({ where: { userId } }),
      this.prisma.comment.count({ where: { userId } }),
      this.prisma.news.count({ where: { userId } }),
    ]);

    return { novels, reviews, comments, news };
  }

  async getUserActivityStats(userId: number) {
    const [bookmarksCount, ratingsCount, reviewsCount, commentsCount] =
      await Promise.all([
        this.prisma.bookmark.count({ where: { userId } }),
        this.prisma.userRating.count({ where: { userId } }),
        this.prisma.review.count({ where: { userId } }),
        this.prisma.comment.count({ where: { userId } }),
      ]);

    return { bookmarksCount, ratingsCount, reviewsCount, commentsCount };
  }
}
