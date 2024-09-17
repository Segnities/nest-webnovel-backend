import { registerEnumType } from '@nestjs/graphql';

export enum GenreScalarFieldEnum {
    id = "id",
    title = "title"
}


registerEnumType(GenreScalarFieldEnum, { name: 'GenreScalarFieldEnum', description: undefined })
