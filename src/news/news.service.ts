import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { News, Prisma } from '@prisma/client';

@Injectable()
export class NewsService {
  constructor(private prisma: PrismaService) {}

  async createNews(data: Prisma.NewsCreateInput): Promise<News> {
    return this.prisma.news.create({
      data,
    });
  }

  async getNewsById(id: number): Promise<News> {
    const news = await this.prisma.news.findUnique({
      where: { id },
    });
    if (!news) {
      throw new NotFoundException(`News with ID ${id} not found`);
    }
    return news;
  }

  async updateNews(id: number, data: Prisma.NewsUpdateInput): Promise<News> {
    const news = await this.prisma.news.findUnique({
      where: { id },
    });
    if (!news) {
      throw new NotFoundException(`News with ID ${id} not found`);
    }
    return this.prisma.news.update({
      where: { id },
      data,
    });
  }

  async deleteNews(id: number): Promise<News> {
    const news = await this.prisma.news.findUnique({
      where: { id },
    });
    if (!news) {
      throw new NotFoundException(`News with ID ${id} not found`);
    }
    return this.prisma.news.delete({
      where: { id },
    });
  }

  async getAllNews(): Promise<News[]> {
    return this.prisma.news.findMany();
  }

  async getNewsByUserId(userId: number): Promise<News[]> {
    return this.prisma.news.findMany({
      where: { userId },
    });
  }

  async countNewsByUserId(userId: number): Promise<number> {
    return this.prisma.news.count({
      where: { userId },
    });
  }

  async incrementViews(id: number): Promise<News> {
    const news = await this.prisma.news.findUnique({
      where: { id },
    });
    if (!news) {
      throw new NotFoundException(`News with ID ${id} not found`);
    }
    return this.prisma.news.update({
      where: { id },
      data: { views: news.views + 1 },
    });
  }
}
