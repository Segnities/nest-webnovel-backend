import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CommendableType } from '@prisma/client';

@Injectable()
export class CommendableTypeService {
  constructor(private prisma: PrismaService) {}

  async getAllCommendableTypes(): Promise<CommendableType[]> {
    return this.prisma.commendableType.findMany();
  }

  
  async getCommendableTypeById(id: number): Promise<CommendableType | null> {
    return this.prisma.commendableType.findUnique({
      where: { id },
    });
  }
  
  async createCommendableType(name: string): Promise<CommendableType> {
    return this.prisma.commendableType.create({
      data: { name },
    });
  }

  async updateCommendableType(id: number, name: string): Promise<CommendableType> {
    return this.prisma.commendableType.update({
      where: { id },
      data: { name },
    });
  }

  async deleteCommendableType(id: number): Promise<CommendableType> {
    return this.prisma.commendableType.delete({
      where: { id },
    });
  }

  async getCommendableTypeCounts(): Promise<{ [key: string]: number }> {
    const types = await this.prisma.commendableType.findMany({
      include: {
        _count: {
          select: {
            novels: true,
            chapters: true,
            reviews: true,
            comments: true,
            news: true,
          },
        },
      },
    });

    return types.reduce((acc, type) => {
      acc[type.name] = Object.values(type._count).reduce((sum, count) => sum + count, 0);
      return acc;
    }, {});
  }
}