import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NotificationWhereUniqueInput } from './notification-where-unique.input';
import { Type } from 'class-transformer';
import { NotificationCreateWithoutTypeInput } from './notification-create-without-type.input';

@InputType()
export class NotificationCreateOrConnectWithoutTypeInput {

    @Field(() => NotificationWhereUniqueInput, {nullable:false})
    @Type(() => NotificationWhereUniqueInput)
    where!: Prisma.AtLeast<NotificationWhereUniqueInput, 'id'>;

    @Field(() => NotificationCreateWithoutTypeInput, {nullable:false})
    @Type(() => NotificationCreateWithoutTypeInput)
    create!: NotificationCreateWithoutTypeInput;
}
