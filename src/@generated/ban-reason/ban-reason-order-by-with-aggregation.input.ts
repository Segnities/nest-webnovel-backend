import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { BanReasonCountOrderByAggregateInput } from './ban-reason-count-order-by-aggregate.input';
import { BanReasonAvgOrderByAggregateInput } from './ban-reason-avg-order-by-aggregate.input';
import { BanReasonMaxOrderByAggregateInput } from './ban-reason-max-order-by-aggregate.input';
import { BanReasonMinOrderByAggregateInput } from './ban-reason-min-order-by-aggregate.input';
import { BanReasonSumOrderByAggregateInput } from './ban-reason-sum-order-by-aggregate.input';

@InputType()
export class BanReasonOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => BanReasonCountOrderByAggregateInput, {nullable:true})
    _count?: BanReasonCountOrderByAggregateInput;

    @Field(() => BanReasonAvgOrderByAggregateInput, {nullable:true})
    _avg?: BanReasonAvgOrderByAggregateInput;

    @Field(() => BanReasonMaxOrderByAggregateInput, {nullable:true})
    _max?: BanReasonMaxOrderByAggregateInput;

    @Field(() => BanReasonMinOrderByAggregateInput, {nullable:true})
    _min?: BanReasonMinOrderByAggregateInput;

    @Field(() => BanReasonSumOrderByAggregateInput, {nullable:true})
    _sum?: BanReasonSumOrderByAggregateInput;
}
