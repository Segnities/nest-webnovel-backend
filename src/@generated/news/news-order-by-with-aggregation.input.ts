import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { NewsCountOrderByAggregateInput } from './news-count-order-by-aggregate.input';
import { NewsAvgOrderByAggregateInput } from './news-avg-order-by-aggregate.input';
import { NewsMaxOrderByAggregateInput } from './news-max-order-by-aggregate.input';
import { NewsMinOrderByAggregateInput } from './news-min-order-by-aggregate.input';
import { NewsSumOrderByAggregateInput } from './news-sum-order-by-aggregate.input';

@InputType()
export class NewsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    body?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    likes?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    views?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    published?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    commendableTypeId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    complaintTargetId?: keyof typeof SortOrder;

    @Field(() => NewsCountOrderByAggregateInput, {nullable:true})
    _count?: NewsCountOrderByAggregateInput;

    @Field(() => NewsAvgOrderByAggregateInput, {nullable:true})
    _avg?: NewsAvgOrderByAggregateInput;

    @Field(() => NewsMaxOrderByAggregateInput, {nullable:true})
    _max?: NewsMaxOrderByAggregateInput;

    @Field(() => NewsMinOrderByAggregateInput, {nullable:true})
    _min?: NewsMinOrderByAggregateInput;

    @Field(() => NewsSumOrderByAggregateInput, {nullable:true})
    _sum?: NewsSumOrderByAggregateInput;
}
