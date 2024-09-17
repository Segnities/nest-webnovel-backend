import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NovelCreateWithoutCountryInput } from './novel-create-without-country.input';
import { Type } from 'class-transformer';
import { NovelCreateOrConnectWithoutCountryInput } from './novel-create-or-connect-without-country.input';
import { NovelCreateManyCountryInputEnvelope } from './novel-create-many-country-input-envelope.input';
import { Prisma } from '@prisma/client';
import { NovelWhereUniqueInput } from './novel-where-unique.input';

@InputType()
export class NovelUncheckedCreateNestedManyWithoutCountryInput {

    @Field(() => [NovelCreateWithoutCountryInput], {nullable:true})
    @Type(() => NovelCreateWithoutCountryInput)
    create?: Array<NovelCreateWithoutCountryInput>;

    @Field(() => [NovelCreateOrConnectWithoutCountryInput], {nullable:true})
    @Type(() => NovelCreateOrConnectWithoutCountryInput)
    connectOrCreate?: Array<NovelCreateOrConnectWithoutCountryInput>;

    @Field(() => NovelCreateManyCountryInputEnvelope, {nullable:true})
    @Type(() => NovelCreateManyCountryInputEnvelope)
    createMany?: NovelCreateManyCountryInputEnvelope;

    @Field(() => [NovelWhereUniqueInput], {nullable:true})
    @Type(() => NovelWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<NovelWhereUniqueInput, 'id'>>;
}
