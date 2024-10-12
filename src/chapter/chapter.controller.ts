import { Controller, Get, Post, Body, Param, Put, Delete, ParseIntPipe } from '@nestjs/common';
import { ChapterService } from './chapter.service';
import { Chapter, Prisma } from '@prisma/client';

@Controller('chapter')
export class ChapterController {
   constructor(private readonly chapterService: ChapterService) { }

   @Post()
   async createChapter(@Body() data: Prisma.ChapterCreateInput): Promise<Chapter> {
      return this.chapterService.createChapter(data);
   }

   @Get()
   async findAllChapters(): Promise<Chapter[]> {
      return this.chapterService.findAllChapters();
   }

   @Get(':id')
   async findChapterById(@Param('id', ParseIntPipe) id: number): Promise<Chapter | null> {
      return this.chapterService.findChapterById(id);
   }

   @Post('many')
   async createManyChapters(@Body() data: Prisma.ChapterCreateManyInput[]) {
      return this.chapterService.createMany(data);
   }

   @Put(':id')
   async updateChapter(
      @Param('id', ParseIntPipe) id: number,
      @Body() data: Prisma.ChapterUpdateInput,
   ): Promise<Chapter> {
      return this.chapterService.updateChapter(id, data);
   }

   @Delete(':id')
   async deleteChapter(@Param('id', ParseIntPipe) id: number): Promise<Chapter> {
      return this.chapterService.deleteChapter(id);
   }
}