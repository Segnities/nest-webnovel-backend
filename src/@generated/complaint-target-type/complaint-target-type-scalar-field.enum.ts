import { registerEnumType } from '@nestjs/graphql';

export enum ComplaintTargetTypeScalarFieldEnum {
    id = "id",
    name = "name",
    description = "description",
    complaintCategoryId = "complaintCategoryId"
}


registerEnumType(ComplaintTargetTypeScalarFieldEnum, { name: 'ComplaintTargetTypeScalarFieldEnum', description: undefined })
