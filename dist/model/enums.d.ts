export declare enum Provider {
    GOOGLE = "GOOGLE",
    EMAIL_AND_PASSWORD = "EMAIL_AND_PASSWORD"
}
export declare enum ROLE_NAME {
    SYSTEM = "SYSTEM",
    ADMIN = "ADMIN",
    MODERATOR = "MODERATOR",
    DEFAULT_USER = "DEFAULT_USER"
}
export declare enum ApprovalStatus {
    Pending = "Pending",
    Approved = "Approved",
    Rejected = "Rejected",
    Reviewed = "Reviewed",
    Resolved = "Resolved"
}
export declare enum BanStatus {
    Active = "Active",
    Expired = "Expired",
    Appealed = "Appealed"
}
export declare enum NotificationRelatedEntity {
    NOVEL = "NOVEL",
    COMMENT = "COMMENT",
    REVIEW = "REVIEW",
    AUTHOR = "AUTHOR",
    SYSTEM = "SYSTEM"
}
export declare enum NotificationMessageStatus {
    SENT = "SENT",
    PENDING = "PENDING",
    READ = "READ",
    UNREAD = "UNREAD",
    ARCHIVED = "ARCHIVED"
}
export declare enum CommentStatus {
    ACTIVE = "ACTIVE",
    DELETED = "DELETED",
    HIDDEN_BY_MODERATOR = "HIDDEN_BY_MODERATOR",
    HIDDEN = "HIDDEN"
}
export declare enum NovelStatus {
    ONGOING = "ONGOING",
    COMPLETED = "COMPLETED",
    HIATUS = "HIATUS",
    CANCELLED = "CANCELLED"
}
export declare enum NovelFormat {
    LIGHT_NOVEL = "LIGHT_NOVEL",
    WEB_NOVEL = "WEB_NOVEL"
}
export declare enum NovelTranslationStatus {
    NOT_TRANSLATED = "NOT_TRANSLATED",
    PARTIALLY_TRANSLATED = "PARTIALLY_TRANSLATED",
    FULLY_TRANSLATED = "FULLY_TRANSLATED",
    MACHINE_TRANSLATED = "MACHINE_TRANSLATED",
    ONGOING = "ONGOING"
}
