import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Collection } from '../collection/collection.model';
import { User } from '../user/user.model';
import { NovelCollectionMapping } from '../novel-collection-mapping/novel-collection-mapping.model';
import { UserCollectionMappingCount } from './user-collection-mapping-count.output';

@ObjectType()
export class UserCollectionMapping {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    collectionId!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Collection, {nullable:false})
    collection?: Collection;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => [NovelCollectionMapping], {nullable:true})
    novelCollectionMapping?: Array<NovelCollectionMapping>;

    @Field(() => UserCollectionMappingCount, {nullable:false})
    _count?: UserCollectionMappingCount;
}
