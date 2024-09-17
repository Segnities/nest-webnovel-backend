import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NotificationTypeWhereUniqueInput } from './notification-type-where-unique.input';
import { Type } from 'class-transformer';
import { NotificationTypeCreateWithoutNotificationsInput } from './notification-type-create-without-notifications.input';

@InputType()
export class NotificationTypeCreateOrConnectWithoutNotificationsInput {

    @Field(() => NotificationTypeWhereUniqueInput, {nullable:false})
    @Type(() => NotificationTypeWhereUniqueInput)
    where!: Prisma.AtLeast<NotificationTypeWhereUniqueInput, 'id' | 'name'>;

    @Field(() => NotificationTypeCreateWithoutNotificationsInput, {nullable:false})
    @Type(() => NotificationTypeCreateWithoutNotificationsInput)
    create!: NotificationTypeCreateWithoutNotificationsInput;
}
