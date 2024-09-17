import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ReviewWhereUniqueInput } from './review-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewCreateWithoutNotificationsInput } from './review-create-without-notifications.input';

@InputType()
export class ReviewCreateOrConnectWithoutNotificationsInput {

    @Field(() => ReviewWhereUniqueInput, {nullable:false})
    @Type(() => ReviewWhereUniqueInput)
    where!: Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>;

    @Field(() => ReviewCreateWithoutNotificationsInput, {nullable:false})
    @Type(() => ReviewCreateWithoutNotificationsInput)
    create!: ReviewCreateWithoutNotificationsInput;
}
