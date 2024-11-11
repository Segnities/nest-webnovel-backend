import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ContinueReading, Prisma } from '@prisma/client';
import { CreateContinueReadingDto } from './dto/CreateContinueReadingDto';

@Injectable()
export class ContinueReadingService {
  constructor(private prisma: PrismaService) { }

  async createContinueReading(
    data: CreateContinueReadingDto,
  ): Promise<ContinueReading> {
    return this.prisma.continueReading.create({
      data: {
        user: {
          connect: {
            id: data.userId,
          },
        },
        lastChapter: {
          connect: {
            id: data.lastChapterId,
          },
        },
      },
    });
  }

  async createOrUpdateReadingProgress(data: CreateContinueReadingDto): Promise<ContinueReading> {
    const record = await this.prisma.chapter.findFirst({
      where: {
        id: data.lastChapterId,
      },
      include: {
        novel: {
          select: {
            id: true,
          },
        },
      },
    });
    const slotNovelId = record.novel.id;
    const slot = await this.prisma.continueReading.findFirst({
      where: {
        lastChapter: {
          novelId: slotNovelId,
        },
        userId: data.userId,
      },
    });
    if (!slot) {
      return this.createContinueReading(data);
    }
    return this.prisma.continueReading.update({
      where: {
        id: slot.id,
      },
      data: {
        lastChapterId: data.lastChapterId,
      },
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
}
