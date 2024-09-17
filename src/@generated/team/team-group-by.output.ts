import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TeamCountAggregate } from './team-count-aggregate.output';
import { TeamAvgAggregate } from './team-avg-aggregate.output';
import { TeamSumAggregate } from './team-sum-aggregate.output';
import { TeamMinAggregate } from './team-min-aggregate.output';
import { TeamMaxAggregate } from './team-max-aggregate.output';

@ObjectType()
export class TeamGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:false})
    chapters_count!: number;

    @Field(() => Int, {nullable:false})
    books_count!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => TeamCountAggregate, {nullable:true})
    _count?: TeamCountAggregate;

    @Field(() => TeamAvgAggregate, {nullable:true})
    _avg?: TeamAvgAggregate;

    @Field(() => TeamSumAggregate, {nullable:true})
    _sum?: TeamSumAggregate;

    @Field(() => TeamMinAggregate, {nullable:true})
    _min?: TeamMinAggregate;

    @Field(() => TeamMaxAggregate, {nullable:true})
    _max?: TeamMaxAggregate;
}
