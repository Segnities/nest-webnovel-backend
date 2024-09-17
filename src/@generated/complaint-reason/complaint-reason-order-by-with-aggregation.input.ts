import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ComplaintReasonCountOrderByAggregateInput } from './complaint-reason-count-order-by-aggregate.input';
import { ComplaintReasonAvgOrderByAggregateInput } from './complaint-reason-avg-order-by-aggregate.input';
import { ComplaintReasonMaxOrderByAggregateInput } from './complaint-reason-max-order-by-aggregate.input';
import { ComplaintReasonMinOrderByAggregateInput } from './complaint-reason-min-order-by-aggregate.input';
import { ComplaintReasonSumOrderByAggregateInput } from './complaint-reason-sum-order-by-aggregate.input';

@InputType()
export class ComplaintReasonOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    userId?: SortOrderInput;

    @Field(() => ComplaintReasonCountOrderByAggregateInput, {nullable:true})
    _count?: ComplaintReasonCountOrderByAggregateInput;

    @Field(() => ComplaintReasonAvgOrderByAggregateInput, {nullable:true})
    _avg?: ComplaintReasonAvgOrderByAggregateInput;

    @Field(() => ComplaintReasonMaxOrderByAggregateInput, {nullable:true})
    _max?: ComplaintReasonMaxOrderByAggregateInput;

    @Field(() => ComplaintReasonMinOrderByAggregateInput, {nullable:true})
    _min?: ComplaintReasonMinOrderByAggregateInput;

    @Field(() => ComplaintReasonSumOrderByAggregateInput, {nullable:true})
    _sum?: ComplaintReasonSumOrderByAggregateInput;
}
