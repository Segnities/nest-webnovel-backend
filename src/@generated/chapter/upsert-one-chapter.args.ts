import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ChapterWhereUniqueInput } from './chapter-where-unique.input';
import { Type } from 'class-transformer';
import { ChapterCreateInput } from './chapter-create.input';
import { ChapterUpdateInput } from './chapter-update.input';

@ArgsType()
export class UpsertOneChapterArgs {

    @Field(() => ChapterWhereUniqueInput, {nullable:false})
    @Type(() => ChapterWhereUniqueInput)
    where!: Prisma.AtLeast<ChapterWhereUniqueInput, 'id'>;

    @Field(() => ChapterCreateInput, {nullable:false})
    @Type(() => ChapterCreateInput)
    create!: ChapterCreateInput;

    @Field(() => ChapterUpdateInput, {nullable:false})
    @Type(() => ChapterUpdateInput)
    update!: ChapterUpdateInput;
}
