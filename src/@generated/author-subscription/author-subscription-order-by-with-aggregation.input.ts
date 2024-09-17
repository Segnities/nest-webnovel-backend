import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AuthorSubscriptionCountOrderByAggregateInput } from './author-subscription-count-order-by-aggregate.input';
import { AuthorSubscriptionAvgOrderByAggregateInput } from './author-subscription-avg-order-by-aggregate.input';
import { AuthorSubscriptionMaxOrderByAggregateInput } from './author-subscription-max-order-by-aggregate.input';
import { AuthorSubscriptionMinOrderByAggregateInput } from './author-subscription-min-order-by-aggregate.input';
import { AuthorSubscriptionSumOrderByAggregateInput } from './author-subscription-sum-order-by-aggregate.input';

@InputType()
export class AuthorSubscriptionOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    authorId?: keyof typeof SortOrder;

    @Field(() => AuthorSubscriptionCountOrderByAggregateInput, {nullable:true})
    _count?: AuthorSubscriptionCountOrderByAggregateInput;

    @Field(() => AuthorSubscriptionAvgOrderByAggregateInput, {nullable:true})
    _avg?: AuthorSubscriptionAvgOrderByAggregateInput;

    @Field(() => AuthorSubscriptionMaxOrderByAggregateInput, {nullable:true})
    _max?: AuthorSubscriptionMaxOrderByAggregateInput;

    @Field(() => AuthorSubscriptionMinOrderByAggregateInput, {nullable:true})
    _min?: AuthorSubscriptionMinOrderByAggregateInput;

    @Field(() => AuthorSubscriptionSumOrderByAggregateInput, {nullable:true})
    _sum?: AuthorSubscriptionSumOrderByAggregateInput;
}
