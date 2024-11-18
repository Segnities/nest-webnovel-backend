import { NovelService } from './novel.service';
import { Novel, NovelFormat, NovelStatus, NovelTranslationStatus, Prisma } from '@prisma/client';
export declare class NovelController {
    private readonly novelService;
    constructor(novelService: NovelService);
    findAll(args: Prisma.NovelFindManyArgs): Promise<Novel[]>;
    findLastUpdatedChapters(): Promise<{
        country: {
            title: string;
        };
        id: number;
        img: string;
        title: string;
        slug: string;
        releaseYear: number;
        chapters: {
            id: number;
            title: string;
            slug: string;
            chapterNumber: number;
        }[];
    }[]>;
    getDiscoverNovels(): Promise<{
        country: {
            title: string;
        };
        id: number;
        img: string;
        title: string;
        slug: string;
    }[]>;
    getTimeRatingNovels(): Promise<{
        weeklyTop: {
            country: {
                title: string;
            };
            id: number;
            createdAt: Date;
            img: string;
            title: string;
            slug: string;
        }[];
        monthlyTop: any[];
        allTimeTop: {
            country: {
                title: string;
            };
            id: number;
            createdAt: Date;
            img: string;
            title: string;
            slug: string;
        }[];
    }>;
    downloadNovel(slug: string): Promise<{
        download_data: {
            country: {
                title: string;
            };
            author: {
                name: string;
            };
            id: number;
            createdAt: Date;
            img: string;
            title: string;
            description: string;
            slug: string;
            isAdult: boolean;
            releaseYear: number;
            coverImg: string;
            updatedAt: Date;
            status: import(".prisma/client").$Enums.NovelStatus;
            translationStatus: import(".prisma/client").$Enums.NovelTranslationStatus;
            format: import(".prisma/client").$Enums.NovelFormat;
            genres: {
                id: number;
                title: string;
            }[];
            chapters: {
                id: number;
                createdAt: Date;
                title: string;
                slug: string;
                updatedAt: Date;
                content: string;
                chapterNumber: number;
            }[];
        };
        chapters_stats: {
            chapters: {
                id: number;
                createdAt: Date;
                title: string;
                slug: string;
                updatedAt: Date;
                chapterNumber: number;
            }[];
        };
    }>;
    findChaptersStatsByChapterSlug(slug: string): Promise<{
        img: string;
        title: string;
        slug: string;
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
        country: {
            title: string;
        };
        id: number;
        createdAt: Date;
        img: string;
        title: string;
        slug: string;
    }[]>;
    searchByTitle(searchTerm: string, page?: number, limit?: number): Promise<{
        data: {
            author: {
                name: string;
            };
            id: number;
            img: string;
            title: string;
            slug: string;
            alternativeTitles: {
                title: string;
            }[];
        }[];
        pagination: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
    searchByYear(year: string, page?: number, limit?: number): Promise<import("../../global_types/search").SearchResponse>;
    searchByAuthor(authorName: string, page?: number, limit?: number): Promise<import("../../global_types/search").SearchResponse>;
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
        createdAt: Date;
        authorId: number;
        img: string;
        title: string;
        original_title: string | null;
        description: string;
        slug: string | null;
        likes: number;
        dislikes: number;
        isAdult: boolean;
        releaseYear: number | null;
        coverImg: string | null;
        updatedAt: Date;
        views: number;
        status: import(".prisma/client").$Enums.NovelStatus;
        translationStatus: import(".prisma/client").$Enums.NovelTranslationStatus;
        format: import(".prisma/client").$Enums.NovelFormat;
        countryId: number;
        commendableTypeId: number;
    }>;
    findOneById(id: number): Promise<Novel>;
}
