import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserNotificationSettingsUpdateManyMutationInput } from './user-notification-settings-update-many-mutation.input';
import { Type } from 'class-transformer';
import { UserNotificationSettingsWhereInput } from './user-notification-settings-where.input';

@ArgsType()
export class UpdateManyUserNotificationSettingsArgs {

    @Field(() => UserNotificationSettingsUpdateManyMutationInput, {nullable:false})
    @Type(() => UserNotificationSettingsUpdateManyMutationInput)
    data!: UserNotificationSettingsUpdateManyMutationInput;

    @Field(() => UserNotificationSettingsWhereInput, {nullable:true})
    @Type(() => UserNotificationSettingsWhereInput)
    where?: UserNotificationSettingsWhereInput;
}
