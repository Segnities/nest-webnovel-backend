import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { UserRatingCountAggregate } from './user-rating-count-aggregate.output';
import { UserRatingAvgAggregate } from './user-rating-avg-aggregate.output';
import { UserRatingSumAggregate } from './user-rating-sum-aggregate.output';
import { UserRatingMinAggregate } from './user-rating-min-aggregate.output';
import { UserRatingMaxAggregate } from './user-rating-max-aggregate.output';

@ObjectType()
export class AggregateUserRating {

    @Field(() => UserRatingCountAggregate, {nullable:true})
    _count?: UserRatingCountAggregate;

    @Field(() => UserRatingAvgAggregate, {nullable:true})
    _avg?: UserRatingAvgAggregate;

    @Field(() => UserRatingSumAggregate, {nullable:true})
    _sum?: UserRatingSumAggregate;

    @Field(() => UserRatingMinAggregate, {nullable:true})
    _min?: UserRatingMinAggregate;

    @Field(() => UserRatingMaxAggregate, {nullable:true})
    _max?: UserRatingMaxAggregate;
}
