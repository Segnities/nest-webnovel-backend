import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NovelRatingWhereInput } from './novel-rating-where.input';

@InputType()
export class NovelRatingNullableRelationFilter {

    @Field(() => NovelRatingWhereInput, {nullable:true})
    is?: NovelRatingWhereInput;

    @Field(() => NovelRatingWhereInput, {nullable:true})
    isNot?: NovelRatingWhereInput;
}
