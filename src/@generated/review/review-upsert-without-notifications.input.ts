import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewUpdateWithoutNotificationsInput } from './review-update-without-notifications.input';
import { Type } from 'class-transformer';
import { ReviewCreateWithoutNotificationsInput } from './review-create-without-notifications.input';
import { ReviewWhereInput } from './review-where.input';

@InputType()
export class ReviewUpsertWithoutNotificationsInput {

    @Field(() => ReviewUpdateWithoutNotificationsInput, {nullable:false})
    @Type(() => ReviewUpdateWithoutNotificationsInput)
    update!: ReviewUpdateWithoutNotificationsInput;

    @Field(() => ReviewCreateWithoutNotificationsInput, {nullable:false})
    @Type(() => ReviewCreateWithoutNotificationsInput)
    create!: ReviewCreateWithoutNotificationsInput;

    @Field(() => ReviewWhereInput, {nullable:true})
    @Type(() => ReviewWhereInput)
    where?: ReviewWhereInput;
}
