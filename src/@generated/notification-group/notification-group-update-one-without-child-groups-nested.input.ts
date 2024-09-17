import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationGroupCreateWithoutChildGroupsInput } from './notification-group-create-without-child-groups.input';
import { Type } from 'class-transformer';
import { NotificationGroupCreateOrConnectWithoutChildGroupsInput } from './notification-group-create-or-connect-without-child-groups.input';
import { NotificationGroupUpsertWithoutChildGroupsInput } from './notification-group-upsert-without-child-groups.input';
import { NotificationGroupWhereInput } from './notification-group-where.input';
import { Prisma } from '@prisma/client';
import { NotificationGroupWhereUniqueInput } from './notification-group-where-unique.input';
import { NotificationGroupUpdateToOneWithWhereWithoutChildGroupsInput } from './notification-group-update-to-one-with-where-without-child-groups.input';

@InputType()
export class NotificationGroupUpdateOneWithoutChildGroupsNestedInput {

    @Field(() => NotificationGroupCreateWithoutChildGroupsInput, {nullable:true})
    @Type(() => NotificationGroupCreateWithoutChildGroupsInput)
    create?: NotificationGroupCreateWithoutChildGroupsInput;

    @Field(() => NotificationGroupCreateOrConnectWithoutChildGroupsInput, {nullable:true})
    @Type(() => NotificationGroupCreateOrConnectWithoutChildGroupsInput)
    connectOrCreate?: NotificationGroupCreateOrConnectWithoutChildGroupsInput;

    @Field(() => NotificationGroupUpsertWithoutChildGroupsInput, {nullable:true})
    @Type(() => NotificationGroupUpsertWithoutChildGroupsInput)
    upsert?: NotificationGroupUpsertWithoutChildGroupsInput;

    @Field(() => NotificationGroupWhereInput, {nullable:true})
    @Type(() => NotificationGroupWhereInput)
    disconnect?: NotificationGroupWhereInput;

    @Field(() => NotificationGroupWhereInput, {nullable:true})
    @Type(() => NotificationGroupWhereInput)
    delete?: NotificationGroupWhereInput;

    @Field(() => NotificationGroupWhereUniqueInput, {nullable:true})
    @Type(() => NotificationGroupWhereUniqueInput)
    connect?: Prisma.AtLeast<NotificationGroupWhereUniqueInput, 'id'>;

    @Field(() => NotificationGroupUpdateToOneWithWhereWithoutChildGroupsInput, {nullable:true})
    @Type(() => NotificationGroupUpdateToOneWithWhereWithoutChildGroupsInput)
    update?: NotificationGroupUpdateToOneWithWhereWithoutChildGroupsInput;
}
