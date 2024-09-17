import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserNotificationSettingsWhereInput } from './user-notification-settings-where.input';
import { Type } from 'class-transformer';
import { UserNotificationSettingsOrderByWithRelationInput } from './user-notification-settings-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { UserNotificationSettingsWhereUniqueInput } from './user-notification-settings-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UserNotificationSettingsScalarFieldEnum } from './user-notification-settings-scalar-field.enum';

@ArgsType()
export class FindManyUserNotificationSettingsArgs {

    @Field(() => UserNotificationSettingsWhereInput, {nullable:true})
    @Type(() => UserNotificationSettingsWhereInput)
    where?: UserNotificationSettingsWhereInput;

    @Field(() => [UserNotificationSettingsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserNotificationSettingsOrderByWithRelationInput>;

    @Field(() => UserNotificationSettingsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<UserNotificationSettingsWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [UserNotificationSettingsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserNotificationSettingsScalarFieldEnum>;
}
