import { NewsService } from './news.service';
import { News, Prisma } from '@prisma/client';
export declare class NewsController {
    private readonly newsService;
    constructor(newsService: NewsService);
    createNews(data: Prisma.NewsCreateInput): Promise<News>;
    getNewsById(id: number): Promise<News>;
    updateNews(id: number, data: Prisma.NewsUpdateInput): Promise<News>;
    deleteNews(id: number): Promise<News>;
    getAllNews(): Promise<News[]>;
    getNewsByUserId(userId: number): Promise<News[]>;
    countNewsByUserId(userId: number): Promise<number>;
    incrementViews(id: number): Promise<News>;
}
