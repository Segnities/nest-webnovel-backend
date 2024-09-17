import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';

@InputType()
export class UserNotificationSettingsOrderByWithRelationInput {

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

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: UserOrderByWithRelationInput;
}
