import { Controller } from '@nestjs/common';
import { BookmarkService } from './bookmark.service';
import { Bookmark, Prisma } from '@prisma/client';

@Controller('bookmark')
export class BookmarkController {
  constructor(private readonly bookmarkService: BookmarkService) {}

  async createBookmark(data: Prisma.BookmarkCreateInput): Promise<Bookmark> {
    return this.bookmarkService.createBookmark(data);
  }

  async getBookmarkById(id: number): Promise<Bookmark> {
    return this.bookmarkService.getBookmarkById(id);
  }

  async updateBookmark(
    id: number,
    data: Prisma.BookmarkUpdateInput,
  ): Promise<Bookmark> {
    return this.bookmarkService.updateBookmark(id, data);
  }

  async deleteBookmark(id: number): Promise<Bookmark> {
    return this.bookmarkService.deleteBookmark(id);
  }

  async getBookmarksByUserId(userId: number): Promise<Bookmark[]> {
    return this.bookmarkService.getBookmarksByUserId(userId);
  }

  async getBookmarksByChapterId(chapterId: number): Promise<Bookmark[]> {
    return this.bookmarkService.getBookmarksByChapterId(chapterId);
  }
}
