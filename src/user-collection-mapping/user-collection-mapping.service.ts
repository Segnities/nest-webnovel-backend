import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UserCollectionMapping, Prisma } from '@prisma/client';

@Injectable()
export class UserCollectionMappingService {
  constructor(private prisma: PrismaService) {}

  async createMapping(
    data: Prisma.UserCollectionMappingCreateInput,
  ): Promise<UserCollectionMapping> {
    return this.prisma.userCollectionMapping.create({ data });
  }

  async getMappingsByUserId(userId: number): Promise<UserCollectionMapping[]> {
    return this.prisma.userCollectionMapping.findMany({
      where: { userId },
      include: {
        collection: true,
      },
    });
  }

  async getMappingsByCollectionId(
    collectionId: number,
  ): Promise<UserCollectionMapping[]> {
    return this.prisma.userCollectionMapping.findMany({
      where: { collectionId },
      include: {
        user: true,
      },
    });
  }

  async updateMapping(
    id: number,
    data: Prisma.UserCollectionMappingUpdateInput,
  ): Promise<UserCollectionMapping> {
    return this.prisma.userCollectionMapping.update({
      where: { id },
      data,
    });
  }

  async deleteMapping(id: number): Promise<UserCollectionMapping> {
    return this.prisma.userCollectionMapping.delete({
      where: { id },
    });
  }

  async getUserCollectionCount(userId: number): Promise<number> {
    return this.prisma.userCollectionMapping.count({
      where: { userId },
    });
  }
}
