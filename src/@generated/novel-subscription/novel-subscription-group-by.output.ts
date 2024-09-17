import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { NovelSubscriptionCountAggregate } from './novel-subscription-count-aggregate.output';
import { NovelSubscriptionAvgAggregate } from './novel-subscription-avg-aggregate.output';
import { NovelSubscriptionSumAggregate } from './novel-subscription-sum-aggregate.output';
import { NovelSubscriptionMinAggregate } from './novel-subscription-min-aggregate.output';
import { NovelSubscriptionMaxAggregate } from './novel-subscription-max-aggregate.output';

@ObjectType()
export class NovelSubscriptionGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    novelId!: number;

    @Field(() => NovelSubscriptionCountAggregate, {nullable:true})
    _count?: NovelSubscriptionCountAggregate;

    @Field(() => NovelSubscriptionAvgAggregate, {nullable:true})
    _avg?: NovelSubscriptionAvgAggregate;

    @Field(() => NovelSubscriptionSumAggregate, {nullable:true})
    _sum?: NovelSubscriptionSumAggregate;

    @Field(() => NovelSubscriptionMinAggregate, {nullable:true})
    _min?: NovelSubscriptionMinAggregate;

    @Field(() => NovelSubscriptionMaxAggregate, {nullable:true})
    _max?: NovelSubscriptionMaxAggregate;
}
