import { registerEnumType } from '@nestjs/graphql';

export enum NovelSubscriptionScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    userId = "userId",
    novelId = "novelId"
}


registerEnumType(NovelSubscriptionScalarFieldEnum, { name: 'NovelSubscriptionScalarFieldEnum', description: undefined })
