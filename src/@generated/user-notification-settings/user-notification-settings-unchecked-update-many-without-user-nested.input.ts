import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserNotificationSettingsCreateWithoutUserInput } from './user-notification-settings-create-without-user.input';
import { Type } from 'class-transformer';
import { UserNotificationSettingsCreateOrConnectWithoutUserInput } from './user-notification-settings-create-or-connect-without-user.input';
import { UserNotificationSettingsUpsertWithWhereUniqueWithoutUserInput } from './user-notification-settings-upsert-with-where-unique-without-user.input';
import { UserNotificationSettingsCreateManyUserInputEnvelope } from './user-notification-settings-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { UserNotificationSettingsWhereUniqueInput } from './user-notification-settings-where-unique.input';
import { UserNotificationSettingsUpdateWithWhereUniqueWithoutUserInput } from './user-notification-settings-update-with-where-unique-without-user.input';
import { UserNotificationSettingsUpdateManyWithWhereWithoutUserInput } from './user-notification-settings-update-many-with-where-without-user.input';
import { UserNotificationSettingsScalarWhereInput } from './user-notification-settings-scalar-where.input';

@InputType()
export class UserNotificationSettingsUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [UserNotificationSettingsCreateWithoutUserInput], {nullable:true})
    @Type(() => UserNotificationSettingsCreateWithoutUserInput)
    create?: Array<UserNotificationSettingsCreateWithoutUserInput>;

    @Field(() => [UserNotificationSettingsCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => UserNotificationSettingsCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<UserNotificationSettingsCreateOrConnectWithoutUserInput>;

    @Field(() => [UserNotificationSettingsUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => UserNotificationSettingsUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<UserNotificationSettingsUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => UserNotificationSettingsCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => UserNotificationSettingsCreateManyUserInputEnvelope)
    createMany?: UserNotificationSettingsCreateManyUserInputEnvelope;

    @Field(() => [UserNotificationSettingsWhereUniqueInput], {nullable:true})
    @Type(() => UserNotificationSettingsWhereUniqueInput)
    set?: Array<Prisma.AtLeast<UserNotificationSettingsWhereUniqueInput, 'id'>>;

    @Field(() => [UserNotificationSettingsWhereUniqueInput], {nullable:true})
    @Type(() => UserNotificationSettingsWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<UserNotificationSettingsWhereUniqueInput, 'id'>>;

    @Field(() => [UserNotificationSettingsWhereUniqueInput], {nullable:true})
    @Type(() => UserNotificationSettingsWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<UserNotificationSettingsWhereUniqueInput, 'id'>>;

    @Field(() => [UserNotificationSettingsWhereUniqueInput], {nullable:true})
    @Type(() => UserNotificationSettingsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserNotificationSettingsWhereUniqueInput, 'id'>>;

    @Field(() => [UserNotificationSettingsUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => UserNotificationSettingsUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<UserNotificationSettingsUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [UserNotificationSettingsUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => UserNotificationSettingsUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<UserNotificationSettingsUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [UserNotificationSettingsScalarWhereInput], {nullable:true})
    @Type(() => UserNotificationSettingsScalarWhereInput)
    deleteMany?: Array<UserNotificationSettingsScalarWhereInput>;
}
