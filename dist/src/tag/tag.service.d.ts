import { PrismaService } from '@/prisma/prisma.service';
import { Prisma, Tag } from '@prisma/client';
export declare class TagService {
    private prisma;
    constructor(prisma: PrismaService);
    findOneById(id: number): Promise<Tag>;
    createOne(data: Prisma.TagCreateInput): Promise<Tag>;
    findAll(args: Prisma.TagFindManyArgs): Promise<Tag[]>;
    createMany(data: Prisma.TagCreateManyInput): Promise<Prisma.BatchPayload>;
    updateOne(id: number, data: Prisma.TagUpdateInput): Promise<Tag>;
    deleteOne(id: number): Promise<Tag>;
}
