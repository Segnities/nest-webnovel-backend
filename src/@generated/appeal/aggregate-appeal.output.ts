import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AppealCountAggregate } from './appeal-count-aggregate.output';
import { AppealAvgAggregate } from './appeal-avg-aggregate.output';
import { AppealSumAggregate } from './appeal-sum-aggregate.output';
import { AppealMinAggregate } from './appeal-min-aggregate.output';
import { AppealMaxAggregate } from './appeal-max-aggregate.output';

@ObjectType()
export class AggregateAppeal {

    @Field(() => AppealCountAggregate, {nullable:true})
    _count?: AppealCountAggregate;

    @Field(() => AppealAvgAggregate, {nullable:true})
    _avg?: AppealAvgAggregate;

    @Field(() => AppealSumAggregate, {nullable:true})
    _sum?: AppealSumAggregate;

    @Field(() => AppealMinAggregate, {nullable:true})
    _min?: AppealMinAggregate;

    @Field(() => AppealMaxAggregate, {nullable:true})
    _max?: AppealMaxAggregate;
}
