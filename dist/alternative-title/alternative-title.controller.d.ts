import { AlternativeTitleService } from './alternative-title.service';
import { AlternativeTitle, Prisma } from '@prisma/client';
export declare class AlternativeTitleController {
    private readonly alternativeTitleService;
    constructor(alternativeTitleService: AlternativeTitleService);
    findOneById(id: number): Promise<AlternativeTitle>;
    findAll(args?: Prisma.AlternativeTitleFindManyArgs): Promise<AlternativeTitle[]>;
    createOne(data: Prisma.AlternativeTitleCreateInput): Promise<AlternativeTitle>;
    createMany(data: Prisma.AlternativeTitleCreateManyInput[]): Promise<Prisma.BatchPayload>;
    updateOne(id: number, data: Prisma.AlternativeTitleUpdateInput): Promise<AlternativeTitle>;
    deleteOne(id: number): Promise<void>;
    findByNovelId(novelId: number): Promise<AlternativeTitle[]>;
    findByTitle(title: string): Promise<AlternativeTitle[]>;
}
