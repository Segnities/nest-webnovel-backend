import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumNotificationRelatedEntityFilter } from '../prisma/enum-notification-related-entity-filter.input';
import { EnumNotificationMessageStatusFilter } from '../prisma/enum-notification-message-status-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';

@InputType()
export class NotificationScalarWhereInput {

    @Field(() => [NotificationScalarWhereInput], {nullable:true})
    AND?: Array<NotificationScalarWhereInput>;

    @Field(() => [NotificationScalarWhereInput], {nullable:true})
    OR?: Array<NotificationScalarWhereInput>;

    @Field(() => [NotificationScalarWhereInput], {nullable:true})
    NOT?: Array<NotificationScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    message?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    img?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    typeId?: IntFilter;

    @Field(() => EnumNotificationRelatedEntityFilter, {nullable:true})
    relatedEntityType?: EnumNotificationRelatedEntityFilter;

    @Field(() => IntFilter, {nullable:true})
    relatedEntityId?: IntFilter;

    @Field(() => EnumNotificationMessageStatusFilter, {nullable:true})
    notificationStatus?: EnumNotificationMessageStatusFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    novelId?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    commentId?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    reviewId?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    authorId?: IntNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    metadata?: JsonNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    notificationGroupId?: IntNullableFilter;
}
