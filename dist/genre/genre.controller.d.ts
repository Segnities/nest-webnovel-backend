import { GenreService } from './genre.service';
import { Genre, Prisma } from '@prisma/client';
export declare class GenreController {
    private readonly genreService;
    constructor(genreService: GenreService);
    findOneById(id: number): Promise<Genre>;
    findAll(args?: Prisma.GenreFindManyArgs): Promise<Genre[]>;
    createOne(data: Prisma.GenreCreateInput): Promise<Genre>;
    createMany(data: Prisma.GenreCreateManyInput[]): Promise<Prisma.BatchPayload>;
    updateOne(id: number, data: Prisma.GenreUpdateInput): Promise<Genre>;
    deleteOne(id: number): Promise<void>;
    findByTitle(title: string): Promise<Genre | null>;
}
