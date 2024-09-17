import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NovelCreateWithoutComplainTargetTypeInput } from './novel-create-without-complain-target-type.input';
import { Type } from 'class-transformer';
import { NovelCreateOrConnectWithoutComplainTargetTypeInput } from './novel-create-or-connect-without-complain-target-type.input';
import { NovelUpsertWithWhereUniqueWithoutComplainTargetTypeInput } from './novel-upsert-with-where-unique-without-complain-target-type.input';
import { NovelCreateManyComplainTargetTypeInputEnvelope } from './novel-create-many-complain-target-type-input-envelope.input';
import { Prisma } from '@prisma/client';
import { NovelWhereUniqueInput } from './novel-where-unique.input';
import { NovelUpdateWithWhereUniqueWithoutComplainTargetTypeInput } from './novel-update-with-where-unique-without-complain-target-type.input';
import { NovelUpdateManyWithWhereWithoutComplainTargetTypeInput } from './novel-update-many-with-where-without-complain-target-type.input';
import { NovelScalarWhereInput } from './novel-scalar-where.input';

@InputType()
export class NovelUpdateManyWithoutComplainTargetTypeNestedInput {

    @Field(() => [NovelCreateWithoutComplainTargetTypeInput], {nullable:true})
    @Type(() => NovelCreateWithoutComplainTargetTypeInput)
    create?: Array<NovelCreateWithoutComplainTargetTypeInput>;

    @Field(() => [NovelCreateOrConnectWithoutComplainTargetTypeInput], {nullable:true})
    @Type(() => NovelCreateOrConnectWithoutComplainTargetTypeInput)
    connectOrCreate?: Array<NovelCreateOrConnectWithoutComplainTargetTypeInput>;

    @Field(() => [NovelUpsertWithWhereUniqueWithoutComplainTargetTypeInput], {nullable:true})
    @Type(() => NovelUpsertWithWhereUniqueWithoutComplainTargetTypeInput)
    upsert?: Array<NovelUpsertWithWhereUniqueWithoutComplainTargetTypeInput>;

    @Field(() => NovelCreateManyComplainTargetTypeInputEnvelope, {nullable:true})
    @Type(() => NovelCreateManyComplainTargetTypeInputEnvelope)
    createMany?: NovelCreateManyComplainTargetTypeInputEnvelope;

    @Field(() => [NovelWhereUniqueInput], {nullable:true})
    @Type(() => NovelWhereUniqueInput)
    set?: Array<Prisma.AtLeast<NovelWhereUniqueInput, 'id'>>;

    @Field(() => [NovelWhereUniqueInput], {nullable:true})
    @Type(() => NovelWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<NovelWhereUniqueInput, 'id'>>;

    @Field(() => [NovelWhereUniqueInput], {nullable:true})
    @Type(() => NovelWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<NovelWhereUniqueInput, 'id'>>;

    @Field(() => [NovelWhereUniqueInput], {nullable:true})
    @Type(() => NovelWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<NovelWhereUniqueInput, 'id'>>;

    @Field(() => [NovelUpdateWithWhereUniqueWithoutComplainTargetTypeInput], {nullable:true})
    @Type(() => NovelUpdateWithWhereUniqueWithoutComplainTargetTypeInput)
    update?: Array<NovelUpdateWithWhereUniqueWithoutComplainTargetTypeInput>;

    @Field(() => [NovelUpdateManyWithWhereWithoutComplainTargetTypeInput], {nullable:true})
    @Type(() => NovelUpdateManyWithWhereWithoutComplainTargetTypeInput)
    updateMany?: Array<NovelUpdateManyWithWhereWithoutComplainTargetTypeInput>;

    @Field(() => [NovelScalarWhereInput], {nullable:true})
    @Type(() => NovelScalarWhereInput)
    deleteMany?: Array<NovelScalarWhereInput>;
}
