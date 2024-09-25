import { PrismaService } from '../prisma/prisma.service';
import { Author, Novel, Prisma } from '@prisma/client';
export declare class AuthorService {
    private prisma;
    constructor(prisma: PrismaService);
    createAuthor(data: Prisma.AuthorCreateInput): Promise<Author>;
    getAuthorById(id: number): Promise<Author | null>;
    getAuthorByName(name: string): Promise<Author | null>;
    updateAuthor(id: number, data: Prisma.AuthorUpdateInput): Promise<Author>;
    deleteAuthor(id: number): Promise<Author>;
    getAllAuthors(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.AuthorWhereUniqueInput;
        where?: Prisma.AuthorWhereInput;
        orderBy?: Prisma.AuthorOrderByWithRelationInput;
    }): Promise<Author[]>;
    getAuthorNovels(authorId: number): Promise<Novel[]>;
    getAuthorSubscribers(authorId: number): Promise<number>;
    searchAuthors(searchString: string): Promise<Author[]>;
    getTopAuthors(limit?: number): Promise<Author[]>;
    addNovelToAuthor(authorId: number, novelData: Prisma.NovelCreateInput): Promise<Novel>;
}
