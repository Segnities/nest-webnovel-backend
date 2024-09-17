import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NotificationWhereUniqueInput } from './notification-where-unique.input';
import { Type } from 'class-transformer';
import { NotificationUpdateWithoutAuthorInput } from './notification-update-without-author.input';

@InputType()
export class NotificationUpdateWithWhereUniqueWithoutAuthorInput {

    @Field(() => NotificationWhereUniqueInput, {nullable:false})
    @Type(() => NotificationWhereUniqueInput)
    where!: Prisma.AtLeast<NotificationWhereUniqueInput, 'id'>;

    @Field(() => NotificationUpdateWithoutAuthorInput, {nullable:false})
    @Type(() => NotificationUpdateWithoutAuthorInput)
    data!: NotificationUpdateWithoutAuthorInput;
}
