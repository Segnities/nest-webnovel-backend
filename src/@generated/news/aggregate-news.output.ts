import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { NewsCountAggregate } from './news-count-aggregate.output';
import { NewsAvgAggregate } from './news-avg-aggregate.output';
import { NewsSumAggregate } from './news-sum-aggregate.output';
import { NewsMinAggregate } from './news-min-aggregate.output';
import { NewsMaxAggregate } from './news-max-aggregate.output';

@ObjectType()
export class AggregateNews {

    @Field(() => NewsCountAggregate, {nullable:true})
    _count?: NewsCountAggregate;

    @Field(() => NewsAvgAggregate, {nullable:true})
    _avg?: NewsAvgAggregate;

    @Field(() => NewsSumAggregate, {nullable:true})
    _sum?: NewsSumAggregate;

    @Field(() => NewsMinAggregate, {nullable:true})
    _min?: NewsMinAggregate;

    @Field(() => NewsMaxAggregate, {nullable:true})
    _max?: NewsMaxAggregate;
}
