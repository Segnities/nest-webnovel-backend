import { AuthorService } from './author.service';
import { Author, Novel, Prisma } from '@prisma/client';
export declare class AuthorController {
    private readonly authorService;
    constructor(authorService: AuthorService);
    createAuthor(data: Prisma.AuthorCreateInput): Promise<Author>;
    getAuthorById(id: string): Promise<Author | null>;
    getAuthorByName(name: string): Promise<Author | null>;
    updateAuthor(id: string, data: Prisma.AuthorUpdateInput): Promise<Author>;
    deleteAuthor(id: string): Promise<Author>;
    getAllAuthors(skip?: string, take?: string, orderBy?: string): Promise<Author[]>;
    getAuthorNovels(id: string): Promise<Novel[]>;
    getAuthorSubscribers(id: string): Promise<number>;
    searchAuthors(searchString: string): Promise<Author[]>;
    getTopAuthors(limit?: string): Promise<Author[]>;
    addNovelToAuthor(id: string, novelData: Prisma.NovelCreateInput): Promise<Novel>;
}
