import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ComplaintReasonCountAggregate } from './complaint-reason-count-aggregate.output';
import { ComplaintReasonAvgAggregate } from './complaint-reason-avg-aggregate.output';
import { ComplaintReasonSumAggregate } from './complaint-reason-sum-aggregate.output';
import { ComplaintReasonMinAggregate } from './complaint-reason-min-aggregate.output';
import { ComplaintReasonMaxAggregate } from './complaint-reason-max-aggregate.output';

@ObjectType()
export class AggregateComplaintReason {

    @Field(() => ComplaintReasonCountAggregate, {nullable:true})
    _count?: ComplaintReasonCountAggregate;

    @Field(() => ComplaintReasonAvgAggregate, {nullable:true})
    _avg?: ComplaintReasonAvgAggregate;

    @Field(() => ComplaintReasonSumAggregate, {nullable:true})
    _sum?: ComplaintReasonSumAggregate;

    @Field(() => ComplaintReasonMinAggregate, {nullable:true})
    _min?: ComplaintReasonMinAggregate;

    @Field(() => ComplaintReasonMaxAggregate, {nullable:true})
    _max?: ComplaintReasonMaxAggregate;
}
