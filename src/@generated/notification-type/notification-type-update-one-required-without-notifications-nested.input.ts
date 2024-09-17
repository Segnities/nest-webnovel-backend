import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationTypeCreateWithoutNotificationsInput } from './notification-type-create-without-notifications.input';
import { Type } from 'class-transformer';
import { NotificationTypeCreateOrConnectWithoutNotificationsInput } from './notification-type-create-or-connect-without-notifications.input';
import { NotificationTypeUpsertWithoutNotificationsInput } from './notification-type-upsert-without-notifications.input';
import { Prisma } from '@prisma/client';
import { NotificationTypeWhereUniqueInput } from './notification-type-where-unique.input';
import { NotificationTypeUpdateToOneWithWhereWithoutNotificationsInput } from './notification-type-update-to-one-with-where-without-notifications.input';

@InputType()
export class NotificationTypeUpdateOneRequiredWithoutNotificationsNestedInput {

    @Field(() => NotificationTypeCreateWithoutNotificationsInput, {nullable:true})
    @Type(() => NotificationTypeCreateWithoutNotificationsInput)
    create?: NotificationTypeCreateWithoutNotificationsInput;

    @Field(() => NotificationTypeCreateOrConnectWithoutNotificationsInput, {nullable:true})
    @Type(() => NotificationTypeCreateOrConnectWithoutNotificationsInput)
    connectOrCreate?: NotificationTypeCreateOrConnectWithoutNotificationsInput;

    @Field(() => NotificationTypeUpsertWithoutNotificationsInput, {nullable:true})
    @Type(() => NotificationTypeUpsertWithoutNotificationsInput)
    upsert?: NotificationTypeUpsertWithoutNotificationsInput;

    @Field(() => NotificationTypeWhereUniqueInput, {nullable:true})
    @Type(() => NotificationTypeWhereUniqueInput)
    connect?: Prisma.AtLeast<NotificationTypeWhereUniqueInput, 'id' | 'name'>;

    @Field(() => NotificationTypeUpdateToOneWithWhereWithoutNotificationsInput, {nullable:true})
    @Type(() => NotificationTypeUpdateToOneWithWhereWithoutNotificationsInput)
    update?: NotificationTypeUpdateToOneWithWhereWithoutNotificationsInput;
}
