import { registerEnumType } from '@nestjs/graphql';

export enum UserRatingScalarFieldEnum {
    id = "id",
    rating = "rating",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    novelId = "novelId",
    userId = "userId"
}


registerEnumType(UserRatingScalarFieldEnum, { name: 'UserRatingScalarFieldEnum', description: undefined })
