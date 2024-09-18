import { TagService } from './tag.service';
import { Tag, Prisma } from '@prisma/client';
export declare class TagController {
    private readonly tagService;
    constructor(tagService: TagService);
    findOneById(id: number): Promise<Tag>;
    findAll(args: Prisma.TagFindManyArgs): Promise<Tag[]>;
    createOne(data: Prisma.TagCreateInput): Promise<Tag>;
    createMany(data: Prisma.TagCreateManyInput): Promise<Prisma.BatchPayload>;
    updateOne(id: number, data: Prisma.TagUpdateInput): Promise<Tag>;
    deleteOne(id: number): Promise<Tag>;
}
