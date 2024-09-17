import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AlternativeTitleCountAggregate } from './alternative-title-count-aggregate.output';
import { AlternativeTitleAvgAggregate } from './alternative-title-avg-aggregate.output';
import { AlternativeTitleSumAggregate } from './alternative-title-sum-aggregate.output';
import { AlternativeTitleMinAggregate } from './alternative-title-min-aggregate.output';
import { AlternativeTitleMaxAggregate } from './alternative-title-max-aggregate.output';

@ObjectType()
export class AggregateAlternativeTitle {

    @Field(() => AlternativeTitleCountAggregate, {nullable:true})
    _count?: AlternativeTitleCountAggregate;

    @Field(() => AlternativeTitleAvgAggregate, {nullable:true})
    _avg?: AlternativeTitleAvgAggregate;

    @Field(() => AlternativeTitleSumAggregate, {nullable:true})
    _sum?: AlternativeTitleSumAggregate;

    @Field(() => AlternativeTitleMinAggregate, {nullable:true})
    _min?: AlternativeTitleMinAggregate;

    @Field(() => AlternativeTitleMaxAggregate, {nullable:true})
    _max?: AlternativeTitleMaxAggregate;
}
