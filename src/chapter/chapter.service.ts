// src/chapter/chapter.service.ts

import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { Chapter, Prisma } from '@prisma/client';

@Injectable()
export class ChapterService {
   constructor(private prisma: PrismaService) { }

   async createChapter(data: Prisma.ChapterCreateInput): Promise<Chapter> {
      return this.prisma.chapter.create({ data });
   }
   async createMany(data: Prisma.ChapterCreateManyInput[]): Promise<Prisma.BatchPayload> {
      return this.prisma.chapter.createMany({
         data,
         skipDuplicates: true,
      });
   }
   async findChapterById(id: number): Promise<Chapter | null> {
      return this.prisma.chapter.findUnique({ where: { id } });
   }

   async findAllChapters(): Promise<Chapter[]> {
      return this.prisma.chapter.findMany();
   }

   async updateChapter(id: number, data: Prisma.ChapterUpdateInput): Promise<Chapter> {
      return this.prisma.chapter.update({ where: { id }, data });
   }

   async deleteChapter(id: number): Promise<Chapter> {
      return this.prisma.chapter.delete({ where: { id } });
   }

   async findChaptersByNovelId(novelId: number): Promise<Chapter[]> {
      return this.prisma.chapter.findMany({ where: { novelId } });
   }

   async findChapterBySlug(slug: string): Promise<Chapter | null> {
      return this.prisma.chapter.findUnique({ where: { slug } });
   }
}