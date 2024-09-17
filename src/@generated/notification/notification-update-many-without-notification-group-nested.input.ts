import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationCreateWithoutNotificationGroupInput } from './notification-create-without-notification-group.input';
import { Type } from 'class-transformer';
import { NotificationCreateOrConnectWithoutNotificationGroupInput } from './notification-create-or-connect-without-notification-group.input';
import { NotificationUpsertWithWhereUniqueWithoutNotificationGroupInput } from './notification-upsert-with-where-unique-without-notification-group.input';
import { NotificationCreateManyNotificationGroupInputEnvelope } from './notification-create-many-notification-group-input-envelope.input';
import { Prisma } from '@prisma/client';
import { NotificationWhereUniqueInput } from './notification-where-unique.input';
import { NotificationUpdateWithWhereUniqueWithoutNotificationGroupInput } from './notification-update-with-where-unique-without-notification-group.input';
import { NotificationUpdateManyWithWhereWithoutNotificationGroupInput } from './notification-update-many-with-where-without-notification-group.input';
import { NotificationScalarWhereInput } from './notification-scalar-where.input';

@InputType()
export class NotificationUpdateManyWithoutNotificationGroupNestedInput {

    @Field(() => [NotificationCreateWithoutNotificationGroupInput], {nullable:true})
    @Type(() => NotificationCreateWithoutNotificationGroupInput)
    create?: Array<NotificationCreateWithoutNotificationGroupInput>;

    @Field(() => [NotificationCreateOrConnectWithoutNotificationGroupInput], {nullable:true})
    @Type(() => NotificationCreateOrConnectWithoutNotificationGroupInput)
    connectOrCreate?: Array<NotificationCreateOrConnectWithoutNotificationGroupInput>;

    @Field(() => [NotificationUpsertWithWhereUniqueWithoutNotificationGroupInput], {nullable:true})
    @Type(() => NotificationUpsertWithWhereUniqueWithoutNotificationGroupInput)
    upsert?: Array<NotificationUpsertWithWhereUniqueWithoutNotificationGroupInput>;

    @Field(() => NotificationCreateManyNotificationGroupInputEnvelope, {nullable:true})
    @Type(() => NotificationCreateManyNotificationGroupInputEnvelope)
    createMany?: NotificationCreateManyNotificationGroupInputEnvelope;

    @Field(() => [NotificationWhereUniqueInput], {nullable:true})
    @Type(() => NotificationWhereUniqueInput)
    set?: Array<Prisma.AtLeast<NotificationWhereUniqueInput, 'id'>>;

    @Field(() => [NotificationWhereUniqueInput], {nullable:true})
    @Type(() => NotificationWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<NotificationWhereUniqueInput, 'id'>>;

    @Field(() => [NotificationWhereUniqueInput], {nullable:true})
    @Type(() => NotificationWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<NotificationWhereUniqueInput, 'id'>>;

    @Field(() => [NotificationWhereUniqueInput], {nullable:true})
    @Type(() => NotificationWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<NotificationWhereUniqueInput, 'id'>>;

    @Field(() => [NotificationUpdateWithWhereUniqueWithoutNotificationGroupInput], {nullable:true})
    @Type(() => NotificationUpdateWithWhereUniqueWithoutNotificationGroupInput)
    update?: Array<NotificationUpdateWithWhereUniqueWithoutNotificationGroupInput>;

    @Field(() => [NotificationUpdateManyWithWhereWithoutNotificationGroupInput], {nullable:true})
    @Type(() => NotificationUpdateManyWithWhereWithoutNotificationGroupInput)
    updateMany?: Array<NotificationUpdateManyWithWhereWithoutNotificationGroupInput>;

    @Field(() => [NotificationScalarWhereInput], {nullable:true})
    @Type(() => NotificationScalarWhereInput)
    deleteMany?: Array<NotificationScalarWhereInput>;
}
