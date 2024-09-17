import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { NovelRatingCountAggregate } from './novel-rating-count-aggregate.output';
import { NovelRatingAvgAggregate } from './novel-rating-avg-aggregate.output';
import { NovelRatingSumAggregate } from './novel-rating-sum-aggregate.output';
import { NovelRatingMinAggregate } from './novel-rating-min-aggregate.output';
import { NovelRatingMaxAggregate } from './novel-rating-max-aggregate.output';

@ObjectType()
export class AggregateNovelRating {

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
