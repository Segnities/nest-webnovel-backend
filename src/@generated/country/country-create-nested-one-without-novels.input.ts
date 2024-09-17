import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CountryCreateWithoutNovelsInput } from './country-create-without-novels.input';
import { Type } from 'class-transformer';
import { CountryCreateOrConnectWithoutNovelsInput } from './country-create-or-connect-without-novels.input';
import { Prisma } from '@prisma/client';
import { CountryWhereUniqueInput } from './country-where-unique.input';

@InputType()
export class CountryCreateNestedOneWithoutNovelsInput {

    @Field(() => CountryCreateWithoutNovelsInput, {nullable:true})
    @Type(() => CountryCreateWithoutNovelsInput)
    create?: CountryCreateWithoutNovelsInput;

    @Field(() => CountryCreateOrConnectWithoutNovelsInput, {nullable:true})
    @Type(() => CountryCreateOrConnectWithoutNovelsInput)
    connectOrCreate?: CountryCreateOrConnectWithoutNovelsInput;

    @Field(() => CountryWhereUniqueInput, {nullable:true})
    @Type(() => CountryWhereUniqueInput)
    connect?: Prisma.AtLeast<CountryWhereUniqueInput, 'id' | 'title'>;
}
