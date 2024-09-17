import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@InputType()
export class NovelRatingUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:false})
    votesCount!: number;

    @Field(() => Float, {nullable:false})
    avgRating!: number;

    @Field(() => Int, {nullable:false})
    totalRating!: number;

    @Field(() => Int, {nullable:false})
    novelId!: number;
}
