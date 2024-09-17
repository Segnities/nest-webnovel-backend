import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { NovelCountAggregate } from './novel-count-aggregate.output';
import { NovelAvgAggregate } from './novel-avg-aggregate.output';
import { NovelSumAggregate } from './novel-sum-aggregate.output';
import { NovelMinAggregate } from './novel-min-aggregate.output';
import { NovelMaxAggregate } from './novel-max-aggregate.output';

@ObjectType()
export class AggregateNovel {

    @Field(() => NovelCountAggregate, {nullable:true})
    _count?: NovelCountAggregate;

    @Field(() => NovelAvgAggregate, {nullable:true})
    _avg?: NovelAvgAggregate;

    @Field(() => NovelSumAggregate, {nullable:true})
    _sum?: NovelSumAggregate;

    @Field(() => NovelMinAggregate, {nullable:true})
    _min?: NovelMinAggregate;

    @Field(() => NovelMaxAggregate, {nullable:true})
    _max?: NovelMaxAggregate;
}
