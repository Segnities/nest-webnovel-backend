import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NovelWhereInput } from './novel-where.input';
import { Type } from 'class-transformer';
import { NovelUpdateWithoutReviewsInput } from './novel-update-without-reviews.input';

@InputType()
export class NovelUpdateToOneWithWhereWithoutReviewsInput {

    @Field(() => NovelWhereInput, {nullable:true})
    @Type(() => NovelWhereInput)
    where?: NovelWhereInput;

    @Field(() => NovelUpdateWithoutReviewsInput, {nullable:false})
    @Type(() => NovelUpdateWithoutReviewsInput)
    data!: NovelUpdateWithoutReviewsInput;
}
