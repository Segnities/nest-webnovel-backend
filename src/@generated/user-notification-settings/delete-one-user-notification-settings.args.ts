import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserNotificationSettingsWhereUniqueInput } from './user-notification-settings-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneUserNotificationSettingsArgs {

    @Field(() => UserNotificationSettingsWhereUniqueInput, {nullable:false})
    @Type(() => UserNotificationSettingsWhereUniqueInput)
    where!: Prisma.AtLeast<UserNotificationSettingsWhereUniqueInput, 'id'>;
}
