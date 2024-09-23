import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { BookmarkService } from './bookmark.service';
import { Bookmark, Prisma } from '@prisma/client';

@Controller('bookmark')
export class BookmarkController {
  constructor(private readonly bookmarkService: BookmarkService) {}

  @Post()
  async createBookmark(
    @Body() data: Prisma.BookmarkCreateInput,
  ): Promise<Bookmark> {
    return this.bookmarkService.createBookmark(data);
  }

  @Get(':id')
  async getBookmarkById(@Param('id') id: number): Promise<Bookmark> {
    return this.bookmarkService.getBookmarkById(id);
  }

  @Put(':id')
  async updateBookmark(
    @Param('id') id: number,
    @Body() data: Prisma.BookmarkUpdateInput,
  ): Promise<Bookmark> {
    return this.bookmarkService.updateBookmark(id, data);
  }

  @Delete(':id')
  async deleteBookmark(@Param('id') id: number): Promise<Bookmark> {
    return this.bookmarkService.deleteBookmark(id);
  }

  @Get('user/:userId')
  async getBookmarksByUserId(
    @Param('userId') userId: number,
  ): Promise<Bookmark[]> {
    return this.bookmarkService.getBookmarksByUserId(userId);
  }

  @Get('chapter/:chapterId')
  async getBookmarksByChapterId(
    @Param('chapterId') chapterId: number,
  ): Promise<Bookmark[]> {
    return this.bookmarkService.getBookmarksByChapterId(chapterId);
  }
}
