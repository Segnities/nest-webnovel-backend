import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';

@InputType()
export class UserNotificationSettingsScalarWhereWithAggregatesInput {

    @Field(() => [UserNotificationSettingsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<UserNotificationSettingsScalarWhereWithAggregatesInput>;

    @Field(() => [UserNotificationSettingsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<UserNotificationSettingsScalarWhereWithAggregatesInput>;

    @Field(() => [UserNotificationSettingsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<UserNotificationSettingsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    receiveSystemNotifications?: BoolWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    receiveCommentNotifications?: BoolWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    receiveNovelUpdates?: BoolWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    receiveReviewNotifications?: BoolWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    receiveAuthorUpdates?: BoolWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    userId?: IntWithAggregatesFilter;
}
