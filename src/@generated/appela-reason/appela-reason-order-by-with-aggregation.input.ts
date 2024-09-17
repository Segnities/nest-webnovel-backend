import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AppelaReasonCountOrderByAggregateInput } from './appela-reason-count-order-by-aggregate.input';
import { AppelaReasonAvgOrderByAggregateInput } from './appela-reason-avg-order-by-aggregate.input';
import { AppelaReasonMaxOrderByAggregateInput } from './appela-reason-max-order-by-aggregate.input';
import { AppelaReasonMinOrderByAggregateInput } from './appela-reason-min-order-by-aggregate.input';
import { AppelaReasonSumOrderByAggregateInput } from './appela-reason-sum-order-by-aggregate.input';

@InputType()
export class AppelaReasonOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => AppelaReasonCountOrderByAggregateInput, {nullable:true})
    _count?: AppelaReasonCountOrderByAggregateInput;

    @Field(() => AppelaReasonAvgOrderByAggregateInput, {nullable:true})
    _avg?: AppelaReasonAvgOrderByAggregateInput;

    @Field(() => AppelaReasonMaxOrderByAggregateInput, {nullable:true})
    _max?: AppelaReasonMaxOrderByAggregateInput;

    @Field(() => AppelaReasonMinOrderByAggregateInput, {nullable:true})
    _min?: AppelaReasonMinOrderByAggregateInput;

    @Field(() => AppelaReasonSumOrderByAggregateInput, {nullable:true})
    _sum?: AppelaReasonSumOrderByAggregateInput;
}
