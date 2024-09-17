import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NotificationGroupUpdateInput } from './notification-group-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { NotificationGroupWhereUniqueInput } from './notification-group-where-unique.input';

@ArgsType()
export class UpdateOneNotificationGroupArgs {

    @Field(() => NotificationGroupUpdateInput, {nullable:false})
    @Type(() => NotificationGroupUpdateInput)
    data!: NotificationGroupUpdateInput;

    @Field(() => NotificationGroupWhereUniqueInput, {nullable:false})
    @Type(() => NotificationGroupWhereUniqueInput)
    where!: Prisma.AtLeast<NotificationGroupWhereUniqueInput, 'id'>;
}
