import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { NovelCreateNestedOneWithoutNovelRatingInput } from '../novel/novel-create-nested-one-without-novel-rating.input';

@InputType()
export class NovelRatingCreateInput {

    @Field(() => Int, {nullable:false})
    votesCount!: number;

    @Field(() => Float, {nullable:false})
    avgRating!: number;

    @Field(() => Int, {nullable:false})
    totalRating!: number;

    @Field(() => NovelCreateNestedOneWithoutNovelRatingInput, {nullable:false})
    novel!: NovelCreateNestedOneWithoutNovelRatingInput;
}
