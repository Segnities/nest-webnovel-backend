import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NovelWhereUniqueInput } from './novel-where-unique.input';
import { Type } from 'class-transformer';
import { NovelCreateWithoutCountryInput } from './novel-create-without-country.input';

@InputType()
export class NovelCreateOrConnectWithoutCountryInput {

    @Field(() => NovelWhereUniqueInput, {nullable:false})
    @Type(() => NovelWhereUniqueInput)
    where!: Prisma.AtLeast<NovelWhereUniqueInput, 'id'>;

    @Field(() => NovelCreateWithoutCountryInput, {nullable:false})
    @Type(() => NovelCreateWithoutCountryInput)
    create!: NovelCreateWithoutCountryInput;
}
