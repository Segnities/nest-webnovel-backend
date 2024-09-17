import { registerEnumType } from '@nestjs/graphql';

export enum ContinueReadingScalarFieldEnum {
    id = "id",
    progressPercentage = "progressPercentage",
    userId = "userId",
    lastChapterId = "lastChapterId",
    novelId = "novelId"
}


registerEnumType(ContinueReadingScalarFieldEnum, { name: 'ContinueReadingScalarFieldEnum', description: undefined })
