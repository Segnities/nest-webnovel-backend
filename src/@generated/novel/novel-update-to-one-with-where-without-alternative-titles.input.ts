import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NovelWhereInput } from './novel-where.input';
import { Type } from 'class-transformer';
import { NovelUpdateWithoutAlternativeTitlesInput } from './novel-update-without-alternative-titles.input';

@InputType()
export class NovelUpdateToOneWithWhereWithoutAlternativeTitlesInput {

    @Field(() => NovelWhereInput, {nullable:true})
    @Type(() => NovelWhereInput)
    where?: NovelWhereInput;

    @Field(() => NovelUpdateWithoutAlternativeTitlesInput, {nullable:false})
    @Type(() => NovelUpdateWithoutAlternativeTitlesInput)
    data!: NovelUpdateWithoutAlternativeTitlesInput;
}
