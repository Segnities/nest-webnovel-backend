import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { NovelSubscriptionCountOrderByAggregateInput } from './novel-subscription-count-order-by-aggregate.input';
import { NovelSubscriptionAvgOrderByAggregateInput } from './novel-subscription-avg-order-by-aggregate.input';
import { NovelSubscriptionMaxOrderByAggregateInput } from './novel-subscription-max-order-by-aggregate.input';
import { NovelSubscriptionMinOrderByAggregateInput } from './novel-subscription-min-order-by-aggregate.input';
import { NovelSubscriptionSumOrderByAggregateInput } from './novel-subscription-sum-order-by-aggregate.input';

@InputType()
export class NovelSubscriptionOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    novelId?: keyof typeof SortOrder;

    @Field(() => NovelSubscriptionCountOrderByAggregateInput, {nullable:true})
    _count?: NovelSubscriptionCountOrderByAggregateInput;

    @Field(() => NovelSubscriptionAvgOrderByAggregateInput, {nullable:true})
    _avg?: NovelSubscriptionAvgOrderByAggregateInput;

    @Field(() => NovelSubscriptionMaxOrderByAggregateInput, {nullable:true})
    _max?: NovelSubscriptionMaxOrderByAggregateInput;

    @Field(() => NovelSubscriptionMinOrderByAggregateInput, {nullable:true})
    _min?: NovelSubscriptionMinOrderByAggregateInput;

    @Field(() => NovelSubscriptionSumOrderByAggregateInput, {nullable:true})
    _sum?: NovelSubscriptionSumOrderByAggregateInput;
}
