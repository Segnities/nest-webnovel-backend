import { Novel } from '@/@generated/novel/novel.model';
import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { NovelCreateInput } from '@/@generated/novel/novel-create.input';
import { NovelCreateManyInput } from '@/@generated/novel/novel-create-many.input';

@Injectable()
export class NovelService {
  constructor(private prisma: PrismaService) {}

  async findOneById(id: number): Promise<Novel> {
    return this.prisma.novel.findUnique({ where: { id } });
  }
  async createOne(data: NovelCreateInput): Promise<Novel> {
    return this.prisma.novel.create({ data });
  }

  async createMany(data: NovelCreateManyInput): Promise<Novel[]> {
    return this.prisma.novel.createManyAndReturn({ data });
  }
}
