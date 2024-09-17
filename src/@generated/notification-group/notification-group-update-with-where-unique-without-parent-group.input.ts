import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NotificationGroupWhereUniqueInput } from './notification-group-where-unique.input';
import { Type } from 'class-transformer';
import { NotificationGroupUpdateWithoutParentGroupInput } from './notification-group-update-without-parent-group.input';

@InputType()
export class NotificationGroupUpdateWithWhereUniqueWithoutParentGroupInput {

    @Field(() => NotificationGroupWhereUniqueInput, {nullable:false})
    @Type(() => NotificationGroupWhereUniqueInput)
    where!: Prisma.AtLeast<NotificationGroupWhereUniqueInput, 'id'>;

    @Field(() => NotificationGroupUpdateWithoutParentGroupInput, {nullable:false})
    @Type(() => NotificationGroupUpdateWithoutParentGroupInput)
    data!: NotificationGroupUpdateWithoutParentGroupInput;
}
