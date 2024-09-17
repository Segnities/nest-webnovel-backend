import { registerEnumType } from '@nestjs/graphql';

export enum NovelCollectionMappingScalarFieldEnum {
    id = "id",
    novelId = "novelId",
    userCollectionId = "userCollectionId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(NovelCollectionMappingScalarFieldEnum, { name: 'NovelCollectionMappingScalarFieldEnum', description: undefined })
