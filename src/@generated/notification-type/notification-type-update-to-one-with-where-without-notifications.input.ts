import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationTypeWhereInput } from './notification-type-where.input';
import { Type } from 'class-transformer';
import { NotificationTypeUpdateWithoutNotificationsInput } from './notification-type-update-without-notifications.input';

@InputType()
export class NotificationTypeUpdateToOneWithWhereWithoutNotificationsInput {

    @Field(() => NotificationTypeWhereInput, {nullable:true})
    @Type(() => NotificationTypeWhereInput)
    where?: NotificationTypeWhereInput;

    @Field(() => NotificationTypeUpdateWithoutNotificationsInput, {nullable:false})
    @Type(() => NotificationTypeUpdateWithoutNotificationsInput)
    data!: NotificationTypeUpdateWithoutNotificationsInput;
}
