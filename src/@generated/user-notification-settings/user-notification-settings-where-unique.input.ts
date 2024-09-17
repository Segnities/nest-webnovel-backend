import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserNotificationSettingsWhereInput } from './user-notification-settings-where.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';

@InputType()
export class UserNotificationSettingsWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [UserNotificationSettingsWhereInput], {nullable:true})
    AND?: Array<UserNotificationSettingsWhereInput>;

    @Field(() => [UserNotificationSettingsWhereInput], {nullable:true})
    OR?: Array<UserNotificationSettingsWhereInput>;

    @Field(() => [UserNotificationSettingsWhereInput], {nullable:true})
    NOT?: Array<UserNotificationSettingsWhereInput>;

    @Field(() => BoolFilter, {nullable:true})
    receiveSystemNotifications?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    receiveCommentNotifications?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    receiveNovelUpdates?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    receiveReviewNotifications?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    receiveAuthorUpdates?: BoolFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;
}
