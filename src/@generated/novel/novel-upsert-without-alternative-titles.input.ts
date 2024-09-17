import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NovelUpdateWithoutAlternativeTitlesInput } from './novel-update-without-alternative-titles.input';
import { Type } from 'class-transformer';
import { NovelCreateWithoutAlternativeTitlesInput } from './novel-create-without-alternative-titles.input';
import { NovelWhereInput } from './novel-where.input';

@InputType()
export class NovelUpsertWithoutAlternativeTitlesInput {

    @Field(() => NovelUpdateWithoutAlternativeTitlesInput, {nullable:false})
    @Type(() => NovelUpdateWithoutAlternativeTitlesInput)
    update!: NovelUpdateWithoutAlternativeTitlesInput;

    @Field(() => NovelCreateWithoutAlternativeTitlesInput, {nullable:false})
    @Type(() => NovelCreateWithoutAlternativeTitlesInput)
    create!: NovelCreateWithoutAlternativeTitlesInput;

    @Field(() => NovelWhereInput, {nullable:true})
    @Type(() => NovelWhereInput)
    where?: NovelWhereInput;
}
