import { PrismaService } from '@/prisma/prisma.service';
import { Prisma, Country, Novel } from '@prisma/client';
export declare class CountryService {
    private prisma;
    constructor(prisma: PrismaService);
    findOneById(id: number): Promise<Country>;
    createOne(data: Prisma.CountryCreateInput): Promise<Country>;
    findAll(args?: Prisma.CountryFindManyArgs): Promise<Country[]>;
    createMany(data: Prisma.CountryCreateManyInput[]): Promise<Prisma.BatchPayload>;
    updateOne(id: number, data: Prisma.CountryUpdateInput): Promise<Country>;
    deleteOne(id: number): Promise<Country>;
    findByTitle(title: string): Promise<Country | null>;
    getCountriesWithNovelCount(): Promise<{
        id: number;
        title: string;
        novelCount: number;
    }[]>;
    getTopCountriesByNovelCount(limit?: number): Promise<{
        id: number;
        title: string;
        novelCount: number;
    }[]>;
    getNovelsByCountry(countryId: number, args?: Prisma.NovelFindManyArgs): Promise<Novel[]>;
    searchCountries(searchTerm: string): Promise<Country[]>;
    getCountryStats(): Promise<{
        totalCountries: number;
        totalNovels: number;
        averageNovelsPerCountry: number;
    }>;
    updateNovelCount(): Promise<void>;
}
