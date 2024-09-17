import { registerEnumType } from '@nestjs/graphql';

export enum NovelRatingScalarFieldEnum {
    id = "id",
    votesCount = "votesCount",
    avgRating = "avgRating",
    totalRating = "totalRating",
    novelId = "novelId"
}


registerEnumType(NovelRatingScalarFieldEnum, { name: 'NovelRatingScalarFieldEnum', description: undefined })
