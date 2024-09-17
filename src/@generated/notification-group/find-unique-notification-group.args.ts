import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NotificationGroupWhereUniqueInput } from './notification-group-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueNotificationGroupArgs {

    @Field(() => NotificationGroupWhereUniqueInput, {nullable:false})
    @Type(() => NotificationGroupWhereUniqueInput)
    where!: Prisma.AtLeast<NotificationGroupWhereUniqueInput, 'id'>;
}
