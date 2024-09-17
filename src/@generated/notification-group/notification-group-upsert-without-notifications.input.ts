import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationGroupUpdateWithoutNotificationsInput } from './notification-group-update-without-notifications.input';
import { Type } from 'class-transformer';
import { NotificationGroupCreateWithoutNotificationsInput } from './notification-group-create-without-notifications.input';
import { NotificationGroupWhereInput } from './notification-group-where.input';

@InputType()
export class NotificationGroupUpsertWithoutNotificationsInput {

    @Field(() => NotificationGroupUpdateWithoutNotificationsInput, {nullable:false})
    @Type(() => NotificationGroupUpdateWithoutNotificationsInput)
    update!: NotificationGroupUpdateWithoutNotificationsInput;

    @Field(() => NotificationGroupCreateWithoutNotificationsInput, {nullable:false})
    @Type(() => NotificationGroupCreateWithoutNotificationsInput)
    create!: NotificationGroupCreateWithoutNotificationsInput;

    @Field(() => NotificationGroupWhereInput, {nullable:true})
    @Type(() => NotificationGroupWhereInput)
    where?: NotificationGroupWhereInput;
}
