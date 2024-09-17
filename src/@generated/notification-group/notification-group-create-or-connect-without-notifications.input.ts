import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NotificationGroupWhereUniqueInput } from './notification-group-where-unique.input';
import { Type } from 'class-transformer';
import { NotificationGroupCreateWithoutNotificationsInput } from './notification-group-create-without-notifications.input';

@InputType()
export class NotificationGroupCreateOrConnectWithoutNotificationsInput {

    @Field(() => NotificationGroupWhereUniqueInput, {nullable:false})
    @Type(() => NotificationGroupWhereUniqueInput)
    where!: Prisma.AtLeast<NotificationGroupWhereUniqueInput, 'id'>;

    @Field(() => NotificationGroupCreateWithoutNotificationsInput, {nullable:false})
    @Type(() => NotificationGroupCreateWithoutNotificationsInput)
    create!: NotificationGroupCreateWithoutNotificationsInput;
}
