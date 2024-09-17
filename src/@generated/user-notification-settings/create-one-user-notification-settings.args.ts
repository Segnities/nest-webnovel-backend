import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserNotificationSettingsCreateInput } from './user-notification-settings-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneUserNotificationSettingsArgs {

    @Field(() => UserNotificationSettingsCreateInput, {nullable:false})
    @Type(() => UserNotificationSettingsCreateInput)
    data!: UserNotificationSettingsCreateInput;
}
