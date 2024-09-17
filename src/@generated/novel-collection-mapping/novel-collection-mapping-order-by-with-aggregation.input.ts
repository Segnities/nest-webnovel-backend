import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { NovelCollectionMappingCountOrderByAggregateInput } from './novel-collection-mapping-count-order-by-aggregate.input';
import { NovelCollectionMappingAvgOrderByAggregateInput } from './novel-collection-mapping-avg-order-by-aggregate.input';
import { NovelCollectionMappingMaxOrderByAggregateInput } from './novel-collection-mapping-max-order-by-aggregate.input';
import { NovelCollectionMappingMinOrderByAggregateInput } from './novel-collection-mapping-min-order-by-aggregate.input';
import { NovelCollectionMappingSumOrderByAggregateInput } from './novel-collection-mapping-sum-order-by-aggregate.input';

@InputType()
export class NovelCollectionMappingOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    novelId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userCollectionId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => NovelCollectionMappingCountOrderByAggregateInput, {nullable:true})
    _count?: NovelCollectionMappingCountOrderByAggregateInput;

    @Field(() => NovelCollectionMappingAvgOrderByAggregateInput, {nullable:true})
    _avg?: NovelCollectionMappingAvgOrderByAggregateInput;

    @Field(() => NovelCollectionMappingMaxOrderByAggregateInput, {nullable:true})
    _max?: NovelCollectionMappingMaxOrderByAggregateInput;

    @Field(() => NovelCollectionMappingMinOrderByAggregateInput, {nullable:true})
    _min?: NovelCollectionMappingMinOrderByAggregateInput;

    @Field(() => NovelCollectionMappingSumOrderByAggregateInput, {nullable:true})
    _sum?: NovelCollectionMappingSumOrderByAggregateInput;
}
