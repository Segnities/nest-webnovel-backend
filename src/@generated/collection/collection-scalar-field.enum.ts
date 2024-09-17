import { registerEnumType } from '@nestjs/graphql';

export enum CollectionScalarFieldEnum {
    id = "id",
    title = "title",
    description = "description",
    isDefault = "isDefault",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(CollectionScalarFieldEnum, { name: 'CollectionScalarFieldEnum', description: undefined })
