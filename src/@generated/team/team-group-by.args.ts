import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TeamWhereInput } from './team-where.input';
import { Type } from 'class-transformer';
import { TeamOrderByWithAggregationInput } from './team-order-by-with-aggregation.input';
import { TeamScalarFieldEnum } from './team-scalar-field.enum';
import { TeamScalarWhereWithAggregatesInput } from './team-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { TeamCountAggregateInput } from './team-count-aggregate.input';
import { TeamAvgAggregateInput } from './team-avg-aggregate.input';
import { TeamSumAggregateInput } from './team-sum-aggregate.input';
import { TeamMinAggregateInput } from './team-min-aggregate.input';
import { TeamMaxAggregateInput } from './team-max-aggregate.input';

@ArgsType()
export class TeamGroupByArgs {

    @Field(() => TeamWhereInput, {nullable:true})
    @Type(() => TeamWhereInput)
    where?: TeamWhereInput;

    @Field(() => [TeamOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<TeamOrderByWithAggregationInput>;

    @Field(() => [TeamScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof TeamScalarFieldEnum>;

    @Field(() => TeamScalarWhereWithAggregatesInput, {nullable:true})
    having?: TeamScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => TeamCountAggregateInput, {nullable:true})
    _count?: TeamCountAggregateInput;

    @Field(() => TeamAvgAggregateInput, {nullable:true})
    _avg?: TeamAvgAggregateInput;

    @Field(() => TeamSumAggregateInput, {nullable:true})
    _sum?: TeamSumAggregateInput;

    @Field(() => TeamMinAggregateInput, {nullable:true})
    _min?: TeamMinAggregateInput;

    @Field(() => TeamMaxAggregateInput, {nullable:true})
    _max?: TeamMaxAggregateInput;
}
