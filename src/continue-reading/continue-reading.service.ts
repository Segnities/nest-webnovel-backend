import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ContinueReading, Prisma } from '@prisma/client';

@Injectable()
export class ContinueReadingService {
  constructor(private prisma: PrismaService) {}

  async createContinueReading(
    data: Prisma.ContinueReadingCreateInput,
  ): Promise<ContinueReading> {
    return this.prisma.continueReading.create({
      data,
    });
  }

  async getContinueReadingById(id: number): Promise<ContinueReading> {
    const continueReading = await this.prisma.continueReading.findUnique({
      where: { id },
    });
    if (!continueReading) {
      throw new NotFoundException(`ContinueReading with ID ${id} not found`);
    }
    return continueReading;
  }

  async updateContinueReading(
    id: number,
    data: Prisma.ContinueReadingUpdateInput,
  ): Promise<ContinueReading> {
    const continueReading = await this.prisma.continueReading.findUnique({
      where: { id },
    });
    if (!continueReading) {
      throw new NotFoundException(`ContinueReading with ID ${id} not found`);
    }
    return this.prisma.continueReading.update({
      where: { id },
      data,
    });
  }

  async deleteContinueReading(id: number): Promise<ContinueReading> {
    const continueReading = await this.prisma.continueReading.findUnique({
      where: { id },
    });
    if (!continueReading) {
      throw new NotFoundException(`ContinueReading with ID ${id} not found`);
    }
    return this.prisma.continueReading.delete({
      where: { id },
    });
  }

  async getContinueReadingByUserId(userId: number): Promise<ContinueReading[]> {
    return this.prisma.continueReading.findMany({
      where: { userId },
    });
  }

  async updateProgress(
    userId: number,
    novelId: number,
    progressPercentage: number,
  ): Promise<ContinueReading> {
    const continueReading = await this.prisma.continueReading.findFirst({
      where: { userId, novelId },
    });
    if (!continueReading) {
      throw new NotFoundException(
        `ContinueReading entry not found for user ID ${userId} and novel ID ${novelId}`,
      );
    }
    return this.prisma.continueReading.update({
      where: { id: continueReading.id },
      data: { progressPercentage },
    });
  }
  async getUsersReadingNovel(novelId: number): Promise<ContinueReading[]> {
    return this.prisma.continueReading.findMany({
      where: { novelId },
    });
  }

  async countUsersReadingNovel(novelId: number): Promise<number> {
    return this.prisma.continueReading.count({
      where: { novelId },
    });
  }
}
