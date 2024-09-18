import { PrismaService } from '@/prisma/prisma.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma, AlternativeTitle } from '@prisma/client';

@Injectable()
export class AlternativeTitleService {
  constructor(private prisma: PrismaService) {}

  async findOneById(id: number): Promise<AlternativeTitle> {
    const alternativeTitle = await this.prisma.alternativeTitle.findUnique({
      where: { id },
    });
    if (!alternativeTitle) {
      throw new NotFoundException(`Альтернативну назву з ID ${id} не знайдено`);
    }
    return alternativeTitle;
  }

  async createOne(
    data: Prisma.AlternativeTitleCreateInput,
  ): Promise<AlternativeTitle> {
    return this.prisma.alternativeTitle.create({ data });
  }

  async findAll(
    args?: Prisma.AlternativeTitleFindManyArgs,
  ): Promise<AlternativeTitle[]> {
    return this.prisma.alternativeTitle.findMany(args);
  }

  async createMany(
    data: Prisma.AlternativeTitleCreateManyInput[],
  ): Promise<Prisma.BatchPayload> {
    return this.prisma.alternativeTitle.createMany({
      data,
      skipDuplicates: true,
    });
  }

  async updateOne(
    id: number,
    data: Prisma.AlternativeTitleUpdateInput,
  ): Promise<AlternativeTitle> {
    try {
      return await this.prisma.alternativeTitle.update({
        where: { id },
        data,
      });
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException(
          `Альтернативну назву з ID ${id} не знайдено`,
        );
      }
      throw error;
    }
  }

  async deleteOne(id: number): Promise<AlternativeTitle> {
    try {
      return await this.prisma.alternativeTitle.delete({ where: { id } });
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException(
          `Альтернативну назву з ID ${id} не знайдено`,
        );
      }
      throw error;
    }
  }

  async findByNovelId(novelId: number): Promise<AlternativeTitle[]> {
    return this.prisma.alternativeTitle.findMany({ where: { novelId } });
  }

  async findByTitle(title: string): Promise<AlternativeTitle[]> {
    return this.prisma.alternativeTitle.findMany({ where: { title } });
  }
}
