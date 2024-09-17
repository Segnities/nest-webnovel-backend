import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CommendableTypeCountAggregate } from './commendable-type-count-aggregate.output';
import { CommendableTypeAvgAggregate } from './commendable-type-avg-aggregate.output';
import { CommendableTypeSumAggregate } from './commendable-type-sum-aggregate.output';
import { CommendableTypeMinAggregate } from './commendable-type-min-aggregate.output';
import { CommendableTypeMaxAggregate } from './commendable-type-max-aggregate.output';

@ObjectType()
export class AggregateCommendableType {

    @Field(() => CommendableTypeCountAggregate, {nullable:true})
    _count?: CommendableTypeCountAggregate;

    @Field(() => CommendableTypeAvgAggregate, {nullable:true})
    _avg?: CommendableTypeAvgAggregate;

    @Field(() => CommendableTypeSumAggregate, {nullable:true})
    _sum?: CommendableTypeSumAggregate;

    @Field(() => CommendableTypeMinAggregate, {nullable:true})
    _min?: CommendableTypeMinAggregate;

    @Field(() => CommendableTypeMaxAggregate, {nullable:true})
    _max?: CommendableTypeMaxAggregate;
}
