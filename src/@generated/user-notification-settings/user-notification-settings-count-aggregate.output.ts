import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UserNotificationSettingsCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    receiveSystemNotifications!: number;

    @Field(() => Int, {nullable:false})
    receiveCommentNotifications!: number;

    @Field(() => Int, {nullable:false})
    receiveNovelUpdates!: number;

    @Field(() => Int, {nullable:false})
    receiveReviewNotifications!: number;

    @Field(() => Int, {nullable:false})
    receiveAuthorUpdates!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
