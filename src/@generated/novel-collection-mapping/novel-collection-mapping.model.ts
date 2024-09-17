import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Novel } from '../novel/novel.model';
import { UserCollectionMapping } from '../user-collection-mapping/user-collection-mapping.model';

@ObjectType()
export class NovelCollectionMapping {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    novelId!: number;

    @Field(() => Int, {nullable:false})
    userCollectionId!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Novel, {nullable:false})
    novel?: Novel;

    @Field(() => UserCollectionMapping, {nullable:false})
    userCollectionMapping?: UserCollectionMapping;
}
