import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChapterWhereInput } from './chapter-where.input';

@InputType()
export class ChapterRelationFilter {

    @Field(() => ChapterWhereInput, {nullable:true})
    is?: ChapterWhereInput;

    @Field(() => ChapterWhereInput, {nullable:true})
    isNot?: ChapterWhereInput;
}
