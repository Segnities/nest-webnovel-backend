import { PrismaService } from '@/prisma/prisma.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma, Country, Novel } from '@prisma/client';

@Injectable()
export class CountryService {
  constructor(private prisma: PrismaService) {}

  async findOneById(id: number): Promise<Country> {
    const country = await this.prisma.country.findUnique({
      where: { id },
      include: { novels: true },
    });
    if (!country) {
      throw new NotFoundException(`Країну з ID ${id} не знайдено`);
    }
    return country;
  }

  async createOne(data: Prisma.CountryCreateInput): Promise<Country> {
    return this.prisma.country.create({ data });
  }

  async findAll(args?: Prisma.CountryFindManyArgs): Promise<Country[]> {
    return this.prisma.country.findMany(args);
  }

  async createMany(
    data: Prisma.CountryCreateManyInput[],
  ): Promise<Prisma.BatchPayload> {
    return this.prisma.country.createMany({
      data,
      skipDuplicates: true,
    });
  }

  async updateOne(
    id: number,
    data: Prisma.CountryUpdateInput,
  ): Promise<Country> {
    try {
      return await this.prisma.country.update({
        where: { id },
        data,
        include: { novels: true },
      });
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException(`Країну з ID ${id} не знайдено`);
      }
      throw error;
    }
  }

  async deleteOne(id: number): Promise<Country> {
    try {
      return await this.prisma.country.delete({
        where: { id },
        include: { novels: true },
      });
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException(`Країну з ID ${id} не знайдено`);
      }
      throw error;
    }
  }

  async findByTitle(title: string): Promise<Country | null> {
    return this.prisma.country.findUnique({
      where: { title },
      include: { novels: true },
    });
  }

  async getCountriesWithNovelCount(): Promise<
    { id: number; title: string; novelCount: number }[]
  > {
    return this.prisma.country
      .findMany({
        select: {
          id: true,
          title: true,
          _count: {
            select: { novels: true },
          },
        },
      })
      .then((countries) =>
        countries.map((country) => ({
          id: country.id,
          title: country.title,
          novelCount: country._count.novels,
        })),
      );
  }
  async getTopCountriesByNovelCount(
    limit: number = 10,
  ): Promise<{ id: number; title: string; novelCount: number }[]> {
    return this.prisma.country
      .findMany({
        select: {
          id: true,
          title: true,
          _count: {
            select: { novels: true },
          },
        },
        orderBy: {
          novels: {
            _count: 'desc',
          },
        },
        take: limit,
      })
      .then((countries) =>
        countries.map((country) => ({
          id: country.id,
          title: country.title,
          novelCount: country._count.novels,
        })),
      );
  }
  async getNovelsByCountry(
    countryId: number,
    args?: Prisma.NovelFindManyArgs,
  ): Promise<Novel[]> {
    const country = await this.prisma.country.findUnique({
      where: { id: countryId },
      include: {
        novels: args || true,
      },
    });

    if (!country) {
      throw new NotFoundException(`Країну з ID ${countryId} не знайдено`);
    }

    return country.novels;
  }

  async searchCountries(searchTerm: string): Promise<Country[]> {
    return this.prisma.country.findMany({
      where: {
        title: {
          contains: searchTerm,
          mode: 'insensitive',
        },
      },
      include: { novels: true },
    });
  }
  async getCountryStats(): Promise<{
    totalCountries: number;
    totalNovels: number;
    averageNovelsPerCountry: number;
  }> {
    const result = await this.prisma.country.aggregate({
      _count: {
        id: true,
      },
    });
    const totalCountries = result._count.id;
    const totalNovels = await this.prisma.novel.count();
    const averageNovelsPerCountry =
      totalCountries > 0 ? totalNovels / totalCountries : 0;

    return {
      totalCountries,
      totalNovels,
      averageNovelsPerCountry,
    };
  }
  async updateNovelCount(): Promise<void> {
    await this.prisma.$executeRaw`
     UPDATE "country"
     SET novel_count = (
       SELECT COUNT(*)
       FROM "novel"
       WHERE "novel"."countryId" = "country"."id"
     )
   `;
  }
}
