import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { NotificationWhereInput } from './notification-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { EnumNotificationRelatedEntityFilter } from '../prisma/enum-notification-related-entity-filter.input';
import { EnumNotificationMessageStatusFilter } from '../prisma/enum-notification-message-status-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { NotificationTypeRelationFilter } from '../notification-type/notification-type-relation-filter.input';
import { NovelNullableRelationFilter } from '../novel/novel-nullable-relation-filter.input';
import { CommentNullableRelationFilter } from '../comment/comment-nullable-relation-filter.input';
import { ReviewNullableRelationFilter } from '../review/review-nullable-relation-filter.input';
import { AuthorNullableRelationFilter } from '../author/author-nullable-relation-filter.input';
import { NotificationGroupNullableRelationFilter } from '../notification-group/notification-group-nullable-relation-filter.input';

@InputType()
export class NotificationWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [NotificationWhereInput], {nullable:true})
    AND?: Array<NotificationWhereInput>;

    @Field(() => [NotificationWhereInput], {nullable:true})
    OR?: Array<NotificationWhereInput>;

    @Field(() => [NotificationWhereInput], {nullable:true})
    NOT?: Array<NotificationWhereInput>;

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

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => NotificationTypeRelationFilter, {nullable:true})
    type?: NotificationTypeRelationFilter;

    @Field(() => NovelNullableRelationFilter, {nullable:true})
    novel?: NovelNullableRelationFilter;

    @Field(() => CommentNullableRelationFilter, {nullable:true})
    comment?: CommentNullableRelationFilter;

    @Field(() => ReviewNullableRelationFilter, {nullable:true})
    review?: ReviewNullableRelationFilter;

    @Field(() => AuthorNullableRelationFilter, {nullable:true})
    author?: AuthorNullableRelationFilter;

    @Field(() => NotificationGroupNullableRelationFilter, {nullable:true})
    notificationGroup?: NotificationGroupNullableRelationFilter;
}
