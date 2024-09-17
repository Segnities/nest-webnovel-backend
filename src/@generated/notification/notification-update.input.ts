import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EnumNotificationRelatedEntityFieldUpdateOperationsInput } from '../prisma/enum-notification-related-entity-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { EnumNotificationMessageStatusFieldUpdateOperationsInput } from '../prisma/enum-notification-message-status-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { UserUpdateOneRequiredWithoutNotificationsNestedInput } from '../user/user-update-one-required-without-notifications-nested.input';
import { NotificationTypeUpdateOneRequiredWithoutNotificationsNestedInput } from '../notification-type/notification-type-update-one-required-without-notifications-nested.input';
import { NovelUpdateOneWithoutNotificationsNestedInput } from '../novel/novel-update-one-without-notifications-nested.input';
import { CommentUpdateOneWithoutNotificationsNestedInput } from '../comment/comment-update-one-without-notifications-nested.input';
import { ReviewUpdateOneWithoutNotificationsNestedInput } from '../review/review-update-one-without-notifications-nested.input';
import { AuthorUpdateOneWithoutNotificationsNestedInput } from '../author/author-update-one-without-notifications-nested.input';
import { NotificationGroupUpdateOneWithoutNotificationsNestedInput } from '../notification-group/notification-group-update-one-without-notifications-nested.input';

@InputType()
export class NotificationUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    message?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    img?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => EnumNotificationRelatedEntityFieldUpdateOperationsInput, {nullable:true})
    relatedEntityType?: EnumNotificationRelatedEntityFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    relatedEntityId?: IntFieldUpdateOperationsInput;

    @Field(() => EnumNotificationMessageStatusFieldUpdateOperationsInput, {nullable:true})
    notificationStatus?: EnumNotificationMessageStatusFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    metadata?: any;

    @Field(() => UserUpdateOneRequiredWithoutNotificationsNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput;

    @Field(() => NotificationTypeUpdateOneRequiredWithoutNotificationsNestedInput, {nullable:true})
    type?: NotificationTypeUpdateOneRequiredWithoutNotificationsNestedInput;

    @Field(() => NovelUpdateOneWithoutNotificationsNestedInput, {nullable:true})
    novel?: NovelUpdateOneWithoutNotificationsNestedInput;

    @Field(() => CommentUpdateOneWithoutNotificationsNestedInput, {nullable:true})
    comment?: CommentUpdateOneWithoutNotificationsNestedInput;

    @Field(() => ReviewUpdateOneWithoutNotificationsNestedInput, {nullable:true})
    review?: ReviewUpdateOneWithoutNotificationsNestedInput;

    @Field(() => AuthorUpdateOneWithoutNotificationsNestedInput, {nullable:true})
    author?: AuthorUpdateOneWithoutNotificationsNestedInput;

    @Field(() => NotificationGroupUpdateOneWithoutNotificationsNestedInput, {nullable:true})
    notificationGroup?: NotificationGroupUpdateOneWithoutNotificationsNestedInput;
}
