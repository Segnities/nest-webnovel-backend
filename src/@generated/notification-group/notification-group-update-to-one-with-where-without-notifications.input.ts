import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationGroupWhereInput } from './notification-group-where.input';
import { Type } from 'class-transformer';
import { NotificationGroupUpdateWithoutNotificationsInput } from './notification-group-update-without-notifications.input';

@InputType()
export class NotificationGroupUpdateToOneWithWhereWithoutNotificationsInput {

    @Field(() => NotificationGroupWhereInput, {nullable:true})
    @Type(() => NotificationGroupWhereInput)
    where?: NotificationGroupWhereInput;

    @Field(() => NotificationGroupUpdateWithoutNotificationsInput, {nullable:false})
    @Type(() => NotificationGroupUpdateWithoutNotificationsInput)
    data!: NotificationGroupUpdateWithoutNotificationsInput;
}
