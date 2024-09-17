import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationGroupCreateWithoutChildGroupsInput } from './notification-group-create-without-child-groups.input';
import { Type } from 'class-transformer';
import { NotificationGroupCreateOrConnectWithoutChildGroupsInput } from './notification-group-create-or-connect-without-child-groups.input';
import { Prisma } from '@prisma/client';
import { NotificationGroupWhereUniqueInput } from './notification-group-where-unique.input';

@InputType()
export class NotificationGroupCreateNestedOneWithoutChildGroupsInput {

    @Field(() => NotificationGroupCreateWithoutChildGroupsInput, {nullable:true})
    @Type(() => NotificationGroupCreateWithoutChildGroupsInput)
    create?: NotificationGroupCreateWithoutChildGroupsInput;

    @Field(() => NotificationGroupCreateOrConnectWithoutChildGroupsInput, {nullable:true})
    @Type(() => NotificationGroupCreateOrConnectWithoutChildGroupsInput)
    connectOrCreate?: NotificationGroupCreateOrConnectWithoutChildGroupsInput;

    @Field(() => NotificationGroupWhereUniqueInput, {nullable:true})
    @Type(() => NotificationGroupWhereUniqueInput)
    connect?: Prisma.AtLeast<NotificationGroupWhereUniqueInput, 'id'>;
}
