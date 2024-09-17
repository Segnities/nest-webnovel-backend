import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { NovelOrderByWithRelationInput } from '../novel/novel-order-by-with-relation.input';
import { UserCollectionMappingOrderByWithRelationInput } from '../user-collection-mapping/user-collection-mapping-order-by-with-relation.input';

@InputType()
export class NovelCollectionMappingOrderByWithRelationInput {

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

    @Field(() => NovelOrderByWithRelationInput, {nullable:true})
    novel?: NovelOrderByWithRelationInput;

    @Field(() => UserCollectionMappingOrderByWithRelationInput, {nullable:true})
    userCollectionMapping?: UserCollectionMappingOrderByWithRelationInput;
}
