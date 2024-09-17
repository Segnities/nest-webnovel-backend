import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ContentComplaintWhereInput } from './content-complaint-where.input';
import { Type } from 'class-transformer';
import { ContentComplaintOrderByWithAggregationInput } from './content-complaint-order-by-with-aggregation.input';
import { ContentComplaintScalarFieldEnum } from './content-complaint-scalar-field.enum';
import { ContentComplaintScalarWhereWithAggregatesInput } from './content-complaint-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ContentComplaintCountAggregateInput } from './content-complaint-count-aggregate.input';
import { ContentComplaintAvgAggregateInput } from './content-complaint-avg-aggregate.input';
import { ContentComplaintSumAggregateInput } from './content-complaint-sum-aggregate.input';
import { ContentComplaintMinAggregateInput } from './content-complaint-min-aggregate.input';
import { ContentComplaintMaxAggregateInput } from './content-complaint-max-aggregate.input';

@ArgsType()
export class ContentComplaintGroupByArgs {

    @Field(() => ContentComplaintWhereInput, {nullable:true})
    @Type(() => ContentComplaintWhereInput)
    where?: ContentComplaintWhereInput;

    @Field(() => [ContentComplaintOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ContentComplaintOrderByWithAggregationInput>;

    @Field(() => [ContentComplaintScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ContentComplaintScalarFieldEnum>;

    @Field(() => ContentComplaintScalarWhereWithAggregatesInput, {nullable:true})
    having?: ContentComplaintScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ContentComplaintCountAggregateInput, {nullable:true})
    _count?: ContentComplaintCountAggregateInput;

    @Field(() => ContentComplaintAvgAggregateInput, {nullable:true})
    _avg?: ContentComplaintAvgAggregateInput;

    @Field(() => ContentComplaintSumAggregateInput, {nullable:true})
    _sum?: ContentComplaintSumAggregateInput;

    @Field(() => ContentComplaintMinAggregateInput, {nullable:true})
    _min?: ContentComplaintMinAggregateInput;

    @Field(() => ContentComplaintMaxAggregateInput, {nullable:true})
    _max?: ContentComplaintMaxAggregateInput;
}
