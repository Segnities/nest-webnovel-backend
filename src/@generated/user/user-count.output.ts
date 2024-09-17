import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UserCount {

    @Field(() => Int, {nullable:false})
    usersRatings?: number;

    @Field(() => Int, {nullable:false})
    comments?: number;

    @Field(() => Int, {nullable:false})
    bookmarks?: number;

    @Field(() => Int, {nullable:false})
    reviews?: number;

    @Field(() => Int, {nullable:false})
    userCollectionMapping?: number;

    @Field(() => Int, {nullable:false})
    continueReading?: number;

    @Field(() => Int, {nullable:false})
    news?: number;

    @Field(() => Int, {nullable:false})
    userComplaints?: number;

    @Field(() => Int, {nullable:false})
    complaintReasons?: number;

    @Field(() => Int, {nullable:false})
    issuedContentComplaints?: number;

    @Field(() => Int, {nullable:false})
    resolvedContentComplaints?: number;

    @Field(() => Int, {nullable:false})
    issuedBans?: number;

    @Field(() => Int, {nullable:false})
    userBans?: number;

    @Field(() => Int, {nullable:false})
    reviewedAppeals?: number;

    @Field(() => Int, {nullable:false})
    userNotificationSettings?: number;

    @Field(() => Int, {nullable:false})
    novelsSubscription?: number;

    @Field(() => Int, {nullable:false})
    notifications?: number;

    @Field(() => Int, {nullable:false})
    authorSubscription?: number;
}
