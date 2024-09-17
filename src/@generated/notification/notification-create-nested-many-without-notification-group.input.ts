import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationCreateWithoutNotificationGroupInput } from './notification-create-without-notification-group.input';
import { Type } from 'class-transformer';
import { NotificationCreateOrConnectWithoutNotificationGroupInput } from './notification-create-or-connect-without-notification-group.input';
import { NotificationCreateManyNotificationGroupInputEnvelope } from './notification-create-many-notification-group-input-envelope.input';
import { Prisma } from '@prisma/client';
import { NotificationWhereUniqueInput } from './notification-where-unique.input';

@InputType()
export class NotificationCreateNestedManyWithoutNotificationGroupInput {

    @Field(() => [NotificationCreateWithoutNotificationGroupInput], {nullable:true})
    @Type(() => NotificationCreateWithoutNotificationGroupInput)
    create?: Array<NotificationCreateWithoutNotificationGroupInput>;

    @Field(() => [NotificationCreateOrConnectWithoutNotificationGroupInput], {nullable:true})
    @Type(() => NotificationCreateOrConnectWithoutNotificationGroupInput)
    connectOrCreate?: Array<NotificationCreateOrConnectWithoutNotificationGroupInput>;

    @Field(() => NotificationCreateManyNotificationGroupInputEnvelope, {nullable:true})
    @Type(() => NotificationCreateManyNotificationGroupInputEnvelope)
    createMany?: NotificationCreateManyNotificationGroupInputEnvelope;

    @Field(() => [NotificationWhereUniqueInput], {nullable:true})
    @Type(() => NotificationWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<NotificationWhereUniqueInput, 'id'>>;
}
