import { registerEnumType } from '@nestjs/graphql';

export enum AlternativeTitleScalarFieldEnum {
    id = "id",
    title = "title",
    novelId = "novelId"
}


registerEnumType(AlternativeTitleScalarFieldEnum, { name: 'AlternativeTitleScalarFieldEnum', description: undefined })
