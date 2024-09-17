import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutUserNotificationSettingsInput } from './user-create-without-user-notification-settings.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutUserNotificationSettingsInput } from './user-create-or-connect-without-user-notification-settings.input';
import { UserUpsertWithoutUserNotificationSettingsInput } from './user-upsert-without-user-notification-settings.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutUserNotificationSettingsInput } from './user-update-to-one-with-where-without-user-notification-settings.input';

@InputType()
export class UserUpdateOneRequiredWithoutUserNotificationSettingsNestedInput {

    @Field(() => UserCreateWithoutUserNotificationSettingsInput, {nullable:true})
    @Type(() => UserCreateWithoutUserNotificationSettingsInput)
    create?: UserCreateWithoutUserNotificationSettingsInput;

    @Field(() => UserCreateOrConnectWithoutUserNotificationSettingsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutUserNotificationSettingsInput)
    connectOrCreate?: UserCreateOrConnectWithoutUserNotificationSettingsInput;

    @Field(() => UserUpsertWithoutUserNotificationSettingsInput, {nullable:true})
    @Type(() => UserUpsertWithoutUserNotificationSettingsInput)
    upsert?: UserUpsertWithoutUserNotificationSettingsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutUserNotificationSettingsInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutUserNotificationSettingsInput)
    update?: UserUpdateToOneWithWhereWithoutUserNotificationSettingsInput;
}
