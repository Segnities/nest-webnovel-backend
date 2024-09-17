import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { TeamCountAggregate } from './team-count-aggregate.output';
import { TeamAvgAggregate } from './team-avg-aggregate.output';
import { TeamSumAggregate } from './team-sum-aggregate.output';
import { TeamMinAggregate } from './team-min-aggregate.output';
import { TeamMaxAggregate } from './team-max-aggregate.output';

@ObjectType()
export class AggregateTeam {

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
