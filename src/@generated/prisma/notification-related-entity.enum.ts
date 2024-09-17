import { registerEnumType } from '@nestjs/graphql';

export enum NotificationRelatedEntity {
    NOVEL = "NOVEL",
    COMMENT = "COMMENT",
    REVIEW = "REVIEW",
    AUTHOR = "AUTHOR",
    SYSTEM = "SYSTEM"
}


registerEnumType(NotificationRelatedEntity, { name: 'NotificationRelatedEntity', description: undefined })
