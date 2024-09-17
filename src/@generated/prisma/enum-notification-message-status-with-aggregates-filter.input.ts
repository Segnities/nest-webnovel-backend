import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationMessageStatus } from './notification-message-status.enum';
import { NestedEnumNotificationMessageStatusWithAggregatesFilter } from './nested-enum-notification-message-status-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumNotificationMessageStatusFilter } from './nested-enum-notification-message-status-filter.input';

@InputType()
export class EnumNotificationMessageStatusWithAggregatesFilter {

    @Field(() => NotificationMessageStatus, {nullable:true})
    equals?: keyof typeof NotificationMessageStatus;

    @Field(() => [NotificationMessageStatus], {nullable:true})
    in?: Array<keyof typeof NotificationMessageStatus>;

    @Field(() => [NotificationMessageStatus], {nullable:true})
    notIn?: Array<keyof typeof NotificationMessageStatus>;

    @Field(() => NestedEnumNotificationMessageStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumNotificationMessageStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumNotificationMessageStatusFilter, {nullable:true})
    _min?: NestedEnumNotificationMessageStatusFilter;

    @Field(() => NestedEnumNotificationMessageStatusFilter, {nullable:true})
    _max?: NestedEnumNotificationMessageStatusFilter;
}
