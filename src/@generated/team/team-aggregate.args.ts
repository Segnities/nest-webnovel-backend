import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TeamWhereInput } from './team-where.input';
import { Type } from 'class-transformer';
import { TeamOrderByWithRelationInput } from './team-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { TeamWhereUniqueInput } from './team-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TeamCountAggregateInput } from './team-count-aggregate.input';
import { TeamAvgAggregateInput } from './team-avg-aggregate.input';
import { TeamSumAggregateInput } from './team-sum-aggregate.input';
import { TeamMinAggregateInput } from './team-min-aggregate.input';
import { TeamMaxAggregateInput } from './team-max-aggregate.input';

@ArgsType()
export class TeamAggregateArgs {

    @Field(() => TeamWhereInput, {nullable:true})
    @Type(() => TeamWhereInput)
    where?: TeamWhereInput;

    @Field(() => [TeamOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TeamOrderByWithRelationInput>;

    @Field(() => TeamWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<TeamWhereUniqueInput, 'id'>;

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
