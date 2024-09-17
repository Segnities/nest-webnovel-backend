import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CollectionCountAggregate } from './collection-count-aggregate.output';
import { CollectionAvgAggregate } from './collection-avg-aggregate.output';
import { CollectionSumAggregate } from './collection-sum-aggregate.output';
import { CollectionMinAggregate } from './collection-min-aggregate.output';
import { CollectionMaxAggregate } from './collection-max-aggregate.output';

@ObjectType()
export class AggregateCollection {

    @Field(() => CollectionCountAggregate, {nullable:true})
    _count?: CollectionCountAggregate;

    @Field(() => CollectionAvgAggregate, {nullable:true})
    _avg?: CollectionAvgAggregate;

    @Field(() => CollectionSumAggregate, {nullable:true})
    _sum?: CollectionSumAggregate;

    @Field(() => CollectionMinAggregate, {nullable:true})
    _min?: CollectionMinAggregate;

    @Field(() => CollectionMaxAggregate, {nullable:true})
    _max?: CollectionMaxAggregate;
}
