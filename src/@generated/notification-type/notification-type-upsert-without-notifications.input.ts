import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationTypeUpdateWithoutNotificationsInput } from './notification-type-update-without-notifications.input';
import { Type } from 'class-transformer';
import { NotificationTypeCreateWithoutNotificationsInput } from './notification-type-create-without-notifications.input';
import { NotificationTypeWhereInput } from './notification-type-where.input';

@InputType()
export class NotificationTypeUpsertWithoutNotificationsInput {

    @Field(() => NotificationTypeUpdateWithoutNotificationsInput, {nullable:false})
    @Type(() => NotificationTypeUpdateWithoutNotificationsInput)
    update!: NotificationTypeUpdateWithoutNotificationsInput;

    @Field(() => NotificationTypeCreateWithoutNotificationsInput, {nullable:false})
    @Type(() => NotificationTypeCreateWithoutNotificationsInput)
    create!: NotificationTypeCreateWithoutNotificationsInput;

    @Field(() => NotificationTypeWhereInput, {nullable:true})
    @Type(() => NotificationTypeWhereInput)
    where?: NotificationTypeWhereInput;
}
