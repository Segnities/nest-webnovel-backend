import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ChapterWhereUniqueInput } from './chapter-where-unique.input';
import { Type } from 'class-transformer';
import { ChapterUpdateWithoutNovelInput } from './chapter-update-without-novel.input';

@InputType()
export class ChapterUpdateWithWhereUniqueWithoutNovelInput {

    @Field(() => ChapterWhereUniqueInput, {nullable:false})
    @Type(() => ChapterWhereUniqueInput)
    where!: Prisma.AtLeast<ChapterWhereUniqueInput, 'id'>;

    @Field(() => ChapterUpdateWithoutNovelInput, {nullable:false})
    @Type(() => ChapterUpdateWithoutNovelInput)
    data!: ChapterUpdateWithoutNovelInput;
}
