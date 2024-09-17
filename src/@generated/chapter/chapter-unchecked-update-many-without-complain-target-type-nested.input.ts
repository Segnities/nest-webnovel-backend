import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChapterCreateWithoutComplainTargetTypeInput } from './chapter-create-without-complain-target-type.input';
import { Type } from 'class-transformer';
import { ChapterCreateOrConnectWithoutComplainTargetTypeInput } from './chapter-create-or-connect-without-complain-target-type.input';
import { ChapterUpsertWithWhereUniqueWithoutComplainTargetTypeInput } from './chapter-upsert-with-where-unique-without-complain-target-type.input';
import { ChapterCreateManyComplainTargetTypeInputEnvelope } from './chapter-create-many-complain-target-type-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ChapterWhereUniqueInput } from './chapter-where-unique.input';
import { ChapterUpdateWithWhereUniqueWithoutComplainTargetTypeInput } from './chapter-update-with-where-unique-without-complain-target-type.input';
import { ChapterUpdateManyWithWhereWithoutComplainTargetTypeInput } from './chapter-update-many-with-where-without-complain-target-type.input';
import { ChapterScalarWhereInput } from './chapter-scalar-where.input';

@InputType()
export class ChapterUncheckedUpdateManyWithoutComplainTargetTypeNestedInput {

    @Field(() => [ChapterCreateWithoutComplainTargetTypeInput], {nullable:true})
    @Type(() => ChapterCreateWithoutComplainTargetTypeInput)
    create?: Array<ChapterCreateWithoutComplainTargetTypeInput>;

    @Field(() => [ChapterCreateOrConnectWithoutComplainTargetTypeInput], {nullable:true})
    @Type(() => ChapterCreateOrConnectWithoutComplainTargetTypeInput)
    connectOrCreate?: Array<ChapterCreateOrConnectWithoutComplainTargetTypeInput>;

    @Field(() => [ChapterUpsertWithWhereUniqueWithoutComplainTargetTypeInput], {nullable:true})
    @Type(() => ChapterUpsertWithWhereUniqueWithoutComplainTargetTypeInput)
    upsert?: Array<ChapterUpsertWithWhereUniqueWithoutComplainTargetTypeInput>;

    @Field(() => ChapterCreateManyComplainTargetTypeInputEnvelope, {nullable:true})
    @Type(() => ChapterCreateManyComplainTargetTypeInputEnvelope)
    createMany?: ChapterCreateManyComplainTargetTypeInputEnvelope;

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

    @Field(() => [ChapterUpdateWithWhereUniqueWithoutComplainTargetTypeInput], {nullable:true})
    @Type(() => ChapterUpdateWithWhereUniqueWithoutComplainTargetTypeInput)
    update?: Array<ChapterUpdateWithWhereUniqueWithoutComplainTargetTypeInput>;

    @Field(() => [ChapterUpdateManyWithWhereWithoutComplainTargetTypeInput], {nullable:true})
    @Type(() => ChapterUpdateManyWithWhereWithoutComplainTargetTypeInput)
    updateMany?: Array<ChapterUpdateManyWithWhereWithoutComplainTargetTypeInput>;

    @Field(() => [ChapterScalarWhereInput], {nullable:true})
    @Type(() => ChapterScalarWhereInput)
    deleteMany?: Array<ChapterScalarWhereInput>;
}
