import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';

@InputType()
export class UserNotificationSettingsScalarWhereInput {

    @Field(() => [UserNotificationSettingsScalarWhereInput], {nullable:true})
    AND?: Array<UserNotificationSettingsScalarWhereInput>;

    @Field(() => [UserNotificationSettingsScalarWhereInput], {nullable:true})
    OR?: Array<UserNotificationSettingsScalarWhereInput>;

    @Field(() => [UserNotificationSettingsScalarWhereInput], {nullable:true})
    NOT?: Array<UserNotificationSettingsScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => BoolFilter, {nullable:true})
    receiveSystemNotifications?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    receiveCommentNotifications?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    receiveNovelUpdates?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    receiveReviewNotifications?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    receiveAuthorUpdates?: BoolFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;
}
