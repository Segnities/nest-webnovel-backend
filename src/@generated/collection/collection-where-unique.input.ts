import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CollectionWhereInput } from './collection-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserCollectionMappingListRelationFilter } from '../user-collection-mapping/user-collection-mapping-list-relation-filter.input';

@InputType()
export class CollectionWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => [CollectionWhereInput], {nullable:true})
    AND?: Array<CollectionWhereInput>;

    @Field(() => [CollectionWhereInput], {nullable:true})
    OR?: Array<CollectionWhereInput>;

    @Field(() => [CollectionWhereInput], {nullable:true})
    NOT?: Array<CollectionWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    isDefault?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => UserCollectionMappingListRelationFilter, {nullable:true})
    userCollectionMapping?: UserCollectionMappingListRelationFilter;
}
