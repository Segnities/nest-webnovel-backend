import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NotificationGroupWhereUniqueInput } from './notification-group-where-unique.input';
import { Type } from 'class-transformer';
import { NotificationGroupCreateWithoutChildGroupsInput } from './notification-group-create-without-child-groups.input';

@InputType()
export class NotificationGroupCreateOrConnectWithoutChildGroupsInput {

    @Field(() => NotificationGroupWhereUniqueInput, {nullable:false})
    @Type(() => NotificationGroupWhereUniqueInput)
    where!: Prisma.AtLeast<NotificationGroupWhereUniqueInput, 'id'>;

    @Field(() => NotificationGroupCreateWithoutChildGroupsInput, {nullable:false})
    @Type(() => NotificationGroupCreateWithoutChildGroupsInput)
    create!: NotificationGroupCreateWithoutChildGroupsInput;
}
