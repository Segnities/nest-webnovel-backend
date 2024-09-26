import { Injectable } from '@nestjs/common';
import { Prisma, UserRating } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserRatingService {
  constructor(private prisma: PrismaService) {}

  async findOneById(id: number): Promise<UserRating> {
    return this.prisma.userRating.findUnique({ where: { id } });
  }

  async create(data: Prisma.UserRatingCreateInput): Promise<UserRating> {
    return this.prisma.userRating.create({ data });
  }

  async update(
    id: number,
    data: Prisma.UserRatingUpdateInput,
  ): Promise<UserRating> {
    return this.prisma.userRating.update({ where: { id }, data });
  }

  async delete(id: number): Promise<UserRating> {
    return this.prisma.userRating.delete({ where: { id } });
  }
}
