import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { User } from '../user/user.model';

@ObjectType()
export class UserNotificationSettings {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Boolean, {nullable:false,defaultValue:true})
    receiveSystemNotifications!: boolean;

    @Field(() => Boolean, {nullable:false,defaultValue:true})
    receiveCommentNotifications!: boolean;

    @Field(() => Boolean, {nullable:false,defaultValue:true})
    receiveNovelUpdates!: boolean;

    @Field(() => Boolean, {nullable:false,defaultValue:true})
    receiveReviewNotifications!: boolean;

    @Field(() => Boolean, {nullable:false,defaultValue:true})
    receiveAuthorUpdates!: boolean;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => User, {nullable:false})
    user?: User;
}
