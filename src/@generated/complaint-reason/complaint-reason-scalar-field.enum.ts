import { registerEnumType } from '@nestjs/graphql';

export enum ComplaintReasonScalarFieldEnum {
    id = "id",
    title = "title",
    description = "description",
    createdAt = "createdAt",
    userId = "userId"
}


registerEnumType(ComplaintReasonScalarFieldEnum, { name: 'ComplaintReasonScalarFieldEnum', description: undefined })
