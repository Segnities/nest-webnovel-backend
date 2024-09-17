import { registerEnumType } from '@nestjs/graphql';

export enum NotificationGroupScalarFieldEnum {
    id = "id",
    name = "name",
    description = "description",
    isDefault = "isDefault",
    parentGroupId = "parentGroupId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(NotificationGroupScalarFieldEnum, { name: 'NotificationGroupScalarFieldEnum', description: undefined })
