import { PrismaService } from '@/prisma/prisma.service';
import { Prisma, Novel } from '@prisma/client';
export declare class NovelService {
    private prisma;
    constructor(prisma: PrismaService);
    findOneById(id: number): Promise<Novel>;
    createOne(data: Prisma.NovelCreateInput): Promise<Novel>;
    findAll(args: Prisma.NovelFindManyArgs): Promise<Novel[]>;
    createMany(data: Prisma.NovelCreateManyInput): Promise<Novel[]>;
    updateOne(id: number, data: Prisma.NovelUpdateInput): Promise<Novel>;
    deleteOne(id: number): Promise<Novel>;
}