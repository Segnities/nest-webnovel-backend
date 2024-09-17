import { registerEnumType } from '@nestjs/graphql';

export enum UserCollectionMappingScalarFieldEnum {
    id = "id",
    collectionId = "collectionId",
    userId = "userId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(UserCollectionMappingScalarFieldEnum, { name: 'UserCollectionMappingScalarFieldEnum', description: undefined })
