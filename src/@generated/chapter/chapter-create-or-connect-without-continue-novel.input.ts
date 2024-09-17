import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ChapterWhereUniqueInput } from './chapter-where-unique.input';
import { Type } from 'class-transformer';
import { ChapterCreateWithoutContinueNovelInput } from './chapter-create-without-continue-novel.input';

@InputType()
export class ChapterCreateOrConnectWithoutContinueNovelInput {

    @Field(() => ChapterWhereUniqueInput, {nullable:false})
    @Type(() => ChapterWhereUniqueInput)
    where!: Prisma.AtLeast<ChapterWhereUniqueInput, 'id'>;

    @Field(() => ChapterCreateWithoutContinueNovelInput, {nullable:false})
    @Type(() => ChapterCreateWithoutContinueNovelInput)
    create!: ChapterCreateWithoutContinueNovelInput;
}
