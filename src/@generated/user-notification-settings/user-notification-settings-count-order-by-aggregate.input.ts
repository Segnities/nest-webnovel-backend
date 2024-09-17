import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class UserNotificationSettingsCountOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    receiveSystemNotifications?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    receiveCommentNotifications?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    receiveNovelUpdates?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    receiveReviewNotifications?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    receiveAuthorUpdates?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
}
