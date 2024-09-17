import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChapterCreateWithoutContinueNovelInput } from './chapter-create-without-continue-novel.input';
import { Type } from 'class-transformer';
import { ChapterCreateOrConnectWithoutContinueNovelInput } from './chapter-create-or-connect-without-continue-novel.input';
import { Prisma } from '@prisma/client';
import { ChapterWhereUniqueInput } from './chapter-where-unique.input';

@InputType()
export class ChapterCreateNestedOneWithoutContinueNovelInput {

    @Field(() => ChapterCreateWithoutContinueNovelInput, {nullable:true})
    @Type(() => ChapterCreateWithoutContinueNovelInput)
    create?: ChapterCreateWithoutContinueNovelInput;

    @Field(() => ChapterCreateOrConnectWithoutContinueNovelInput, {nullable:true})
    @Type(() => ChapterCreateOrConnectWithoutContinueNovelInput)
    connectOrCreate?: ChapterCreateOrConnectWithoutContinueNovelInput;

    @Field(() => ChapterWhereUniqueInput, {nullable:true})
    @Type(() => ChapterWhereUniqueInput)
    connect?: Prisma.AtLeast<ChapterWhereUniqueInput, 'id'>;
}
