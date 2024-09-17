import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AppelaReasonWhereInput } from './appela-reason-where.input';
import { Type } from 'class-transformer';
import { AppelaReasonOrderByWithAggregationInput } from './appela-reason-order-by-with-aggregation.input';
import { AppelaReasonScalarFieldEnum } from './appela-reason-scalar-field.enum';
import { AppelaReasonScalarWhereWithAggregatesInput } from './appela-reason-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { AppelaReasonCountAggregateInput } from './appela-reason-count-aggregate.input';
import { AppelaReasonAvgAggregateInput } from './appela-reason-avg-aggregate.input';
import { AppelaReasonSumAggregateInput } from './appela-reason-sum-aggregate.input';
import { AppelaReasonMinAggregateInput } from './appela-reason-min-aggregate.input';
import { AppelaReasonMaxAggregateInput } from './appela-reason-max-aggregate.input';

@ArgsType()
export class AppelaReasonGroupByArgs {

    @Field(() => AppelaReasonWhereInput, {nullable:true})
    @Type(() => AppelaReasonWhereInput)
    where?: AppelaReasonWhereInput;

    @Field(() => [AppelaReasonOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<AppelaReasonOrderByWithAggregationInput>;

    @Field(() => [AppelaReasonScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof AppelaReasonScalarFieldEnum>;

    @Field(() => AppelaReasonScalarWhereWithAggregatesInput, {nullable:true})
    having?: AppelaReasonScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => AppelaReasonCountAggregateInput, {nullable:true})
    _count?: AppelaReasonCountAggregateInput;

    @Field(() => AppelaReasonAvgAggregateInput, {nullable:true})
    _avg?: AppelaReasonAvgAggregateInput;

    @Field(() => AppelaReasonSumAggregateInput, {nullable:true})
    _sum?: AppelaReasonSumAggregateInput;

    @Field(() => AppelaReasonMinAggregateInput, {nullable:true})
    _min?: AppelaReasonMinAggregateInput;

    @Field(() => AppelaReasonMaxAggregateInput, {nullable:true})
    _max?: AppelaReasonMaxAggregateInput;
}
