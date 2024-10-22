// src/chapter/chapter.service.ts

import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { Chapter, Prisma } from '@prisma/client';
import { UpdateManyDto } from './types/updateMany';

@Injectable()
export class ChapterService {
   constructor(private prisma: PrismaService) { }

   async createChapter(data: Prisma.ChapterCreateInput): Promise<Chapter> {
      return this.prisma.chapter.create({ data });
   }
   async createMany(
      data: Prisma.ChapterCreateManyInput[],
   ): Promise<Prisma.BatchPayload> {
      return this.prisma.chapter.createMany({
         data,
         skipDuplicates: true,
      });
   }

   async findChapterById(id: number): Promise<Chapter | null> {
      return this.prisma.chapter.findUnique({ where: { id } });
   }

   async findBySlug(slug: string) {
      return this.prisma.chapter.findUnique({
         where: { slug },
         select: {
            title: true,
            content: true,
            chapterNumber: true,
            likes: true,
            views: true
         }
      })
   }

   async findAllChapters(): Promise<Chapter[]> {
      return this.prisma.chapter.findMany();
   }

   async updateChapter(
      id: number,
      data: Prisma.ChapterUpdateInput,
   ): Promise<Chapter> {
      return this.prisma.chapter.update({ where: { id }, data });
   }

   async updateMany(data: UpdateManyDto[]) {
      const updatePromises = data.map((chapter) =>
         this.prisma.chapter.updateMany({
            where: {
               slug: chapter.slug,
            },
            data: {
               content: chapter.content,
            },
         }),
      );
      return Promise.all(updatePromises);
   }

   async deleteChapter(id: number): Promise<Chapter> {
      return this.prisma.chapter.delete({ where: { id } });
   }

   async findChaptersByNovelId(novelId: number): Promise<Chapter[]> {
      return this.prisma.chapter.findMany({ where: { novelId } });
   }

   async clearChaptersByNovelId(id: number) {
      return this.prisma.chapter.deleteMany({ where: { novelId: id } });
   }
}
