import { registerEnumType } from '@nestjs/graphql';

export enum AuthorSubscriptionScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    userId = "userId",
    authorId = "authorId"
}


registerEnumType(AuthorSubscriptionScalarFieldEnum, { name: 'AuthorSubscriptionScalarFieldEnum', description: undefined })
