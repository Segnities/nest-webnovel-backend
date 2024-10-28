import { NovelService } from './novel.service';
import { Novel, NovelFormat, NovelStatus, NovelTranslationStatus, Prisma } from '@prisma/client';
export declare class NovelController {
    private readonly novelService;
    constructor(novelService: NovelService);
    findAll(args: Prisma.NovelFindManyArgs): Promise<Novel[]>;
    findLastUpdatedChapters(): Promise<{
        id: number;
        title: string;
        slug: string;
        img: string;
        releaseYear: number;
        country: {
            title: string;
        };
        chapters: {
            id: number;
            title: string;
            slug: string;
            chapterNumber: number;
        }[];
    }[]>;
    getDiscoverNovels(): Promise<{
        id: number;
        title: string;
        slug: string;
        img: string;
        country: {
            title: string;
        };
    }[]>;
    getTimeRatingNovels(): Promise<{
        weeklyTop: any[];
        monthlyTop: any[];
        allTimeTop: {
            id: number;
            title: string;
            slug: string;
            img: string;
            createdAt: Date;
            country: {
                title: string;
            };
        }[];
    }>;
    downloadNovel(slug: string): Promise<{
        download_data: {
            id: number;
            title: string;
            description: string;
            slug: string;
            img: string;
            isAdult: boolean;
            releaseYear: number;
            coverImg: string;
            createdAt: Date;
            updatedAt: Date;
            status: import(".prisma/client").$Enums.NovelStatus;
            translationStatus: import(".prisma/client").$Enums.NovelTranslationStatus;
            format: import(".prisma/client").$Enums.NovelFormat;
            country: {
                title: string;
            };
            author: {
                name: string;
            };
            genres: {
                id: number;
                title: string;
            }[];
            chapters: {
                id: number;
                title: string;
                slug: string;
                createdAt: Date;
                updatedAt: Date;
                content: string;
                chapterNumber: number;
            }[];
        };
        chapters_stats: {
            chapters: {
                id: number;
                title: string;
                slug: string;
                createdAt: Date;
                updatedAt: Date;
                chapterNumber: number;
            }[];
        };
    }>;
    findChaptersStatsByChapterSlug(slug: string): Promise<{
        title: string;
        slug: string;
        img: string;
        isAdult: boolean;
        chapters: {
            title: string;
            slug: string;
            chapterNumber: number;
        }[];
    }>;
    createOne(data: Prisma.NovelCreateInput): Promise<Novel>;
    createMany(data: Prisma.NovelCreateManyInput[]): Promise<Novel[]>;
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
    findRecentlyCreatedNovels(limit?: number): Promise<{
        id: number;
        title: string;
        slug: string;
        img: string;
        createdAt: Date;
        country: {
            title: string;
        };
    }[]>;
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
    findOneBySlug(slug: string): Promise<{
        id: number;
        title: string;
        original_title: string | null;
        description: string;
        slug: string | null;
        img: string;
        likes: number;
        dislikes: number;
        isAdult: boolean;
        releaseYear: number | null;
        coverImg: string | null;
        createdAt: Date;
        updatedAt: Date;
        views: number;
        countryId: number;
        status: import(".prisma/client").$Enums.NovelStatus;
        authorId: number;
        translationStatus: import(".prisma/client").$Enums.NovelTranslationStatus;
        format: import(".prisma/client").$Enums.NovelFormat;
        commendableTypeId: number;
    }>;
    findOneById(id: number): Promise<Novel>;
}
