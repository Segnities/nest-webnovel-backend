import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { NewsService } from './news.service';
import { News, Prisma } from '@prisma/client';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Post()
  async createNews(@Body() data: Prisma.NewsCreateInput): Promise<News> {
    return this.newsService.createNews(data);
  }

  @Get(':id')
  async getNewsById(@Param('id') id: number): Promise<News> {
    return this.newsService.getNewsById(id);
  }

  @Put(':id')
  async updateNews(
    @Param('id') id: number,
    @Body() data: Prisma.NewsUpdateInput,
  ): Promise<News> {
    return this.newsService.updateNews(id, data);
  }

  @Delete(':id')
  async deleteNews(@Param('id') id: number): Promise<News> {
    return this.newsService.deleteNews(id);
  }

  @Get()
  async getAllNews(): Promise<News[]> {
    return this.newsService.getAllNews();
  }

  @Get('user/:userId')
  async getNewsByUserId(@Param('userId') userId: number): Promise<News[]> {
    return this.newsService.getNewsByUserId(userId);
  }

  @Get('user/:userId/count')
  async countNewsByUserId(@Param('userId') userId: number): Promise<number> {
    return this.newsService.countNewsByUserId(userId);
  }

  @Put('views/:id')
  async incrementViews(@Param('id') id: number): Promise<News> {
    return this.newsService.incrementViews(id);
  }
}
