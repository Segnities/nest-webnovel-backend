import { registerEnumType } from '@nestjs/graphql';

export enum UserNotificationSettingsScalarFieldEnum {
    id = "id",
    receiveSystemNotifications = "receiveSystemNotifications",
    receiveCommentNotifications = "receiveCommentNotifications",
    receiveNovelUpdates = "receiveNovelUpdates",
    receiveReviewNotifications = "receiveReviewNotifications",
    receiveAuthorUpdates = "receiveAuthorUpdates",
    userId = "userId"
}


registerEnumType(UserNotificationSettingsScalarFieldEnum, { name: 'UserNotificationSettingsScalarFieldEnum', description: undefined })
