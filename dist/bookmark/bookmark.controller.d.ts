import { BookmarkService } from './bookmark.service';
import { Bookmark, Prisma } from '@prisma/client';
export declare class BookmarkController {
    private readonly bookmarkService;
    constructor(bookmarkService: BookmarkService);
    createBookmark(data: Prisma.BookmarkCreateInput): Promise<Bookmark>;
    getBookmarkById(id: number): Promise<Bookmark>;
    updateBookmark(id: number, data: Prisma.BookmarkUpdateInput): Promise<Bookmark>;
    deleteBookmark(id: number): Promise<Bookmark>;
    getBookmarksByUserId(userId: number): Promise<Bookmark[]>;
    getBookmarksByChapterId(chapterId: number): Promise<Bookmark[]>;
}
