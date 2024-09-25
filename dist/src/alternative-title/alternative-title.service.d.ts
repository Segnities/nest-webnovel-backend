import { PrismaService } from '@/prisma/prisma.service';
import { Prisma, AlternativeTitle } from '@prisma/client';
export declare class AlternativeTitleService {
    private prisma;
    constructor(prisma: PrismaService);
    findOneById(id: number): Promise<AlternativeTitle>;
    createOne(data: Prisma.AlternativeTitleCreateInput): Promise<AlternativeTitle>;
    findAll(args?: Prisma.AlternativeTitleFindManyArgs): Promise<AlternativeTitle[]>;
    createMany(data: Prisma.AlternativeTitleCreateManyInput[]): Promise<Prisma.BatchPayload>;
    updateOne(id: number, data: Prisma.AlternativeTitleUpdateInput): Promise<AlternativeTitle>;
    deleteOne(id: number): Promise<AlternativeTitle>;
    findByNovelId(novelId: number): Promise<AlternativeTitle[]>;
    findByTitle(title: string): Promise<AlternativeTitle[]>;
}
