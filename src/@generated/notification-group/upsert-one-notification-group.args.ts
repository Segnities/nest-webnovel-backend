import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NotificationGroupWhereUniqueInput } from './notification-group-where-unique.input';
import { Type } from 'class-transformer';
import { NotificationGroupCreateInput } from './notification-group-create.input';
import { NotificationGroupUpdateInput } from './notification-group-update.input';

@ArgsType()
export class UpsertOneNotificationGroupArgs {

    @Field(() => NotificationGroupWhereUniqueInput, {nullable:false})
    @Type(() => NotificationGroupWhereUniqueInput)
    where!: Prisma.AtLeast<NotificationGroupWhereUniqueInput, 'id'>;

    @Field(() => NotificationGroupCreateInput, {nullable:false})
    @Type(() => NotificationGroupCreateInput)
    create!: NotificationGroupCreateInput;

    @Field(() => NotificationGroupUpdateInput, {nullable:false})
    @Type(() => NotificationGroupUpdateInput)
    update!: NotificationGroupUpdateInput;
}
