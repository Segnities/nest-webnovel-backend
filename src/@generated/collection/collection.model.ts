import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { UserCollectionMapping } from '../user-collection-mapping/user-collection-mapping.model';
import { CollectionCount } from './collection-count.output';

@ObjectType()
export class Collection {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    isDefault!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [UserCollectionMapping], {nullable:true})
    userCollectionMapping?: Array<UserCollectionMapping>;

    @Field(() => CollectionCount, {nullable:false})
    _count?: CollectionCount;
}
