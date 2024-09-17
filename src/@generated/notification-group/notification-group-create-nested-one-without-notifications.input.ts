import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationGroupCreateWithoutNotificationsInput } from './notification-group-create-without-notifications.input';
import { Type } from 'class-transformer';
import { NotificationGroupCreateOrConnectWithoutNotificationsInput } from './notification-group-create-or-connect-without-notifications.input';
import { Prisma } from '@prisma/client';
import { NotificationGroupWhereUniqueInput } from './notification-group-where-unique.input';

@InputType()
export class NotificationGroupCreateNestedOneWithoutNotificationsInput {

    @Field(() => NotificationGroupCreateWithoutNotificationsInput, {nullable:true})
    @Type(() => NotificationGroupCreateWithoutNotificationsInput)
    create?: NotificationGroupCreateWithoutNotificationsInput;

    @Field(() => NotificationGroupCreateOrConnectWithoutNotificationsInput, {nullable:true})
    @Type(() => NotificationGroupCreateOrConnectWithoutNotificationsInput)
    connectOrCreate?: NotificationGroupCreateOrConnectWithoutNotificationsInput;

    @Field(() => NotificationGroupWhereUniqueInput, {nullable:true})
    @Type(() => NotificationGroupWhereUniqueInput)
    connect?: Prisma.AtLeast<NotificationGroupWhereUniqueInput, 'id'>;
}
