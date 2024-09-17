import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChapterWhereInput } from './chapter-where.input';

@InputType()
export class ChapterListRelationFilter {

    @Field(() => ChapterWhereInput, {nullable:true})
    every?: ChapterWhereInput;

    @Field(() => ChapterWhereInput, {nullable:true})
    some?: ChapterWhereInput;

    @Field(() => ChapterWhereInput, {nullable:true})
    none?: ChapterWhereInput;
}
