import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { BanReasonCountAggregate } from './ban-reason-count-aggregate.output';
import { BanReasonAvgAggregate } from './ban-reason-avg-aggregate.output';
import { BanReasonSumAggregate } from './ban-reason-sum-aggregate.output';
import { BanReasonMinAggregate } from './ban-reason-min-aggregate.output';
import { BanReasonMaxAggregate } from './ban-reason-max-aggregate.output';

@ObjectType()
export class BanReasonGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => BanReasonCountAggregate, {nullable:true})
    _count?: BanReasonCountAggregate;

    @Field(() => BanReasonAvgAggregate, {nullable:true})
    _avg?: BanReasonAvgAggregate;

    @Field(() => BanReasonSumAggregate, {nullable:true})
    _sum?: BanReasonSumAggregate;

    @Field(() => BanReasonMinAggregate, {nullable:true})
    _min?: BanReasonMinAggregate;

    @Field(() => BanReasonMaxAggregate, {nullable:true})
    _max?: BanReasonMaxAggregate;
}
