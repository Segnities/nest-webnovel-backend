import { PrismaService } from '@/prisma/prisma.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma, Genre } from '@prisma/client';

@Injectable()
export class GenreService {
  constructor(private prisma: PrismaService) {}

  async findOneById(id: number): Promise<Genre> {
    const genre = await this.prisma.genre.findUnique({ where: { id } });
    if (!genre) {
      throw new NotFoundException(`Жанр з ID ${id} не знайдено`);
    }
    return genre;
  }

  async createOne(data: Prisma.GenreCreateInput): Promise<Genre> {
    return this.prisma.genre.create({ data });
  }

  async findAll(args?: Prisma.GenreFindManyArgs): Promise<Genre[]> {
    return this.prisma.genre.findMany(args);
  }

  async createMany(
    data: Prisma.GenreCreateManyInput[],
  ): Promise<Prisma.BatchPayload> {
    return this.prisma.genre.createMany({
      data,
      skipDuplicates: true,
    });
  }

  async updateOne(id: number, data: Prisma.GenreUpdateInput): Promise<Genre> {
    const genre = await this.prisma.genre.update({
      where: { id },
      data,
    });
    if (!genre) {
      throw new NotFoundException(`Жанр з ID ${id} не знайдено`);
    }
    return genre;
  }

  async deleteOne(id: number): Promise<Genre> {
    try {
      return await this.prisma.genre.delete({ where: { id } });
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException(`Жанр з ID ${id} не знайдено`);
      }
      throw error;
    }
  }

  async findByTitle(title: string): Promise<Genre | null> {
    return this.prisma.genre.findUnique({ where: { title } });
  }
}
