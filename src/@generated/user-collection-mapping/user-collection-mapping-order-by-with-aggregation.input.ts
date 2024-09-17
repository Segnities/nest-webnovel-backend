import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserCollectionMappingCountOrderByAggregateInput } from './user-collection-mapping-count-order-by-aggregate.input';
import { UserCollectionMappingAvgOrderByAggregateInput } from './user-collection-mapping-avg-order-by-aggregate.input';
import { UserCollectionMappingMaxOrderByAggregateInput } from './user-collection-mapping-max-order-by-aggregate.input';
import { UserCollectionMappingMinOrderByAggregateInput } from './user-collection-mapping-min-order-by-aggregate.input';
import { UserCollectionMappingSumOrderByAggregateInput } from './user-collection-mapping-sum-order-by-aggregate.input';

@InputType()
export class UserCollectionMappingOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    collectionId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => UserCollectionMappingCountOrderByAggregateInput, {nullable:true})
    _count?: UserCollectionMappingCountOrderByAggregateInput;

    @Field(() => UserCollectionMappingAvgOrderByAggregateInput, {nullable:true})
    _avg?: UserCollectionMappingAvgOrderByAggregateInput;

    @Field(() => UserCollectionMappingMaxOrderByAggregateInput, {nullable:true})
    _max?: UserCollectionMappingMaxOrderByAggregateInput;

    @Field(() => UserCollectionMappingMinOrderByAggregateInput, {nullable:true})
    _min?: UserCollectionMappingMinOrderByAggregateInput;

    @Field(() => UserCollectionMappingSumOrderByAggregateInput, {nullable:true})
    _sum?: UserCollectionMappingSumOrderByAggregateInput;
}
