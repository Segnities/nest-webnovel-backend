import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserNotificationSettingsCountOrderByAggregateInput } from './user-notification-settings-count-order-by-aggregate.input';
import { UserNotificationSettingsAvgOrderByAggregateInput } from './user-notification-settings-avg-order-by-aggregate.input';
import { UserNotificationSettingsMaxOrderByAggregateInput } from './user-notification-settings-max-order-by-aggregate.input';
import { UserNotificationSettingsMinOrderByAggregateInput } from './user-notification-settings-min-order-by-aggregate.input';
import { UserNotificationSettingsSumOrderByAggregateInput } from './user-notification-settings-sum-order-by-aggregate.input';

@InputType()
export class UserNotificationSettingsOrderByWithAggregationInput {

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

    @Field(() => UserNotificationSettingsCountOrderByAggregateInput, {nullable:true})
    _count?: UserNotificationSettingsCountOrderByAggregateInput;

    @Field(() => UserNotificationSettingsAvgOrderByAggregateInput, {nullable:true})
    _avg?: UserNotificationSettingsAvgOrderByAggregateInput;

    @Field(() => UserNotificationSettingsMaxOrderByAggregateInput, {nullable:true})
    _max?: UserNotificationSettingsMaxOrderByAggregateInput;

    @Field(() => UserNotificationSettingsMinOrderByAggregateInput, {nullable:true})
    _min?: UserNotificationSettingsMinOrderByAggregateInput;

    @Field(() => UserNotificationSettingsSumOrderByAggregateInput, {nullable:true})
    _sum?: UserNotificationSettingsSumOrderByAggregateInput;
}
