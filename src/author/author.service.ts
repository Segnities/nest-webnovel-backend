import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Author, Novel, Prisma } from '@prisma/client';

@Injectable()
export class AuthorService {
  constructor(private prisma: PrismaService) {}

  async createAuthor(data: Prisma.AuthorCreateInput): Promise<Author> {
    return this.prisma.author.create({ data });
  }

  async getAuthorById(id: number): Promise<Author | null> {
    return this.prisma.author.findUnique({ where: { id } });
  }

  async getAuthorByName(name: string): Promise<Author | null> {
    return this.prisma.author.findUnique({ where: { name } });
  }

  async updateAuthor(
    id: number,
    data: Prisma.AuthorUpdateInput,
  ): Promise<Author> {
    return this.prisma.author.update({ where: { id }, data });
  }

  async deleteAuthor(id: number): Promise<Author> {
    return this.prisma.author.delete({ where: { id } });
  }

  async getAllAuthors(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.AuthorWhereUniqueInput;
    where?: Prisma.AuthorWhereInput;
    orderBy?: Prisma.AuthorOrderByWithRelationInput;
  }): Promise<Author[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.author.findMany({ skip, take, cursor, where, orderBy });
  }

  async getAuthorNovels(authorId: number): Promise<Novel[]> {
    const author = await this.prisma.author.findUnique({
      where: { id: authorId },
      include: { novels: true },
    });
    if (!author)
      throw new NotFoundException(`Author with ID ${authorId} not found`);
    return author.novels;
  }

  async getAuthorSubscribers(authorId: number): Promise<number> {
    return this.prisma.authorSubscription.count({
      where: { authorId },
    });
  }

  async searchAuthors(searchString: string): Promise<Author[]> {
    return this.prisma.author.findMany({
      where: {
        name: { contains: searchString, mode: 'insensitive' },
      },
    });
  }

  async getTopAuthors(limit: number = 10): Promise<Author[]> {
    return this.prisma.author.findMany({
      take: limit,
      orderBy: {
        novels: {
          _count: 'desc',
        },
      },
      include: {
        _count: {
          select: { novels: true },
        },
      },
    });
  }

  async addNovelToAuthor(
    authorId: number,
    novelData: Prisma.NovelCreateInput,
  ): Promise<Novel> {
    return this.prisma.novel.create({
      data: {
        ...novelData,
        author: {
          connect: { id: authorId },
        },
      },
    });
  }
}
