import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutUserNotificationSettingsInput } from '../user/user-create-nested-one-without-user-notification-settings.input';

@InputType()
export class UserNotificationSettingsCreateInput {

    @Field(() => Boolean, {nullable:true})
    receiveSystemNotifications?: boolean;

    @Field(() => Boolean, {nullable:true})
    receiveCommentNotifications?: boolean;

    @Field(() => Boolean, {nullable:true})
    receiveNovelUpdates?: boolean;

    @Field(() => Boolean, {nullable:true})
    receiveReviewNotifications?: boolean;

    @Field(() => Boolean, {nullable:true})
    receiveAuthorUpdates?: boolean;

    @Field(() => UserCreateNestedOneWithoutUserNotificationSettingsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutUserNotificationSettingsInput;
}
