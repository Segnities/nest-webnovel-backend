import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NovelWhereUniqueInput } from './novel-where-unique.input';
import { Type } from 'class-transformer';
import { NovelCreateWithoutAlternativeTitlesInput } from './novel-create-without-alternative-titles.input';

@InputType()
export class NovelCreateOrConnectWithoutAlternativeTitlesInput {

    @Field(() => NovelWhereUniqueInput, {nullable:false})
    @Type(() => NovelWhereUniqueInput)
    where!: Prisma.AtLeast<NovelWhereUniqueInput, 'id'>;

    @Field(() => NovelCreateWithoutAlternativeTitlesInput, {nullable:false})
    @Type(() => NovelCreateWithoutAlternativeTitlesInput)
    create!: NovelCreateWithoutAlternativeTitlesInput;
}
