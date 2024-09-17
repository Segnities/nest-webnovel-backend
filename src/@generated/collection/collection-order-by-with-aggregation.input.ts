import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CollectionCountOrderByAggregateInput } from './collection-count-order-by-aggregate.input';
import { CollectionAvgOrderByAggregateInput } from './collection-avg-order-by-aggregate.input';
import { CollectionMaxOrderByAggregateInput } from './collection-max-order-by-aggregate.input';
import { CollectionMinOrderByAggregateInput } from './collection-min-order-by-aggregate.input';
import { CollectionSumOrderByAggregateInput } from './collection-sum-order-by-aggregate.input';

@InputType()
export class CollectionOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isDefault?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => CollectionCountOrderByAggregateInput, {nullable:true})
    _count?: CollectionCountOrderByAggregateInput;

    @Field(() => CollectionAvgOrderByAggregateInput, {nullable:true})
    _avg?: CollectionAvgOrderByAggregateInput;

    @Field(() => CollectionMaxOrderByAggregateInput, {nullable:true})
    _max?: CollectionMaxOrderByAggregateInput;

    @Field(() => CollectionMinOrderByAggregateInput, {nullable:true})
    _min?: CollectionMinOrderByAggregateInput;

    @Field(() => CollectionSumOrderByAggregateInput, {nullable:true})
    _sum?: CollectionSumOrderByAggregateInput;
}
