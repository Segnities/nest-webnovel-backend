import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NotificationWhereUniqueInput } from './notification-where-unique.input';
import { Type } from 'class-transformer';
import { NotificationCreateWithoutNotificationGroupInput } from './notification-create-without-notification-group.input';

@InputType()
export class NotificationCreateOrConnectWithoutNotificationGroupInput {

    @Field(() => NotificationWhereUniqueInput, {nullable:false})
    @Type(() => NotificationWhereUniqueInput)
    where!: Prisma.AtLeast<NotificationWhereUniqueInput, 'id'>;

    @Field(() => NotificationCreateWithoutNotificationGroupInput, {nullable:false})
    @Type(() => NotificationCreateWithoutNotificationGroupInput)
    create!: NotificationCreateWithoutNotificationGroupInput;
}
