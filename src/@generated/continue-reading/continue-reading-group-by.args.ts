import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ContinueReadingWhereInput } from './continue-reading-where.input';
import { Type } from 'class-transformer';
import { ContinueReadingOrderByWithAggregationInput } from './continue-reading-order-by-with-aggregation.input';
import { ContinueReadingScalarFieldEnum } from './continue-reading-scalar-field.enum';
import { ContinueReadingScalarWhereWithAggregatesInput } from './continue-reading-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ContinueReadingCountAggregateInput } from './continue-reading-count-aggregate.input';
import { ContinueReadingAvgAggregateInput } from './continue-reading-avg-aggregate.input';
import { ContinueReadingSumAggregateInput } from './continue-reading-sum-aggregate.input';
import { ContinueReadingMinAggregateInput } from './continue-reading-min-aggregate.input';
import { ContinueReadingMaxAggregateInput } from './continue-reading-max-aggregate.input';

@ArgsType()
export class ContinueReadingGroupByArgs {

    @Field(() => ContinueReadingWhereInput, {nullable:true})
    @Type(() => ContinueReadingWhereInput)
    where?: ContinueReadingWhereInput;

    @Field(() => [ContinueReadingOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ContinueReadingOrderByWithAggregationInput>;

    @Field(() => [ContinueReadingScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ContinueReadingScalarFieldEnum>;

    @Field(() => ContinueReadingScalarWhereWithAggregatesInput, {nullable:true})
    having?: ContinueReadingScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ContinueReadingCountAggregateInput, {nullable:true})
    _count?: ContinueReadingCountAggregateInput;

    @Field(() => ContinueReadingAvgAggregateInput, {nullable:true})
    _avg?: ContinueReadingAvgAggregateInput;

    @Field(() => ContinueReadingSumAggregateInput, {nullable:true})
    _sum?: ContinueReadingSumAggregateInput;

    @Field(() => ContinueReadingMinAggregateInput, {nullable:true})
    _min?: ContinueReadingMinAggregateInput;

    @Field(() => ContinueReadingMaxAggregateInput, {nullable:true})
    _max?: ContinueReadingMaxAggregateInput;
}
