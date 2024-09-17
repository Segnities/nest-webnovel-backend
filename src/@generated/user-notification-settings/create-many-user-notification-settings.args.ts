import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserNotificationSettingsCreateManyInput } from './user-notification-settings-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyUserNotificationSettingsArgs {

    @Field(() => [UserNotificationSettingsCreateManyInput], {nullable:false})
    @Type(() => UserNotificationSettingsCreateManyInput)
    data!: Array<UserNotificationSettingsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
