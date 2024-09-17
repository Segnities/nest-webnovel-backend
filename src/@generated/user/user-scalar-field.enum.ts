import { registerEnumType } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    id = "id",
    username = "username",
    email = "email",
    provider = "provider",
    img = "img",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    roleId = "roleId",
    teamId = "teamId"
}


registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })
