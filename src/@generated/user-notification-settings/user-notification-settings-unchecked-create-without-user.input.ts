import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class UserNotificationSettingsUncheckedCreateWithoutUserInput {

    @Field(() => Int, {nullable:true})
    id?: number;

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
