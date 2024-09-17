import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContinueReadingCreateWithoutLastChapterInput } from './continue-reading-create-without-last-chapter.input';
import { Type } from 'class-transformer';
import { ContinueReadingCreateOrConnectWithoutLastChapterInput } from './continue-reading-create-or-connect-without-last-chapter.input';
import { ContinueReadingUpsertWithWhereUniqueWithoutLastChapterInput } from './continue-reading-upsert-with-where-unique-without-last-chapter.input';
import { ContinueReadingCreateManyLastChapterInputEnvelope } from './continue-reading-create-many-last-chapter-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ContinueReadingWhereUniqueInput } from './continue-reading-where-unique.input';
import { ContinueReadingUpdateWithWhereUniqueWithoutLastChapterInput } from './continue-reading-update-with-where-unique-without-last-chapter.input';
import { ContinueReadingUpdateManyWithWhereWithoutLastChapterInput } from './continue-reading-update-many-with-where-without-last-chapter.input';
import { ContinueReadingScalarWhereInput } from './continue-reading-scalar-where.input';

@InputType()
export class ContinueReadingUncheckedUpdateManyWithoutLastChapterNestedInput {

    @Field(() => [ContinueReadingCreateWithoutLastChapterInput], {nullable:true})
    @Type(() => ContinueReadingCreateWithoutLastChapterInput)
    create?: Array<ContinueReadingCreateWithoutLastChapterInput>;

    @Field(() => [ContinueReadingCreateOrConnectWithoutLastChapterInput], {nullable:true})
    @Type(() => ContinueReadingCreateOrConnectWithoutLastChapterInput)
    connectOrCreate?: Array<ContinueReadingCreateOrConnectWithoutLastChapterInput>;

    @Field(() => [ContinueReadingUpsertWithWhereUniqueWithoutLastChapterInput], {nullable:true})
    @Type(() => ContinueReadingUpsertWithWhereUniqueWithoutLastChapterInput)
    upsert?: Array<ContinueReadingUpsertWithWhereUniqueWithoutLastChapterInput>;

    @Field(() => ContinueReadingCreateManyLastChapterInputEnvelope, {nullable:true})
    @Type(() => ContinueReadingCreateManyLastChapterInputEnvelope)
    createMany?: ContinueReadingCreateManyLastChapterInputEnvelope;

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

    @Field(() => [ContinueReadingUpdateWithWhereUniqueWithoutLastChapterInput], {nullable:true})
    @Type(() => ContinueReadingUpdateWithWhereUniqueWithoutLastChapterInput)
    update?: Array<ContinueReadingUpdateWithWhereUniqueWithoutLastChapterInput>;

    @Field(() => [ContinueReadingUpdateManyWithWhereWithoutLastChapterInput], {nullable:true})
    @Type(() => ContinueReadingUpdateManyWithWhereWithoutLastChapterInput)
    updateMany?: Array<ContinueReadingUpdateManyWithWhereWithoutLastChapterInput>;

    @Field(() => [ContinueReadingScalarWhereInput], {nullable:true})
    @Type(() => ContinueReadingScalarWhereInput)
    deleteMany?: Array<ContinueReadingScalarWhereInput>;
}
