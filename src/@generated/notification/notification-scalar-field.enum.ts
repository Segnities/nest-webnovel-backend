import { registerEnumType } from '@nestjs/graphql';

export enum NotificationScalarFieldEnum {
    id = "id",
    title = "title",
    message = "message",
    img = "img",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    userId = "userId",
    typeId = "typeId",
    relatedEntityType = "relatedEntityType",
    relatedEntityId = "relatedEntityId",
    notificationStatus = "notificationStatus",
    novelId = "novelId",
    commentId = "commentId",
    reviewId = "reviewId",
    authorId = "authorId",
    metadata = "metadata",
    notificationGroupId = "notificationGroupId"
}


registerEnumType(NotificationScalarFieldEnum, { name: 'NotificationScalarFieldEnum', description: undefined })
