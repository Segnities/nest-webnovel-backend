import { registerEnumType } from '@nestjs/graphql';

export enum NotificationMessageStatus {
    SENT = "SENT",
    PENDING = "PENDING",
    READ = "READ",
    UNREAD = "UNREAD",
    ARCHIVED = "ARCHIVED"
}


registerEnumType(NotificationMessageStatus, { name: 'NotificationMessageStatus', description: undefined })
