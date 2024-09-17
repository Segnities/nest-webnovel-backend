import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutUserNotificationSettingsInput } from './user-update-without-user-notification-settings.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutUserNotificationSettingsInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutUserNotificationSettingsInput, {nullable:false})
    @Type(() => UserUpdateWithoutUserNotificationSettingsInput)
    data!: UserUpdateWithoutUserNotificationSettingsInput;
}
