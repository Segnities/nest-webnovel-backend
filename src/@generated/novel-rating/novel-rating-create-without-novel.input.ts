import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@InputType()
export class NovelRatingCreateWithoutNovelInput {

    @Field(() => Int, {nullable:false})
    votesCount!: number;

    @Field(() => Float, {nullable:false})
    avgRating!: number;

    @Field(() => Int, {nullable:false})
    totalRating!: number;
}
