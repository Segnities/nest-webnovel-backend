import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserNotificationSettingsWhereUniqueInput } from './user-notification-settings-where-unique.input';
import { Type } from 'class-transformer';
import { UserNotificationSettingsCreateInput } from './user-notification-settings-create.input';
import { UserNotificationSettingsUpdateInput } from './user-notification-settings-update.input';

@ArgsType()
export class UpsertOneUserNotificationSettingsArgs {

    @Field(() => UserNotificationSettingsWhereUniqueInput, {nullable:false})
    @Type(() => UserNotificationSettingsWhereUniqueInput)
    where!: Prisma.AtLeast<UserNotificationSettingsWhereUniqueInput, 'id'>;

    @Field(() => UserNotificationSettingsCreateInput, {nullable:false})
    @Type(() => UserNotificationSettingsCreateInput)
    create!: UserNotificationSettingsCreateInput;

    @Field(() => UserNotificationSettingsUpdateInput, {nullable:false})
    @Type(() => UserNotificationSettingsUpdateInput)
    update!: UserNotificationSettingsUpdateInput;
}
