import { registerEnumType } from '@nestjs/graphql';

export enum CommentScalarFieldEnum {
    id = "id",
    userId = "userId",
    nestedLevel = "nestedLevel",
    body = "body",
    likes = "likes",
    dislikes = "dislikes",
    status = "status",
    commendableTypeId = "commendableTypeId",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    complaintTypeId = "complaintTypeId",
    replyToId = "replyToId",
    complaintTargetId = "complaintTargetId"
}


registerEnumType(CommentScalarFieldEnum, { name: 'CommentScalarFieldEnum', description: undefined })
