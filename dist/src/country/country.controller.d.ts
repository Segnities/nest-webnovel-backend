import { CountryService } from './country.service';
import { Country, Novel, Prisma } from '@prisma/client';
export declare class CountryController {
    private readonly countryService;
    constructor(countryService: CountryService);
    findOneById(id: number): Promise<Country>;
    findAll(args?: Prisma.CountryFindManyArgs): Promise<Country[]>;
    createOne(data: Prisma.CountryCreateInput): Promise<Country>;
    createMany(data: Prisma.CountryCreateManyInput[]): Promise<Prisma.BatchPayload>;
    updateOne(id: number, data: Prisma.CountryUpdateInput): Promise<Country>;
    deleteOne(id: number): Promise<void>;
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
    getNovelsByCountry(id: number, args?: Prisma.NovelFindManyArgs): Promise<Novel[]>;
    searchCountries(term: string): Promise<Country[]>;
    getCountryStats(): Promise<{
        totalCountries: number;
        totalNovels: number;
        averageNovelsPerCountry: number;
    }>;
    updateNovelCount(): Promise<void>;
}
