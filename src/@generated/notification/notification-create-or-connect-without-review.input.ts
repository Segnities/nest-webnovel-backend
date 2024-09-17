import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NotificationWhereUniqueInput } from './notification-where-unique.input';
import { Type } from 'class-transformer';
import { NotificationCreateWithoutReviewInput } from './notification-create-without-review.input';

@InputType()
export class NotificationCreateOrConnectWithoutReviewInput {

    @Field(() => NotificationWhereUniqueInput, {nullable:false})
    @Type(() => NotificationWhereUniqueInput)
    where!: Prisma.AtLeast<NotificationWhereUniqueInput, 'id'>;

    @Field(() => NotificationCreateWithoutReviewInput, {nullable:false})
    @Type(() => NotificationCreateWithoutReviewInput)
    create!: NotificationCreateWithoutReviewInput;
}
