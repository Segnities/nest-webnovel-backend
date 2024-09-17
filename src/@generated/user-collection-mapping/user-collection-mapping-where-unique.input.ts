import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserCollectionMappingCollectionIdUserIdCompoundUniqueInput } from './user-collection-mapping-collection-id-user-id-compound-unique.input';
import { UserCollectionMappingWhereInput } from './user-collection-mapping-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { CollectionRelationFilter } from '../collection/collection-relation-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { NovelCollectionMappingListRelationFilter } from '../novel-collection-mapping/novel-collection-mapping-list-relation-filter.input';

@InputType()
export class UserCollectionMappingWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => UserCollectionMappingCollectionIdUserIdCompoundUniqueInput, {nullable:true})
    collectionId_userId?: UserCollectionMappingCollectionIdUserIdCompoundUniqueInput;

    @Field(() => [UserCollectionMappingWhereInput], {nullable:true})
    AND?: Array<UserCollectionMappingWhereInput>;

    @Field(() => [UserCollectionMappingWhereInput], {nullable:true})
    OR?: Array<UserCollectionMappingWhereInput>;

    @Field(() => [UserCollectionMappingWhereInput], {nullable:true})
    NOT?: Array<UserCollectionMappingWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    collectionId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => CollectionRelationFilter, {nullable:true})
    collection?: CollectionRelationFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => NovelCollectionMappingListRelationFilter, {nullable:true})
    novelCollectionMapping?: NovelCollectionMappingListRelationFilter;
}
