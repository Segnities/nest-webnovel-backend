import { NovelService } from './novel.service';
import { Novel, NovelFormat, NovelStatus, NovelTranslationStatus, Prisma } from '@prisma/client';
export declare class NovelController {
    private readonly novelService;
    constructor(novelService: NovelService);
    findOneById(id: number): Promise<Novel>;
    findAll(args: Prisma.NovelFindManyArgs): Promise<Novel[]>;
    createOne(data: Prisma.NovelCreateInput): Promise<Novel>;
    createMany(data: Prisma.NovelCreateManyInput): Promise<Novel[]>;
    updateOne(id: number, data: Prisma.NovelUpdateInput): Promise<Novel>;
    deleteOne(id: number): Promise<Novel>;
    findByAuthor(authorId: number): Promise<Novel[]>;
    findByStatus(status: NovelStatus): Promise<Novel[]>;
    findByFormat(format: NovelFormat): Promise<Novel[]>;
    findByTranslationStatus(status: NovelTranslationStatus): Promise<Novel[]>;
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
    getNovelWithChapters(id: number): Promise<Novel & {
        chapters: any[];
    }>;
    updateNovelViews(id: number): Promise<Novel>;
    getNovelStats(id: number): Promise<any>;
    getRelatedNovels(id: number, limit?: number): Promise<Novel[]>;
    getNovelsByReleaseYear(year: number): Promise<Novel[]>;
    getAdultNovels(): Promise<Novel[]>;
    getNonAdultNovels(): Promise<Novel[]>;
    getNovelsByAuthorName(name: string): Promise<Novel[]>;
    getNovelsByAlternativeTitle(title: string): Promise<Novel[]>;
}
