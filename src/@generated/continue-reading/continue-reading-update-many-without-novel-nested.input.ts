import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContinueReadingCreateWithoutNovelInput } from './continue-reading-create-without-novel.input';
import { Type } from 'class-transformer';
import { ContinueReadingCreateOrConnectWithoutNovelInput } from './continue-reading-create-or-connect-without-novel.input';
import { ContinueReadingUpsertWithWhereUniqueWithoutNovelInput } from './continue-reading-upsert-with-where-unique-without-novel.input';
import { ContinueReadingCreateManyNovelInputEnvelope } from './continue-reading-create-many-novel-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ContinueReadingWhereUniqueInput } from './continue-reading-where-unique.input';
import { ContinueReadingUpdateWithWhereUniqueWithoutNovelInput } from './continue-reading-update-with-where-unique-without-novel.input';
import { ContinueReadingUpdateManyWithWhereWithoutNovelInput } from './continue-reading-update-many-with-where-without-novel.input';
import { ContinueReadingScalarWhereInput } from './continue-reading-scalar-where.input';

@InputType()
export class ContinueReadingUpdateManyWithoutNovelNestedInput {

    @Field(() => [ContinueReadingCreateWithoutNovelInput], {nullable:true})
    @Type(() => ContinueReadingCreateWithoutNovelInput)
    create?: Array<ContinueReadingCreateWithoutNovelInput>;

    @Field(() => [ContinueReadingCreateOrConnectWithoutNovelInput], {nullable:true})
    @Type(() => ContinueReadingCreateOrConnectWithoutNovelInput)
    connectOrCreate?: Array<ContinueReadingCreateOrConnectWithoutNovelInput>;

    @Field(() => [ContinueReadingUpsertWithWhereUniqueWithoutNovelInput], {nullable:true})
    @Type(() => ContinueReadingUpsertWithWhereUniqueWithoutNovelInput)
    upsert?: Array<ContinueReadingUpsertWithWhereUniqueWithoutNovelInput>;

    @Field(() => ContinueReadingCreateManyNovelInputEnvelope, {nullable:true})
    @Type(() => ContinueReadingCreateManyNovelInputEnvelope)
    createMany?: ContinueReadingCreateManyNovelInputEnvelope;

    @Field(() => [ContinueReadingWhereUniqueInput], {nullable:true})
    @Type(() => ContinueReadingWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ContinueReadingWhereUniqueInput, 'id'>>;

    @Field(() => [ContinueReadingWhereUniqueInput], {nullable:true})
    @Type(() => ContinueReadingWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ContinueReadingWhereUniqueInput, 'id'>>;

    @Field(() => [ContinueReadingWhereUniqueInput], {nullable:true})
    @Type(() => ContinueReadingWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ContinueReadingWhereUniqueInput, 'id'>>;

    @Field(() => [ContinueReadingWhereUniqueInput], {nullable:true})
    @Type(() => ContinueReadingWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ContinueReadingWhereUniqueInput, 'id'>>;

    @Field(() => [ContinueReadingUpdateWithWhereUniqueWithoutNovelInput], {nullable:true})
    @Type(() => ContinueReadingUpdateWithWhereUniqueWithoutNovelInput)
    update?: Array<ContinueReadingUpdateWithWhereUniqueWithoutNovelInput>;

    @Field(() => [ContinueReadingUpdateManyWithWhereWithoutNovelInput], {nullable:true})
    @Type(() => ContinueReadingUpdateManyWithWhereWithoutNovelInput)
    updateMany?: Array<ContinueReadingUpdateManyWithWhereWithoutNovelInput>;

    @Field(() => [ContinueReadingScalarWhereInput], {nullable:true})
    @Type(() => ContinueReadingScalarWhereInput)
    deleteMany?: Array<ContinueReadingScalarWhereInput>;
}
