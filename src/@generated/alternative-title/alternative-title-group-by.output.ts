import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { AlternativeTitleCountAggregate } from './alternative-title-count-aggregate.output';
import { AlternativeTitleAvgAggregate } from './alternative-title-avg-aggregate.output';
import { AlternativeTitleSumAggregate } from './alternative-title-sum-aggregate.output';
import { AlternativeTitleMinAggregate } from './alternative-title-min-aggregate.output';
import { AlternativeTitleMaxAggregate } from './alternative-title-max-aggregate.output';

@ObjectType()
export class AlternativeTitleGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => Int, {nullable:false})
    novelId!: number;

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
