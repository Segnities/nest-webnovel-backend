import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationCreateManyReviewInput } from './notification-create-many-review.input';
import { Type } from 'class-transformer';

@InputType()
export class NotificationCreateManyReviewInputEnvelope {

    @Field(() => [NotificationCreateManyReviewInput], {nullable:false})
    @Type(() => NotificationCreateManyReviewInput)
    data!: Array<NotificationCreateManyReviewInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
