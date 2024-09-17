import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChapterUpdateInput } from './chapter-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ChapterWhereUniqueInput } from './chapter-where-unique.input';

@ArgsType()
export class UpdateOneChapterArgs {

    @Field(() => ChapterUpdateInput, {nullable:false})
    @Type(() => ChapterUpdateInput)
    data!: ChapterUpdateInput;

    @Field(() => ChapterWhereUniqueInput, {nullable:false})
    @Type(() => ChapterWhereUniqueInput)
    where!: Prisma.AtLeast<ChapterWhereUniqueInput, 'id'>;
}
