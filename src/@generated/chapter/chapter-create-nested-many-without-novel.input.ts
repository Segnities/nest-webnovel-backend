import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChapterCreateWithoutNovelInput } from './chapter-create-without-novel.input';
import { Type } from 'class-transformer';
import { ChapterCreateOrConnectWithoutNovelInput } from './chapter-create-or-connect-without-novel.input';
import { ChapterCreateManyNovelInputEnvelope } from './chapter-create-many-novel-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ChapterWhereUniqueInput } from './chapter-where-unique.input';

@InputType()
export class ChapterCreateNestedManyWithoutNovelInput {

    @Field(() => [ChapterCreateWithoutNovelInput], {nullable:true})
    @Type(() => ChapterCreateWithoutNovelInput)
    create?: Array<ChapterCreateWithoutNovelInput>;

    @Field(() => [ChapterCreateOrConnectWithoutNovelInput], {nullable:true})
    @Type(() => ChapterCreateOrConnectWithoutNovelInput)
    connectOrCreate?: Array<ChapterCreateOrConnectWithoutNovelInput>;

    @Field(() => ChapterCreateManyNovelInputEnvelope, {nullable:true})
    @Type(() => ChapterCreateManyNovelInputEnvelope)
    createMany?: ChapterCreateManyNovelInputEnvelope;

    @Field(() => [ChapterWhereUniqueInput], {nullable:true})
    @Type(() => ChapterWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ChapterWhereUniqueInput, 'id'>>;
}
