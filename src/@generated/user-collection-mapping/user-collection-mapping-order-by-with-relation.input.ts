import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CollectionOrderByWithRelationInput } from '../collection/collection-order-by-with-relation.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { NovelCollectionMappingOrderByRelationAggregateInput } from '../novel-collection-mapping/novel-collection-mapping-order-by-relation-aggregate.input';

@InputType()
export class UserCollectionMappingOrderByWithRelationInput {

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

    @Field(() => CollectionOrderByWithRelationInput, {nullable:true})
    collection?: CollectionOrderByWithRelationInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: UserOrderByWithRelationInput;

    @Field(() => NovelCollectionMappingOrderByRelationAggregateInput, {nullable:true})
    novelCollectionMapping?: NovelCollectionMappingOrderByRelationAggregateInput;
}
