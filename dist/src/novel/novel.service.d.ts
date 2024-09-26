import { PrismaService } from '@/prisma/prisma.service';
import { Prisma, Novel, NovelStatus, NovelFormat, NovelTranslationStatus } from '@prisma/client';
export declare class NovelService {
    private prisma;
    constructor(prisma: PrismaService);
    findOneById(id: number): Promise<Novel>;
    createOne(data: Prisma.NovelCreateInput): Promise<Novel>;
    findAll(args: Prisma.NovelFindManyArgs): Promise<Novel[]>;
    likeNovel(novelId: number): Promise<Novel>;
    dislikeNovel(novelId: number): Promise<Novel>;
    createMany(data: Prisma.NovelCreateManyInput): Promise<Novel[]>;
    updateOne(id: number, data: Prisma.NovelUpdateInput): Promise<Novel>;
    deleteOne(id: number): Promise<Novel>;
    findByAuthor(authorId: number): Promise<Novel[]>;
    findByStatus(status: NovelStatus): Promise<Novel[]>;
    findByFormat(format: NovelFormat): Promise<Novel[]>;
    findByTranslationStatus(translationStatus: NovelTranslationStatus): Promise<Novel[]>;
    findByTag(tagId: number): Promise<Novel[]>;
    findByTags(tagIds: number[]): Promise<Novel[]>;
    findByGenre(genreId: number): Promise<Novel[]>;
    findByGenres(genreIds: number[]): Promise<Novel[]>;
    findByCountry(countryId: number): Promise<Novel[]>;
    findByCountries(countryIds: number[]): Promise<Novel[]>;
    getTopRatedNovels(limit?: number): Promise<Novel[]>;
    getMostViewedNovels(limit?: number): Promise<Novel[]>;
    getRecentlyUpdatedNovels(limit?: number): Promise<Novel[]>;
    searchNovels(searchTerm: string): Promise<Novel[]>;
    getNovelWithChapters(novelId: number): Promise<Novel & {
        chapters: any[];
    }>;
    updateNovelViews(novelId: number): Promise<Novel>;
    getNovelStats(novelId: number): Promise<any>;
    getRelatedNovels(novelId: number, limit?: number): Promise<Novel[]>;
    getNovelsByReleaseYear(year: number): Promise<Novel[]>;
    getAdultNovels(): Promise<Novel[]>;
    getNonAdultNovels(): Promise<Novel[]>;
    getNovelsByAuthorName(authorName: string): Promise<Novel[]>;
    getNovelsByAlternativeTitle(title: string): Promise<Novel[]>;
}
