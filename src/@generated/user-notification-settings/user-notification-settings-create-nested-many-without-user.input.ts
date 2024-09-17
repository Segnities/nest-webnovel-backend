import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserNotificationSettingsCreateWithoutUserInput } from './user-notification-settings-create-without-user.input';
import { Type } from 'class-transformer';
import { UserNotificationSettingsCreateOrConnectWithoutUserInput } from './user-notification-settings-create-or-connect-without-user.input';
import { UserNotificationSettingsCreateManyUserInputEnvelope } from './user-notification-settings-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { UserNotificationSettingsWhereUniqueInput } from './user-notification-settings-where-unique.input';

@InputType()
export class UserNotificationSettingsCreateNestedManyWithoutUserInput {

    @Field(() => [UserNotificationSettingsCreateWithoutUserInput], {nullable:true})
    @Type(() => UserNotificationSettingsCreateWithoutUserInput)
    create?: Array<UserNotificationSettingsCreateWithoutUserInput>;

    @Field(() => [UserNotificationSettingsCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => UserNotificationSettingsCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<UserNotificationSettingsCreateOrConnectWithoutUserInput>;

    @Field(() => UserNotificationSettingsCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => UserNotificationSettingsCreateManyUserInputEnvelope)
    createMany?: UserNotificationSettingsCreateManyUserInputEnvelope;

    @Field(() => [UserNotificationSettingsWhereUniqueInput], {nullable:true})
    @Type(() => UserNotificationSettingsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserNotificationSettingsWhereUniqueInput, 'id'>>;
}
