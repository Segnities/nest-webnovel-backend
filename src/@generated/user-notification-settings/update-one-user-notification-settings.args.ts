import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserNotificationSettingsUpdateInput } from './user-notification-settings-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { UserNotificationSettingsWhereUniqueInput } from './user-notification-settings-where-unique.input';

@ArgsType()
export class UpdateOneUserNotificationSettingsArgs {

    @Field(() => UserNotificationSettingsUpdateInput, {nullable:false})
    @Type(() => UserNotificationSettingsUpdateInput)
    data!: UserNotificationSettingsUpdateInput;

    @Field(() => UserNotificationSettingsWhereUniqueInput, {nullable:false})
    @Type(() => UserNotificationSettingsWhereUniqueInput)
    where!: Prisma.AtLeast<UserNotificationSettingsWhereUniqueInput, 'id'>;
}
