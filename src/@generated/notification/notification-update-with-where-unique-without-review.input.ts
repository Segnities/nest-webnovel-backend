import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NotificationWhereUniqueInput } from './notification-where-unique.input';
import { Type } from 'class-transformer';
import { NotificationUpdateWithoutReviewInput } from './notification-update-without-review.input';

@InputType()
export class NotificationUpdateWithWhereUniqueWithoutReviewInput {

    @Field(() => NotificationWhereUniqueInput, {nullable:false})
    @Type(() => NotificationWhereUniqueInput)
    where!: Prisma.AtLeast<NotificationWhereUniqueInput, 'id'>;

    @Field(() => NotificationUpdateWithoutReviewInput, {nullable:false})
    @Type(() => NotificationUpdateWithoutReviewInput)
    data!: NotificationUpdateWithoutReviewInput;
}
