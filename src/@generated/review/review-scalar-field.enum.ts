import { registerEnumType } from '@nestjs/graphql';

export enum ReviewScalarFieldEnum {
    id = "id",
    title = "title",
    body = "body",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    likes = "likes",
    views = "views",
    userId = "userId",
    novelId = "novelId",
    commendableTypeId = "commendableTypeId",
    complaintTargetId = "complaintTargetId"
}


registerEnumType(ReviewScalarFieldEnum, { name: 'ReviewScalarFieldEnum', description: undefined })
