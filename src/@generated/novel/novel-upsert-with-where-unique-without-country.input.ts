import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NovelWhereUniqueInput } from './novel-where-unique.input';
import { Type } from 'class-transformer';
import { NovelUpdateWithoutCountryInput } from './novel-update-without-country.input';
import { NovelCreateWithoutCountryInput } from './novel-create-without-country.input';

@InputType()
export class NovelUpsertWithWhereUniqueWithoutCountryInput {

    @Field(() => NovelWhereUniqueInput, {nullable:false})
    @Type(() => NovelWhereUniqueInput)
    where!: Prisma.AtLeast<NovelWhereUniqueInput, 'id'>;

    @Field(() => NovelUpdateWithoutCountryInput, {nullable:false})
    @Type(() => NovelUpdateWithoutCountryInput)
    update!: NovelUpdateWithoutCountryInput;

    @Field(() => NovelCreateWithoutCountryInput, {nullable:false})
    @Type(() => NovelCreateWithoutCountryInput)
    create!: NovelCreateWithoutCountryInput;
}
