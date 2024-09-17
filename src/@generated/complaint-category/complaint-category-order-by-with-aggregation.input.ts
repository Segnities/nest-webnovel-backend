import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ComplaintCategoryCountOrderByAggregateInput } from './complaint-category-count-order-by-aggregate.input';
import { ComplaintCategoryAvgOrderByAggregateInput } from './complaint-category-avg-order-by-aggregate.input';
import { ComplaintCategoryMaxOrderByAggregateInput } from './complaint-category-max-order-by-aggregate.input';
import { ComplaintCategoryMinOrderByAggregateInput } from './complaint-category-min-order-by-aggregate.input';
import { ComplaintCategorySumOrderByAggregateInput } from './complaint-category-sum-order-by-aggregate.input';

@InputType()
export class ComplaintCategoryOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => ComplaintCategoryCountOrderByAggregateInput, {nullable:true})
    _count?: ComplaintCategoryCountOrderByAggregateInput;

    @Field(() => ComplaintCategoryAvgOrderByAggregateInput, {nullable:true})
    _avg?: ComplaintCategoryAvgOrderByAggregateInput;

    @Field(() => ComplaintCategoryMaxOrderByAggregateInput, {nullable:true})
    _max?: ComplaintCategoryMaxOrderByAggregateInput;

    @Field(() => ComplaintCategoryMinOrderByAggregateInput, {nullable:true})
    _min?: ComplaintCategoryMinOrderByAggregateInput;

    @Field(() => ComplaintCategorySumOrderByAggregateInput, {nullable:true})
    _sum?: ComplaintCategorySumOrderByAggregateInput;
}
