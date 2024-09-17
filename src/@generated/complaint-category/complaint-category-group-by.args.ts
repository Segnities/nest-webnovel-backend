import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ComplaintCategoryWhereInput } from './complaint-category-where.input';
import { Type } from 'class-transformer';
import { ComplaintCategoryOrderByWithAggregationInput } from './complaint-category-order-by-with-aggregation.input';
import { ComplaintCategoryScalarFieldEnum } from './complaint-category-scalar-field.enum';
import { ComplaintCategoryScalarWhereWithAggregatesInput } from './complaint-category-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ComplaintCategoryCountAggregateInput } from './complaint-category-count-aggregate.input';
import { ComplaintCategoryAvgAggregateInput } from './complaint-category-avg-aggregate.input';
import { ComplaintCategorySumAggregateInput } from './complaint-category-sum-aggregate.input';
import { ComplaintCategoryMinAggregateInput } from './complaint-category-min-aggregate.input';
import { ComplaintCategoryMaxAggregateInput } from './complaint-category-max-aggregate.input';

@ArgsType()
export class ComplaintCategoryGroupByArgs {

    @Field(() => ComplaintCategoryWhereInput, {nullable:true})
    @Type(() => ComplaintCategoryWhereInput)
    where?: ComplaintCategoryWhereInput;

    @Field(() => [ComplaintCategoryOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ComplaintCategoryOrderByWithAggregationInput>;

    @Field(() => [ComplaintCategoryScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ComplaintCategoryScalarFieldEnum>;

    @Field(() => ComplaintCategoryScalarWhereWithAggregatesInput, {nullable:true})
    having?: ComplaintCategoryScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ComplaintCategoryCountAggregateInput, {nullable:true})
    _count?: ComplaintCategoryCountAggregateInput;

    @Field(() => ComplaintCategoryAvgAggregateInput, {nullable:true})
    _avg?: ComplaintCategoryAvgAggregateInput;

    @Field(() => ComplaintCategorySumAggregateInput, {nullable:true})
    _sum?: ComplaintCategorySumAggregateInput;

    @Field(() => ComplaintCategoryMinAggregateInput, {nullable:true})
    _min?: ComplaintCategoryMinAggregateInput;

    @Field(() => ComplaintCategoryMaxAggregateInput, {nullable:true})
    _max?: ComplaintCategoryMaxAggregateInput;
}
