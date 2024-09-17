import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { NovelRatingCountAggregate } from './novel-rating-count-aggregate.output';
import { NovelRatingAvgAggregate } from './novel-rating-avg-aggregate.output';
import { NovelRatingSumAggregate } from './novel-rating-sum-aggregate.output';
import { NovelRatingMinAggregate } from './novel-rating-min-aggregate.output';
import { NovelRatingMaxAggregate } from './novel-rating-max-aggregate.output';

@ObjectType()
export class NovelRatingGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    votesCount!: number;

    @Field(() => Float, {nullable:false})
    avgRating!: number;

    @Field(() => Int, {nullable:false})
    totalRating!: number;

    @Field(() => Int, {nullable:false})
    novelId!: number;

    @Field(() => NovelRatingCountAggregate, {nullable:true})
    _count?: NovelRatingCountAggregate;

    @Field(() => NovelRatingAvgAggregate, {nullable:true})
    _avg?: NovelRatingAvgAggregate;

    @Field(() => NovelRatingSumAggregate, {nullable:true})
    _sum?: NovelRatingSumAggregate;

    @Field(() => NovelRatingMinAggregate, {nullable:true})
    _min?: NovelRatingMinAggregate;

    @Field(() => NovelRatingMaxAggregate, {nullable:true})
    _max?: NovelRatingMaxAggregate;
}
