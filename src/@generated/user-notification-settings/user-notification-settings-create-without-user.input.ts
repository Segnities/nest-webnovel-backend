import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UserNotificationSettingsCreateWithoutUserInput {

    @Field(() => Boolean, {nullable:true})
    receiveSystemNotifications?: boolean;

    @Field(() => Boolean, {nullable:true})
    receiveCommentNotifications?: boolean;

    @Field(() => Boolean, {nullable:true})
    receiveNovelUpdates?: boolean;

    @Field(() => Boolean, {nullable:true})
    receiveReviewNotifications?: boolean;

    @Field(() => Boolean, {nullable:true})
    receiveAuthorUpdates?: boolean;
}
