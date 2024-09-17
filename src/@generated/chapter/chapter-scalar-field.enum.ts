import { registerEnumType } from '@nestjs/graphql';

export enum ChapterScalarFieldEnum {
    id = "id",
    title = "title",
    content = "content",
    likes = "likes",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    novelId = "novelId",
    commendableTypeId = "commendableTypeId",
    complaitTypeId = "complaitTypeId",
    complaintTargetId = "complaintTargetId"
}


registerEnumType(ChapterScalarFieldEnum, { name: 'ChapterScalarFieldEnum', description: undefined })
