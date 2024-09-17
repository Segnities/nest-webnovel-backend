import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NotificationWhereUniqueInput } from './notification-where-unique.input';
import { Type } from 'class-transformer';
import { NotificationUpdateWithoutAuthorInput } from './notification-update-without-author.input';
import { NotificationCreateWithoutAuthorInput } from './notification-create-without-author.input';

@InputType()
export class NotificationUpsertWithWhereUniqueWithoutAuthorInput {

    @Field(() => NotificationWhereUniqueInput, {nullable:false})
    @Type(() => NotificationWhereUniqueInput)
    where!: Prisma.AtLeast<NotificationWhereUniqueInput, 'id'>;

    @Field(() => NotificationUpdateWithoutAuthorInput, {nullable:false})
    @Type(() => NotificationUpdateWithoutAuthorInput)
    update!: NotificationUpdateWithoutAuthorInput;

    @Field(() => NotificationCreateWithoutAuthorInput, {nullable:false})
    @Type(() => NotificationCreateWithoutAuthorInput)
    create!: NotificationCreateWithoutAuthorInput;
}
