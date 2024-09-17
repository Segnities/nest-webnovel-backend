import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserNotificationSettingsCreateManyUserInput } from './user-notification-settings-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class UserNotificationSettingsCreateManyUserInputEnvelope {

    @Field(() => [UserNotificationSettingsCreateManyUserInput], {nullable:false})
    @Type(() => UserNotificationSettingsCreateManyUserInput)
    data!: Array<UserNotificationSettingsCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
