import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NotificationWhereUniqueInput } from './notification-where-unique.input';
import { Type } from 'class-transformer';
import { NotificationUpdateWithoutTypeInput } from './notification-update-without-type.input';

@InputType()
export class NotificationUpdateWithWhereUniqueWithoutTypeInput {

    @Field(() => NotificationWhereUniqueInput, {nullable:false})
    @Type(() => NotificationWhereUniqueInput)
    where!: Prisma.AtLeast<NotificationWhereUniqueInput, 'id'>;

    @Field(() => NotificationUpdateWithoutTypeInput, {nullable:false})
    @Type(() => NotificationUpdateWithoutTypeInput)
    data!: NotificationUpdateWithoutTypeInput;
}
