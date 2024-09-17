import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { BanCountAggregate } from './ban-count-aggregate.output';
import { BanAvgAggregate } from './ban-avg-aggregate.output';
import { BanSumAggregate } from './ban-sum-aggregate.output';
import { BanMinAggregate } from './ban-min-aggregate.output';
import { BanMaxAggregate } from './ban-max-aggregate.output';

@ObjectType()
export class BanGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    banStart!: Date | string;

    @Field(() => Date, {nullable:false})
    banEnd!: Date | string;

    @Field(() => Int, {nullable:false})
    duration!: number;

    @Field(() => Boolean, {nullable:false})
    appealed!: boolean;

    @Field(() => Int, {nullable:false})
    appealId!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => Int, {nullable:false})
    issuedBy!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    complaintTargetId!: number;

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
