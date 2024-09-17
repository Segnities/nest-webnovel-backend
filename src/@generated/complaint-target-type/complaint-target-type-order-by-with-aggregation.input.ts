import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ComplaintTargetTypeCountOrderByAggregateInput } from './complaint-target-type-count-order-by-aggregate.input';
import { ComplaintTargetTypeAvgOrderByAggregateInput } from './complaint-target-type-avg-order-by-aggregate.input';
import { ComplaintTargetTypeMaxOrderByAggregateInput } from './complaint-target-type-max-order-by-aggregate.input';
import { ComplaintTargetTypeMinOrderByAggregateInput } from './complaint-target-type-min-order-by-aggregate.input';
import { ComplaintTargetTypeSumOrderByAggregateInput } from './complaint-target-type-sum-order-by-aggregate.input';

@InputType()
export class ComplaintTargetTypeOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    complaintCategoryId?: keyof typeof SortOrder;

    @Field(() => ComplaintTargetTypeCountOrderByAggregateInput, {nullable:true})
    _count?: ComplaintTargetTypeCountOrderByAggregateInput;

    @Field(() => ComplaintTargetTypeAvgOrderByAggregateInput, {nullable:true})
    _avg?: ComplaintTargetTypeAvgOrderByAggregateInput;

    @Field(() => ComplaintTargetTypeMaxOrderByAggregateInput, {nullable:true})
    _max?: ComplaintTargetTypeMaxOrderByAggregateInput;

    @Field(() => ComplaintTargetTypeMinOrderByAggregateInput, {nullable:true})
    _min?: ComplaintTargetTypeMinOrderByAggregateInput;

    @Field(() => ComplaintTargetTypeSumOrderByAggregateInput, {nullable:true})
    _sum?: ComplaintTargetTypeSumOrderByAggregateInput;
}
