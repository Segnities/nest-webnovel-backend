import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ChapterWhereUniqueInput } from './chapter-where-unique.input';
import { Type } from 'class-transformer';
import { ChapterCreateWithoutNovelInput } from './chapter-create-without-novel.input';

@InputType()
export class ChapterCreateOrConnectWithoutNovelInput {

    @Field(() => ChapterWhereUniqueInput, {nullable:false})
    @Type(() => ChapterWhereUniqueInput)
    where!: Prisma.AtLeast<ChapterWhereUniqueInput, 'id'>;

    @Field(() => ChapterCreateWithoutNovelInput, {nullable:false})
    @Type(() => ChapterCreateWithoutNovelInput)
    create!: ChapterCreateWithoutNovelInput;
}
