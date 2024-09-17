import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { BanCountAggregate } from './ban-count-aggregate.output';
import { BanAvgAggregate } from './ban-avg-aggregate.output';
import { BanSumAggregate } from './ban-sum-aggregate.output';
import { BanMinAggregate } from './ban-min-aggregate.output';
import { BanMaxAggregate } from './ban-max-aggregate.output';

@ObjectType()
export class AggregateBan {

    @Field(() => BanCountAggregate, {nullable:true})
    _count?: BanCountAggregate;

    @Field(() => BanAvgAggregate, {nullable:true})
    _avg?: BanAvgAggregate;

    @Field(() => BanSumAggregate, {nullable:true})
    _sum?: BanSumAggregate;

    @Field(() => BanMinAggregate, {nullable:true})
    _min?: BanMinAggregate;

    @Field(() => BanMaxAggregate, {nullable:true})
    _max?: BanMaxAggregate;
}
