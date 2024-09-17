import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserNotificationSettingsWhereInput } from './user-notification-settings-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyUserNotificationSettingsArgs {

    @Field(() => UserNotificationSettingsWhereInput, {nullable:true})
    @Type(() => UserNotificationSettingsWhereInput)
    where?: UserNotificationSettingsWhereInput;
}
