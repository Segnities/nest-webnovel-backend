import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AlternativeTitleWhereInput } from './alternative-title-where.input';
import { Type } from 'class-transformer';
import { AlternativeTitleOrderByWithAggregationInput } from './alternative-title-order-by-with-aggregation.input';
import { AlternativeTitleScalarFieldEnum } from './alternative-title-scalar-field.enum';
import { AlternativeTitleScalarWhereWithAggregatesInput } from './alternative-title-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { AlternativeTitleCountAggregateInput } from './alternative-title-count-aggregate.input';
import { AlternativeTitleAvgAggregateInput } from './alternative-title-avg-aggregate.input';
import { AlternativeTitleSumAggregateInput } from './alternative-title-sum-aggregate.input';
import { AlternativeTitleMinAggregateInput } from './alternative-title-min-aggregate.input';
import { AlternativeTitleMaxAggregateInput } from './alternative-title-max-aggregate.input';

@ArgsType()
export class AlternativeTitleGroupByArgs {

    @Field(() => AlternativeTitleWhereInput, {nullable:true})
    @Type(() => AlternativeTitleWhereInput)
    where?: AlternativeTitleWhereInput;

    @Field(() => [AlternativeTitleOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<AlternativeTitleOrderByWithAggregationInput>;

    @Field(() => [AlternativeTitleScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof AlternativeTitleScalarFieldEnum>;

    @Field(() => AlternativeTitleScalarWhereWithAggregatesInput, {nullable:true})
    having?: AlternativeTitleScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => AlternativeTitleCountAggregateInput, {nullable:true})
    _count?: AlternativeTitleCountAggregateInput;

    @Field(() => AlternativeTitleAvgAggregateInput, {nullable:true})
    _avg?: AlternativeTitleAvgAggregateInput;

    @Field(() => AlternativeTitleSumAggregateInput, {nullable:true})
    _sum?: AlternativeTitleSumAggregateInput;

    @Field(() => AlternativeTitleMinAggregateInput, {nullable:true})
    _min?: AlternativeTitleMinAggregateInput;

    @Field(() => AlternativeTitleMaxAggregateInput, {nullable:true})
    _max?: AlternativeTitleMaxAggregateInput;
}
