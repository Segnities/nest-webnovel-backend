import { registerEnumType } from '@nestjs/graphql';

export enum CommendableTypeScalarFieldEnum {
    id = "id",
    name = "name"
}


registerEnumType(CommendableTypeScalarFieldEnum, { name: 'CommendableTypeScalarFieldEnum', description: undefined })
