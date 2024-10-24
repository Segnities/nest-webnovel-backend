import {
   Controller,
   Get,
   Post,
   Body,
   Param,
   Put,
   Delete,
   ParseIntPipe,
} from '@nestjs/common';
import { ChapterService } from './chapter.service';
import { Chapter, Prisma } from '@prisma/client';
import { UpdateManyDto } from './types/updateMany';

@Controller('chapter')
export class ChapterController {
   constructor(private readonly chapterService: ChapterService) { }

   @Post()
   async createChapter(
      @Body() data: Prisma.ChapterCreateInput,
   ): Promise<Chapter> {
      return this.chapterService.createChapter(data);
   }

   @Get()
   async findAllChapters(): Promise<Chapter[]> {
      return this.chapterService.findAllChapters();
   }

   @Get('count/:novelSlug')
   async getChaptersNovelCountBySlug(
      @Param('novelSlug') novelSlug: string
   ) {
      const chaptersCount = await this.chapterService.getChaptersNovelCountBySlug(novelSlug);
      return {
         chaptersCount
      }
   }

   @Get('slug/:slug')
   async findOneBySlug(
      @Param('slug') slug: string,
   ) {
      return this.chapterService.findBySlug(slug);
   }


   @Get(':id')
   async findChapterById(
      @Param('id', ParseIntPipe) id: number,
   ): Promise<Chapter | null> {
      return this.chapterService.findChapterById(id);
   }

   @Post('many')
   async createManyChapters(@Body() data: Prisma.ChapterCreateManyInput[]) {
      return this.chapterService.createMany(data);
   }

   @Put('many')
   async updateMany(@Body() data: UpdateManyDto[]) {
      return this.chapterService.updateMany(data);
   }

   @Put(':id')
   async updateChapter(
      @Param('id', ParseIntPipe) id: number,
      @Body() data: Prisma.ChapterUpdateInput,
   ): Promise<Chapter> {
      return this.chapterService.updateChapter(id, data);
   }

   @Delete('clear-by-novelId/:id')
   async clearChaptersByNovelId(@Param('id', ParseIntPipe) id: number) {
      return this.chapterService.clearChaptersByNovelId(id);
   }

   @Delete(':id')
   async deleteChapter(@Param('id', ParseIntPipe) id: number): Promise<Chapter> {
      return this.chapterService.deleteChapter(id);
   }
}
