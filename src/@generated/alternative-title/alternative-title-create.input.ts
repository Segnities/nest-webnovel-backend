import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NovelCreateNestedOneWithoutAlternativeTitlesInput } from '../novel/novel-create-nested-one-without-alternative-titles.input';

@InputType()
export class AlternativeTitleCreateInput {

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => NovelCreateNestedOneWithoutAlternativeTitlesInput, {nullable:false})
    novel!: NovelCreateNestedOneWithoutAlternativeTitlesInput;
}
