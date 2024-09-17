import { registerEnumType } from '@nestjs/graphql';

export enum NovelScalarFieldEnum {
    id = "id",
    title = "title",
    original_title = "original_title",
    description = "description",
    img = "img",
    isAdult = "isAdult",
    releaseYear = "releaseYear",
    coverImg = "coverImg",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    views = "views",
    countryId = "countryId",
    status = "status",
    authorId = "authorId",
    translationStatus = "translationStatus",
    format = "format",
    commendableTypeId = "commendableTypeId",
    complaintTargetId = "complaintTargetId"
}


registerEnumType(NovelScalarFieldEnum, { name: 'NovelScalarFieldEnum', description: undefined })
