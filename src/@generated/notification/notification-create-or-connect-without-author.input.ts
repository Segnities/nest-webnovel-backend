import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NotificationWhereUniqueInput } from './notification-where-unique.input';
import { Type } from 'class-transformer';
import { NotificationCreateWithoutAuthorInput } from './notification-create-without-author.input';

@InputType()
export class NotificationCreateOrConnectWithoutAuthorInput {

    @Field(() => NotificationWhereUniqueInput, {nullable:false})
    @Type(() => NotificationWhereUniqueInput)
    where!: Prisma.AtLeast<NotificationWhereUniqueInput, 'id'>;

    @Field(() => NotificationCreateWithoutAuthorInput, {nullable:false})
    @Type(() => NotificationCreateWithoutAuthorInput)
    create!: NotificationCreateWithoutAuthorInput;
}
