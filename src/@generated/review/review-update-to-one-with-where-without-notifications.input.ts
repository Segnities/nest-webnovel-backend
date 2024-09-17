import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewWhereInput } from './review-where.input';
import { Type } from 'class-transformer';
import { ReviewUpdateWithoutNotificationsInput } from './review-update-without-notifications.input';

@InputType()
export class ReviewUpdateToOneWithWhereWithoutNotificationsInput {

    @Field(() => ReviewWhereInput, {nullable:true})
    @Type(() => ReviewWhereInput)
    where?: ReviewWhereInput;

    @Field(() => ReviewUpdateWithoutNotificationsInput, {nullable:false})
    @Type(() => ReviewUpdateWithoutNotificationsInput)
    data!: ReviewUpdateWithoutNotificationsInput;
}
