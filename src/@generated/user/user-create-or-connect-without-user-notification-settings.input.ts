import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutUserNotificationSettingsInput } from './user-create-without-user-notification-settings.input';

@InputType()
export class UserCreateOrConnectWithoutUserNotificationSettingsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;

    @Field(() => UserCreateWithoutUserNotificationSettingsInput, {nullable:false})
    @Type(() => UserCreateWithoutUserNotificationSettingsInput)
    create!: UserCreateWithoutUserNotificationSettingsInput;
}
