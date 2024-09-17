import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NovelUpdateWithoutReviewsInput } from './novel-update-without-reviews.input';
import { Type } from 'class-transformer';
import { NovelCreateWithoutReviewsInput } from './novel-create-without-reviews.input';
import { NovelWhereInput } from './novel-where.input';

@InputType()
export class NovelUpsertWithoutReviewsInput {

    @Field(() => NovelUpdateWithoutReviewsInput, {nullable:false})
    @Type(() => NovelUpdateWithoutReviewsInput)
    update!: NovelUpdateWithoutReviewsInput;

    @Field(() => NovelCreateWithoutReviewsInput, {nullable:false})
    @Type(() => NovelCreateWithoutReviewsInput)
    create!: NovelCreateWithoutReviewsInput;

    @Field(() => NovelWhereInput, {nullable:true})
    @Type(() => NovelWhereInput)
    where?: NovelWhereInput;
}
