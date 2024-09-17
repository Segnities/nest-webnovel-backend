import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NovelCreateWithoutCountryInput } from './novel-create-without-country.input';
import { Type } from 'class-transformer';
import { NovelCreateOrConnectWithoutCountryInput } from './novel-create-or-connect-without-country.input';
import { NovelUpsertWithWhereUniqueWithoutCountryInput } from './novel-upsert-with-where-unique-without-country.input';
import { NovelCreateManyCountryInputEnvelope } from './novel-create-many-country-input-envelope.input';
import { Prisma } from '@prisma/client';
import { NovelWhereUniqueInput } from './novel-where-unique.input';
import { NovelUpdateWithWhereUniqueWithoutCountryInput } from './novel-update-with-where-unique-without-country.input';
import { NovelUpdateManyWithWhereWithoutCountryInput } from './novel-update-many-with-where-without-country.input';
import { NovelScalarWhereInput } from './novel-scalar-where.input';

@InputType()
export class NovelUncheckedUpdateManyWithoutCountryNestedInput {

    @Field(() => [NovelCreateWithoutCountryInput], {nullable:true})
    @Type(() => NovelCreateWithoutCountryInput)
    create?: Array<NovelCreateWithoutCountryInput>;

    @Field(() => [NovelCreateOrConnectWithoutCountryInput], {nullable:true})
    @Type(() => NovelCreateOrConnectWithoutCountryInput)
    connectOrCreate?: Array<NovelCreateOrConnectWithoutCountryInput>;

    @Field(() => [NovelUpsertWithWhereUniqueWithoutCountryInput], {nullable:true})
    @Type(() => NovelUpsertWithWhereUniqueWithoutCountryInput)
    upsert?: Array<NovelUpsertWithWhereUniqueWithoutCountryInput>;

    @Field(() => NovelCreateManyCountryInputEnvelope, {nullable:true})
    @Type(() => NovelCreateManyCountryInputEnvelope)
    createMany?: NovelCreateManyCountryInputEnvelope;

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

    @Field(() => [NovelUpdateWithWhereUniqueWithoutCountryInput], {nullable:true})
    @Type(() => NovelUpdateWithWhereUniqueWithoutCountryInput)
    update?: Array<NovelUpdateWithWhereUniqueWithoutCountryInput>;

    @Field(() => [NovelUpdateManyWithWhereWithoutCountryInput], {nullable:true})
    @Type(() => NovelUpdateManyWithWhereWithoutCountryInput)
    updateMany?: Array<NovelUpdateManyWithWhereWithoutCountryInput>;

    @Field(() => [NovelScalarWhereInput], {nullable:true})
    @Type(() => NovelScalarWhereInput)
    deleteMany?: Array<NovelScalarWhereInput>;
}
