import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UserNotificationSettingsMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    receiveSystemNotifications?: true;

    @Field(() => Boolean, {nullable:true})
    receiveCommentNotifications?: true;

    @Field(() => Boolean, {nullable:true})
    receiveNovelUpdates?: true;

    @Field(() => Boolean, {nullable:true})
    receiveReviewNotifications?: true;

    @Field(() => Boolean, {nullable:true})
    receiveAuthorUpdates?: true;

    @Field(() => Boolean, {nullable:true})
    userId?: true;
}
