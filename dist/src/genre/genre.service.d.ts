import { PrismaService } from '@/prisma/prisma.service';
import { Prisma, Genre } from '@prisma/client';
export declare class GenreService {
    private prisma;
    constructor(prisma: PrismaService);
    findOneById(id: number): Promise<Genre>;
    createOne(data: Prisma.GenreCreateInput): Promise<Genre>;
    findAll(args?: Prisma.GenreFindManyArgs): Promise<Genre[]>;
    createMany(data: Prisma.GenreCreateManyInput[]): Promise<Prisma.BatchPayload>;
    updateOne(id: number, data: Prisma.GenreUpdateInput): Promise<Genre>;
    deleteOne(id: number): Promise<Genre>;
    findByTitle(title: string): Promise<Genre | null>;
}
