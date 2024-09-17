import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutUserNotificationSettingsInput } from './user-update-without-user-notification-settings.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutUserNotificationSettingsInput } from './user-create-without-user-notification-settings.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutUserNotificationSettingsInput {

    @Field(() => UserUpdateWithoutUserNotificationSettingsInput, {nullable:false})
    @Type(() => UserUpdateWithoutUserNotificationSettingsInput)
    update!: UserUpdateWithoutUserNotificationSettingsInput;

    @Field(() => UserCreateWithoutUserNotificationSettingsInput, {nullable:false})
    @Type(() => UserCreateWithoutUserNotificationSettingsInput)
    create!: UserCreateWithoutUserNotificationSettingsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
