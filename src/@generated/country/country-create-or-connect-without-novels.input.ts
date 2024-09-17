import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CountryWhereUniqueInput } from './country-where-unique.input';
import { Type } from 'class-transformer';
import { CountryCreateWithoutNovelsInput } from './country-create-without-novels.input';

@InputType()
export class CountryCreateOrConnectWithoutNovelsInput {

    @Field(() => CountryWhereUniqueInput, {nullable:false})
    @Type(() => CountryWhereUniqueInput)
    where!: Prisma.AtLeast<CountryWhereUniqueInput, 'id' | 'title'>;

    @Field(() => CountryCreateWithoutNovelsInput, {nullable:false})
    @Type(() => CountryCreateWithoutNovelsInput)
    create!: CountryCreateWithoutNovelsInput;
}
