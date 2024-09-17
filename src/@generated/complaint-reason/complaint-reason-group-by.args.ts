import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ComplaintReasonWhereInput } from './complaint-reason-where.input';
import { Type } from 'class-transformer';
import { ComplaintReasonOrderByWithAggregationInput } from './complaint-reason-order-by-with-aggregation.input';
import { ComplaintReasonScalarFieldEnum } from './complaint-reason-scalar-field.enum';
import { ComplaintReasonScalarWhereWithAggregatesInput } from './complaint-reason-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ComplaintReasonCountAggregateInput } from './complaint-reason-count-aggregate.input';
import { ComplaintReasonAvgAggregateInput } from './complaint-reason-avg-aggregate.input';
import { ComplaintReasonSumAggregateInput } from './complaint-reason-sum-aggregate.input';
import { ComplaintReasonMinAggregateInput } from './complaint-reason-min-aggregate.input';
import { ComplaintReasonMaxAggregateInput } from './complaint-reason-max-aggregate.input';

@ArgsType()
export class ComplaintReasonGroupByArgs {

    @Field(() => ComplaintReasonWhereInput, {nullable:true})
    @Type(() => ComplaintReasonWhereInput)
    where?: ComplaintReasonWhereInput;

    @Field(() => [ComplaintReasonOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ComplaintReasonOrderByWithAggregationInput>;

    @Field(() => [ComplaintReasonScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ComplaintReasonScalarFieldEnum>;

    @Field(() => ComplaintReasonScalarWhereWithAggregatesInput, {nullable:true})
    having?: ComplaintReasonScalarWhereWithAggregatesInput;

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
