import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationGroupCreateWithoutNotificationsInput } from './notification-group-create-without-notifications.input';
import { Type } from 'class-transformer';
import { NotificationGroupCreateOrConnectWithoutNotificationsInput } from './notification-group-create-or-connect-without-notifications.input';
import { NotificationGroupUpsertWithoutNotificationsInput } from './notification-group-upsert-without-notifications.input';
import { NotificationGroupWhereInput } from './notification-group-where.input';
import { Prisma } from '@prisma/client';
import { NotificationGroupWhereUniqueInput } from './notification-group-where-unique.input';
import { NotificationGroupUpdateToOneWithWhereWithoutNotificationsInput } from './notification-group-update-to-one-with-where-without-notifications.input';

@InputType()
export class NotificationGroupUpdateOneWithoutNotificationsNestedInput {

    @Field(() => NotificationGroupCreateWithoutNotificationsInput, {nullable:true})
    @Type(() => NotificationGroupCreateWithoutNotificationsInput)
    create?: NotificationGroupCreateWithoutNotificationsInput;

    @Field(() => NotificationGroupCreateOrConnectWithoutNotificationsInput, {nullable:true})
    @Type(() => NotificationGroupCreateOrConnectWithoutNotificationsInput)
    connectOrCreate?: NotificationGroupCreateOrConnectWithoutNotificationsInput;

    @Field(() => NotificationGroupUpsertWithoutNotificationsInput, {nullable:true})
    @Type(() => NotificationGroupUpsertWithoutNotificationsInput)
    upsert?: NotificationGroupUpsertWithoutNotificationsInput;

    @Field(() => NotificationGroupWhereInput, {nullable:true})
    @Type(() => NotificationGroupWhereInput)
    disconnect?: NotificationGroupWhereInput;

    @Field(() => NotificationGroupWhereInput, {nullable:true})
    @Type(() => NotificationGroupWhereInput)
    delete?: NotificationGroupWhereInput;

    @Field(() => NotificationGroupWhereUniqueInput, {nullable:true})
    @Type(() => NotificationGroupWhereUniqueInput)
    connect?: Prisma.AtLeast<NotificationGroupWhereUniqueInput, 'id'>;

    @Field(() => NotificationGroupUpdateToOneWithWhereWithoutNotificationsInput, {nullable:true})
    @Type(() => NotificationGroupUpdateToOneWithWhereWithoutNotificationsInput)
    update?: NotificationGroupUpdateToOneWithWhereWithoutNotificationsInput;
}
