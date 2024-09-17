import { registerEnumType } from '@nestjs/graphql';

export enum TeamScalarFieldEnum {
    id = "id",
    name = "name",
    chapters_count = "chapters_count",
    books_count = "books_count",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(TeamScalarFieldEnum, { name: 'TeamScalarFieldEnum', description: undefined })
