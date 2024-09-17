import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NotificationWhereUniqueInput } from './notification-where-unique.input';
import { Type } from 'class-transformer';
import { NotificationUpdateWithoutTypeInput } from './notification-update-without-type.input';
import { NotificationCreateWithoutTypeInput } from './notification-create-without-type.input';

@InputType()
export class NotificationUpsertWithWhereUniqueWithoutTypeInput {

    @Field(() => NotificationWhereUniqueInput, {nullable:false})
    @Type(() => NotificationWhereUniqueInput)
    where!: Prisma.AtLeast<NotificationWhereUniqueInput, 'id'>;

    @Field(() => NotificationUpdateWithoutTypeInput, {nullable:false})
    @Type(() => NotificationUpdateWithoutTypeInput)
    update!: NotificationUpdateWithoutTypeInput;

    @Field(() => NotificationCreateWithoutTypeInput, {nullable:false})
    @Type(() => NotificationCreateWithoutTypeInput)
    create!: NotificationCreateWithoutTypeInput;
}
