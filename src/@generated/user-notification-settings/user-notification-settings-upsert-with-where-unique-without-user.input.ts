import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserNotificationSettingsWhereUniqueInput } from './user-notification-settings-where-unique.input';
import { Type } from 'class-transformer';
import { UserNotificationSettingsUpdateWithoutUserInput } from './user-notification-settings-update-without-user.input';
import { UserNotificationSettingsCreateWithoutUserInput } from './user-notification-settings-create-without-user.input';

@InputType()
export class UserNotificationSettingsUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => UserNotificationSettingsWhereUniqueInput, {nullable:false})
    @Type(() => UserNotificationSettingsWhereUniqueInput)
    where!: Prisma.AtLeast<UserNotificationSettingsWhereUniqueInput, 'id'>;

    @Field(() => UserNotificationSettingsUpdateWithoutUserInput, {nullable:false})
    @Type(() => UserNotificationSettingsUpdateWithoutUserInput)
    update!: UserNotificationSettingsUpdateWithoutUserInput;

    @Field(() => UserNotificationSettingsCreateWithoutUserInput, {nullable:false})
    @Type(() => UserNotificationSettingsCreateWithoutUserInput)
    create!: UserNotificationSettingsCreateWithoutUserInput;
}
