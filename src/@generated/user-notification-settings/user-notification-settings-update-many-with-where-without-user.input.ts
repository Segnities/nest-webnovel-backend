import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserNotificationSettingsScalarWhereInput } from './user-notification-settings-scalar-where.input';
import { Type } from 'class-transformer';
import { UserNotificationSettingsUpdateManyMutationInput } from './user-notification-settings-update-many-mutation.input';

@InputType()
export class UserNotificationSettingsUpdateManyWithWhereWithoutUserInput {

    @Field(() => UserNotificationSettingsScalarWhereInput, {nullable:false})
    @Type(() => UserNotificationSettingsScalarWhereInput)
    where!: UserNotificationSettingsScalarWhereInput;

    @Field(() => UserNotificationSettingsUpdateManyMutationInput, {nullable:false})
    @Type(() => UserNotificationSettingsUpdateManyMutationInput)
    data!: UserNotificationSettingsUpdateManyMutationInput;
}
