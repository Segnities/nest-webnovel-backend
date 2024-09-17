import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NovelCreateWithoutAlternativeTitlesInput } from './novel-create-without-alternative-titles.input';
import { Type } from 'class-transformer';
import { NovelCreateOrConnectWithoutAlternativeTitlesInput } from './novel-create-or-connect-without-alternative-titles.input';
import { NovelUpsertWithoutAlternativeTitlesInput } from './novel-upsert-without-alternative-titles.input';
import { Prisma } from '@prisma/client';
import { NovelWhereUniqueInput } from './novel-where-unique.input';
import { NovelUpdateToOneWithWhereWithoutAlternativeTitlesInput } from './novel-update-to-one-with-where-without-alternative-titles.input';

@InputType()
export class NovelUpdateOneRequiredWithoutAlternativeTitlesNestedInput {

    @Field(() => NovelCreateWithoutAlternativeTitlesInput, {nullable:true})
    @Type(() => NovelCreateWithoutAlternativeTitlesInput)
    create?: NovelCreateWithoutAlternativeTitlesInput;

    @Field(() => NovelCreateOrConnectWithoutAlternativeTitlesInput, {nullable:true})
    @Type(() => NovelCreateOrConnectWithoutAlternativeTitlesInput)
    connectOrCreate?: NovelCreateOrConnectWithoutAlternativeTitlesInput;

    @Field(() => NovelUpsertWithoutAlternativeTitlesInput, {nullable:true})
    @Type(() => NovelUpsertWithoutAlternativeTitlesInput)
    upsert?: NovelUpsertWithoutAlternativeTitlesInput;

    @Field(() => NovelWhereUniqueInput, {nullable:true})
    @Type(() => NovelWhereUniqueInput)
    connect?: Prisma.AtLeast<NovelWhereUniqueInput, 'id'>;

    @Field(() => NovelUpdateToOneWithWhereWithoutAlternativeTitlesInput, {nullable:true})
    @Type(() => NovelUpdateToOneWithWhereWithoutAlternativeTitlesInput)
    update?: NovelUpdateToOneWithWhereWithoutAlternativeTitlesInput;
}
