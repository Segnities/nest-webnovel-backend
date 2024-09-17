import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutUserNotificationSettingsInput } from './user-create-without-user-notification-settings.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutUserNotificationSettingsInput } from './user-create-or-connect-without-user-notification-settings.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutUserNotificationSettingsInput {

    @Field(() => UserCreateWithoutUserNotificationSettingsInput, {nullable:true})
    @Type(() => UserCreateWithoutUserNotificationSettingsInput)
    create?: UserCreateWithoutUserNotificationSettingsInput;

    @Field(() => UserCreateOrConnectWithoutUserNotificationSettingsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutUserNotificationSettingsInput)
    connectOrCreate?: UserCreateOrConnectWithoutUserNotificationSettingsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;
}
