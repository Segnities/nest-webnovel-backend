import { Injectable } from '@nestjs/common';
import { UserRating } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserRatingService {
  constructor(private prisma: PrismaService) {}

  async createRating(
    userId: number,
    novelId: number,
    rating: number,
  ): Promise<UserRating> {
    return this.prisma.userRating.create({
      data: {
        userId,
        novelId,
        rating,
      },
    });
  }

  async updateRating(
    id: number,
    userId: number,
    novelId: number,
    rating: number,
  ): Promise<UserRating> {
    return this.prisma.userRating.update({
      where: {
        id,
        userId,
        novelId,
      },
      data: {
        rating,
      },
    });
  }

  async getUserRating(id: number): Promise<UserRating | null> {
    return this.prisma.userRating.findUnique({
      where: {
        id,
      },
    });
  }

  async getRatingsByNovel(novelId: number): Promise<UserRating[]> {
    return this.prisma.userRating.findMany({
      where: {
        novelId,
      },
    });
  }

  async deleteRating(id: number): Promise<UserRating> {
    return this.prisma.userRating.delete({
      where: {
        id,
      },
    });
  }
}
