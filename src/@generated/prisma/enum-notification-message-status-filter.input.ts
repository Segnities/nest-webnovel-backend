import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationMessageStatus } from './notification-message-status.enum';
import { NestedEnumNotificationMessageStatusFilter } from './nested-enum-notification-message-status-filter.input';

@InputType()
export class EnumNotificationMessageStatusFilter {

    @Field(() => NotificationMessageStatus, {nullable:true})
    equals?: keyof typeof NotificationMessageStatus;

    @Field(() => [NotificationMessageStatus], {nullable:true})
    in?: Array<keyof typeof NotificationMessageStatus>;

    @Field(() => [NotificationMessageStatus], {nullable:true})
    notIn?: Array<keyof typeof NotificationMessageStatus>;

    @Field(() => NestedEnumNotificationMessageStatusFilter, {nullable:true})
    not?: NestedEnumNotificationMessageStatusFilter;
}
