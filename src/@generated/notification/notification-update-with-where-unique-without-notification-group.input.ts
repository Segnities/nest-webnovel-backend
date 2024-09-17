import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NotificationWhereUniqueInput } from './notification-where-unique.input';
import { Type } from 'class-transformer';
import { NotificationUpdateWithoutNotificationGroupInput } from './notification-update-without-notification-group.input';

@InputType()
export class NotificationUpdateWithWhereUniqueWithoutNotificationGroupInput {

    @Field(() => NotificationWhereUniqueInput, {nullable:false})
    @Type(() => NotificationWhereUniqueInput)
    where!: Prisma.AtLeast<NotificationWhereUniqueInput, 'id'>;

    @Field(() => NotificationUpdateWithoutNotificationGroupInput, {nullable:false})
    @Type(() => NotificationUpdateWithoutNotificationGroupInput)
    data!: NotificationUpdateWithoutNotificationGroupInput;
}
