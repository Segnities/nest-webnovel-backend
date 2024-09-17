import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChapterCreateWithoutNovelInput } from './chapter-create-without-novel.input';
import { Type } from 'class-transformer';
import { ChapterCreateOrConnectWithoutNovelInput } from './chapter-create-or-connect-without-novel.input';
import { ChapterUpsertWithWhereUniqueWithoutNovelInput } from './chapter-upsert-with-where-unique-without-novel.input';
import { ChapterCreateManyNovelInputEnvelope } from './chapter-create-many-novel-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ChapterWhereUniqueInput } from './chapter-where-unique.input';
import { ChapterUpdateWithWhereUniqueWithoutNovelInput } from './chapter-update-with-where-unique-without-novel.input';
import { ChapterUpdateManyWithWhereWithoutNovelInput } from './chapter-update-many-with-where-without-novel.input';
import { ChapterScalarWhereInput } from './chapter-scalar-where.input';

@InputType()
export class ChapterUncheckedUpdateManyWithoutNovelNestedInput {

    @Field(() => [ChapterCreateWithoutNovelInput], {nullable:true})
    @Type(() => ChapterCreateWithoutNovelInput)
    create?: Array<ChapterCreateWithoutNovelInput>;

    @Field(() => [ChapterCreateOrConnectWithoutNovelInput], {nullable:true})
    @Type(() => ChapterCreateOrConnectWithoutNovelInput)
    connectOrCreate?: Array<ChapterCreateOrConnectWithoutNovelInput>;

    @Field(() => [ChapterUpsertWithWhereUniqueWithoutNovelInput], {nullable:true})
    @Type(() => ChapterUpsertWithWhereUniqueWithoutNovelInput)
    upsert?: Array<ChapterUpsertWithWhereUniqueWithoutNovelInput>;

    @Field(() => ChapterCreateManyNovelInputEnvelope, {nullable:true})
    @Type(() => ChapterCreateManyNovelInputEnvelope)
    createMany?: ChapterCreateManyNovelInputEnvelope;

    @Field(() => [ChapterWhereUniqueInput], {nullable:true})
    @Type(() => ChapterWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ChapterWhereUniqueInput, 'id'>>;

    @Field(() => [ChapterWhereUniqueInput], {nullable:true})
    @Type(() => ChapterWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ChapterWhereUniqueInput, 'id'>>;

    @Field(() => [ChapterWhereUniqueInput], {nullable:true})
    @Type(() => ChapterWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ChapterWhereUniqueInput, 'id'>>;

    @Field(() => [ChapterWhereUniqueInput], {nullable:true})
    @Type(() => ChapterWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ChapterWhereUniqueInput, 'id'>>;

    @Field(() => [ChapterUpdateWithWhereUniqueWithoutNovelInput], {nullable:true})
    @Type(() => ChapterUpdateWithWhereUniqueWithoutNovelInput)
    update?: Array<ChapterUpdateWithWhereUniqueWithoutNovelInput>;

    @Field(() => [ChapterUpdateManyWithWhereWithoutNovelInput], {nullable:true})
    @Type(() => ChapterUpdateManyWithWhereWithoutNovelInput)
    updateMany?: Array<ChapterUpdateManyWithWhereWithoutNovelInput>;

    @Field(() => [ChapterScalarWhereInput], {nullable:true})
    @Type(() => ChapterScalarWhereInput)
    deleteMany?: Array<ChapterScalarWhereInput>;
}
