import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { Prisma, Novel } from '@prisma/client';

@Injectable()
export class NovelService {
  constructor(private prisma: PrismaService) {}

  async findOneById(id: number): Promise<Novel> {
    return this.prisma.novel.findUnique({ where: { id } });
  }
  async createOne(data: Prisma.NovelCreateInput): Promise<Novel> {
    try {
      return this.prisma.novel.create({ data });
    } catch (error) {
      throw error;
    }
  }
  async findAll(args: Prisma.NovelFindManyArgs): Promise<Novel[]> {
    try {
      return this.prisma.novel.findMany(args);
    } catch (error) {
      throw error;
    }
  }
  async createMany(data: Prisma.NovelCreateManyInput): Promise<Novel[]> {
    try {
      return this.prisma.novel.createManyAndReturn({
        data,
        skipDuplicates: true,
      });
    } catch (error) {
      throw error;
    }
  }
  async updateOne(id: number, data: Prisma.NovelUpdateInput): Promise<Novel> {
    try {
      return this.prisma.novel.update({ where: { id }, data });
    } catch (error) {
      throw error;
    }
  }
  async deleteOne(id: number): Promise<Novel> {
    try {
      return this.prisma.novel.delete({ where: { id } });
    } catch (error) {
      throw error;
    }
  }
}
