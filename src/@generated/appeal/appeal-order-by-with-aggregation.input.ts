import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AppealCountOrderByAggregateInput } from './appeal-count-order-by-aggregate.input';
import { AppealAvgOrderByAggregateInput } from './appeal-avg-order-by-aggregate.input';
import { AppealMaxOrderByAggregateInput } from './appeal-max-order-by-aggregate.input';
import { AppealMinOrderByAggregateInput } from './appeal-min-order-by-aggregate.input';
import { AppealSumOrderByAggregateInput } from './appeal-sum-order-by-aggregate.input';

@InputType()
export class AppealOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    body?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    reviewedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    appealReasonId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    reviewedBy?: keyof typeof SortOrder;

    @Field(() => AppealCountOrderByAggregateInput, {nullable:true})
    _count?: AppealCountOrderByAggregateInput;

    @Field(() => AppealAvgOrderByAggregateInput, {nullable:true})
    _avg?: AppealAvgOrderByAggregateInput;

    @Field(() => AppealMaxOrderByAggregateInput, {nullable:true})
    _max?: AppealMaxOrderByAggregateInput;

    @Field(() => AppealMinOrderByAggregateInput, {nullable:true})
    _min?: AppealMinOrderByAggregateInput;

    @Field(() => AppealSumOrderByAggregateInput, {nullable:true})
    _sum?: AppealSumOrderByAggregateInput;
}
