import { registerEnumType } from '@nestjs/graphql';

export enum AppelaReasonScalarFieldEnum {
    id = "id",
    name = "name",
    description = "description"
}


registerEnumType(AppelaReasonScalarFieldEnum, { name: 'AppelaReasonScalarFieldEnum', description: undefined })
