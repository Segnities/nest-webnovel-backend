import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NotificationGroupWhereUniqueInput } from './notification-group-where-unique.input';
import { Type } from 'class-transformer';
import { NotificationGroupCreateWithoutParentGroupInput } from './notification-group-create-without-parent-group.input';

@InputType()
export class NotificationGroupCreateOrConnectWithoutParentGroupInput {

    @Field(() => NotificationGroupWhereUniqueInput, {nullable:false})
    @Type(() => NotificationGroupWhereUniqueInput)
    where!: Prisma.AtLeast<NotificationGroupWhereUniqueInput, 'id'>;

    @Field(() => NotificationGroupCreateWithoutParentGroupInput, {nullable:false})
    @Type(() => NotificationGroupCreateWithoutParentGroupInput)
    create!: NotificationGroupCreateWithoutParentGroupInput;
}
