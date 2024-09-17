import { registerEnumType } from '@nestjs/graphql';

export enum NewsScalarFieldEnum {
    id = "id",
    title = "title",
    body = "body",
    likes = "likes",
    views = "views",
    published = "published",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    commendableTypeId = "commendableTypeId",
    userId = "userId",
    complaintTargetId = "complaintTargetId"
}


registerEnumType(NewsScalarFieldEnum, { name: 'NewsScalarFieldEnum', description: undefined })
