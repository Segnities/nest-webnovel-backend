import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AuthorSubscriptionCountAggregate } from './author-subscription-count-aggregate.output';
import { AuthorSubscriptionAvgAggregate } from './author-subscription-avg-aggregate.output';
import { AuthorSubscriptionSumAggregate } from './author-subscription-sum-aggregate.output';
import { AuthorSubscriptionMinAggregate } from './author-subscription-min-aggregate.output';
import { AuthorSubscriptionMaxAggregate } from './author-subscription-max-aggregate.output';

@ObjectType()
export class AggregateAuthorSubscription {

    @Field(() => AuthorSubscriptionCountAggregate, {nullable:true})
    _count?: AuthorSubscriptionCountAggregate;

    @Field(() => AuthorSubscriptionAvgAggregate, {nullable:true})
    _avg?: AuthorSubscriptionAvgAggregate;

    @Field(() => AuthorSubscriptionSumAggregate, {nullable:true})
    _sum?: AuthorSubscriptionSumAggregate;

    @Field(() => AuthorSubscriptionMinAggregate, {nullable:true})
    _min?: AuthorSubscriptionMinAggregate;

    @Field(() => AuthorSubscriptionMaxAggregate, {nullable:true})
    _max?: AuthorSubscriptionMaxAggregate;
}
