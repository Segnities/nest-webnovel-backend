import { registerEnumType } from '@nestjs/graphql';

export enum CommentStatus {
    ACTIVE = "ACTIVE",
    DELETED = "DELETED",
    HIDDEN_BY_MODERATOR = "HIDDEN_BY_MODERATOR",
    HIDDEN = "HIDDEN"
}


registerEnumType(CommentStatus, { name: 'CommentStatus', description: undefined })
