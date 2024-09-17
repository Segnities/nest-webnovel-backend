import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ComplaintReasonWhereInput } from './complaint-reason-where.input';
import { Type } from 'class-transformer';
import { ComplaintReasonOrderByWithRelationInput } from './complaint-reason-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ComplaintReasonWhereUniqueInput } from './complaint-reason-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ComplaintReasonCountAggregateInput } from './complaint-reason-count-aggregate.input';
import { ComplaintReasonAvgAggregateInput } from './complaint-reason-avg-aggregate.input';
import { ComplaintReasonSumAggregateInput } from './complaint-reason-sum-aggregate.input';
import { ComplaintReasonMinAggregateInput } from './complaint-reason-min-aggregate.input';
import { ComplaintReasonMaxAggregateInput } from './complaint-reason-max-aggregate.input';

@ArgsType()
export class ComplaintReasonAggregateArgs {

    @Field(() => ComplaintReasonWhereInput, {nullable:true})
    @Type(() => ComplaintReasonWhereInput)
    where?: ComplaintReasonWhereInput;

    @Field(() => [ComplaintReasonOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ComplaintReasonOrderByWithRelationInput>;

    @Field(() => ComplaintReasonWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ComplaintReasonWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ComplaintReasonCountAggregateInput, {nullable:true})
    _count?: ComplaintReasonCountAggregateInput;

    @Field(() => ComplaintReasonAvgAggregateInput, {nullable:true})
    _avg?: ComplaintReasonAvgAggregateInput;

    @Field(() => ComplaintReasonSumAggregateInput, {nullable:true})
    _sum?: ComplaintReasonSumAggregateInput;

    @Field(() => ComplaintReasonMinAggregateInput, {nullable:true})
    _min?: ComplaintReasonMinAggregateInput;

    @Field(() => ComplaintReasonMaxAggregateInput, {nullable:true})
    _max?: ComplaintReasonMaxAggregateInput;
}
