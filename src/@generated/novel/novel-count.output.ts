import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class NovelCount {

    @Field(() => Int, {nullable:false})
    tags?: number;

    @Field(() => Int, {nullable:false})
    genres?: number;

    @Field(() => Int, {nullable:false})
    alternativeTitles?: number;

    @Field(() => Int, {nullable:false})
    chapters?: number;

    @Field(() => Int, {nullable:false})
    reviews?: number;

    @Field(() => Int, {nullable:false})
    usersRatings?: number;

    @Field(() => Int, {nullable:false})
    novelCollectionMapping?: number;

    @Field(() => Int, {nullable:false})
    continueReading?: number;

    @Field(() => Int, {nullable:false})
    novelSubscription?: number;

    @Field(() => Int, {nullable:false})
    notifications?: number;
}
