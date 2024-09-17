import { registerEnumType } from '@nestjs/graphql';

export enum BanReasonScalarFieldEnum {
    id = "id",
    title = "title",
    description = "description"
}


registerEnumType(BanReasonScalarFieldEnum, { name: 'BanReasonScalarFieldEnum', description: undefined })
