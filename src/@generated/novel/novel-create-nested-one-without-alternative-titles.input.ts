import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NovelCreateWithoutAlternativeTitlesInput } from './novel-create-without-alternative-titles.input';
import { Type } from 'class-transformer';
import { NovelCreateOrConnectWithoutAlternativeTitlesInput } from './novel-create-or-connect-without-alternative-titles.input';
import { Prisma } from '@prisma/client';
import { NovelWhereUniqueInput } from './novel-where-unique.input';

@InputType()
export class NovelCreateNestedOneWithoutAlternativeTitlesInput {

    @Field(() => NovelCreateWithoutAlternativeTitlesInput, {nullable:true})
    @Type(() => NovelCreateWithoutAlternativeTitlesInput)
    create?: NovelCreateWithoutAlternativeTitlesInput;

    @Field(() => NovelCreateOrConnectWithoutAlternativeTitlesInput, {nullable:true})
    @Type(() => NovelCreateOrConnectWithoutAlternativeTitlesInput)
    connectOrCreate?: NovelCreateOrConnectWithoutAlternativeTitlesInput;

    @Field(() => NovelWhereUniqueInput, {nullable:true})
    @Type(() => NovelWhereUniqueInput)
    connect?: Prisma.AtLeast<NovelWhereUniqueInput, 'id'>;
}
