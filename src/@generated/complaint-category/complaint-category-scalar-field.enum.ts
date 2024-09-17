import { registerEnumType } from '@nestjs/graphql';

export enum ComplaintCategoryScalarFieldEnum {
    id = "id",
    name = "name",
    description = "description"
}


registerEnumType(ComplaintCategoryScalarFieldEnum, { name: 'ComplaintCategoryScalarFieldEnum', description: undefined })
