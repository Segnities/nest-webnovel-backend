import { registerEnumType } from '@nestjs/graphql';

export enum NotificationTypeScalarFieldEnum {
    id = "id",
    name = "name",
    description = "description"
}


registerEnumType(NotificationTypeScalarFieldEnum, { name: 'NotificationTypeScalarFieldEnum', description: undefined })
