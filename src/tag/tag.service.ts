import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { Prisma, Tag } from '@prisma/client';

@Injectable()
export class TagService {
  constructor(private prisma: PrismaService) {}

  async findOneById(id: number): Promise<Tag> {
    return this.prisma.tag.findUnique({ where: { id } });
  }

  async createOne(data: Prisma.TagCreateInput): Promise<Tag> {
    try {
      return this.prisma.tag.create({ data });
    } catch (error) {
      throw error;
    }
  }

  async findAll(args: Prisma.TagFindManyArgs): Promise<Tag[]> {
    try {
      return this.prisma.tag.findMany(args);
    } catch (error) {
      throw error;
    }
  }

  async createMany(
    data: Prisma.TagCreateManyInput,
  ): Promise<Prisma.BatchPayload> {
    try {
      return this.prisma.tag.createMany({
        data,
        skipDuplicates: true,
      });
    } catch (error) {
      throw error;
    }
  }

  async updateOne(id: number, data: Prisma.TagUpdateInput): Promise<Tag> {
    try {
      return this.prisma.tag.update({ where: { id }, data });
    } catch (error) {
      throw error;
    }
  }

  async deleteOne(id: number): Promise<Tag> {
    try {
      return this.prisma.tag.delete({ where: { id } });
    } catch (error) {
      throw error;
    }
  }
}
