import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Bookmark, Prisma } from '@prisma/client';

@Injectable()
export class BookmarkService {
  constructor(private prisma: PrismaService) {}
  async createBookmark(data: Prisma.BookmarkCreateInput): Promise<Bookmark> {
    return this.prisma.bookmark.create({
      data,
    });
  }
  async getBookmarkById(id: number): Promise<Bookmark> {
    const bookmark = await this.prisma.bookmark.findUnique({
      where: { id },
    });
    if (!bookmark) {
      throw new NotFoundException(`Bookmark with ID ${id} not found`);
    }
    return bookmark;
  }
  async updateBookmark(
    id: number,
    data: Prisma.BookmarkUpdateInput,
  ): Promise<Bookmark> {
    const bookmark = await this.prisma.bookmark.findUnique({
      where: { id },
    });
    if (!bookmark) {
      throw new NotFoundException(`Bookmark with ID ${id} not found`);
    }
    return this.prisma.bookmark.update({
      where: { id },
      data,
    });
  }
  async deleteBookmark(id: number): Promise<Bookmark> {
    const bookmark = await this.prisma.bookmark.findUnique({
      where: { id },
    });
    if (!bookmark) {
      throw new NotFoundException(`Bookmark with ID ${id} not found`);
    }
    return this.prisma.bookmark.delete({
      where: { id },
    });
  }
  async getBookmarksByUserId(userId: number): Promise<Bookmark[]> {
    return this.prisma.bookmark.findMany({
      where: { userId },
    });
  }
  async getBookmarksByChapterId(chapterId: number): Promise<Bookmark[]> {
    return this.prisma.bookmark.findMany({
      where: { chapterId },
    });
  }
}
