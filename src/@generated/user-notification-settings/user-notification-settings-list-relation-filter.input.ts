import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserNotificationSettingsWhereInput } from './user-notification-settings-where.input';

@InputType()
export class UserNotificationSettingsListRelationFilter {

    @Field(() => UserNotificationSettingsWhereInput, {nullable:true})
    every?: UserNotificationSettingsWhereInput;

    @Field(() => UserNotificationSettingsWhereInput, {nullable:true})
    some?: UserNotificationSettingsWhereInput;

    @Field(() => UserNotificationSettingsWhereInput, {nullable:true})
    none?: UserNotificationSettingsWhereInput;
}
