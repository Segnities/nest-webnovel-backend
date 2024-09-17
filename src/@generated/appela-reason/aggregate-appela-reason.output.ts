import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AppelaReasonCountAggregate } from './appela-reason-count-aggregate.output';
import { AppelaReasonAvgAggregate } from './appela-reason-avg-aggregate.output';
import { AppelaReasonSumAggregate } from './appela-reason-sum-aggregate.output';
import { AppelaReasonMinAggregate } from './appela-reason-min-aggregate.output';
import { AppelaReasonMaxAggregate } from './appela-reason-max-aggregate.output';

@ObjectType()
export class AggregateAppelaReason {

    @Field(() => AppelaReasonCountAggregate, {nullable:true})
    _count?: AppelaReasonCountAggregate;

    @Field(() => AppelaReasonAvgAggregate, {nullable:true})
    _avg?: AppelaReasonAvgAggregate;

    @Field(() => AppelaReasonSumAggregate, {nullable:true})
    _sum?: AppelaReasonSumAggregate;

    @Field(() => AppelaReasonMinAggregate, {nullable:true})
    _min?: AppelaReasonMinAggregate;

    @Field(() => AppelaReasonMaxAggregate, {nullable:true})
    _max?: AppelaReasonMaxAggregate;
}
