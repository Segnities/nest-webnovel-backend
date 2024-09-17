import { registerEnumType } from '@nestjs/graphql';

export enum AppealScalarFieldEnum {
    id = "id",
    title = "title",
    body = "body",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    reviewedAt = "reviewedAt",
    status = "status",
    appealReasonId = "appealReasonId",
    reviewedBy = "reviewedBy"
}


registerEnumType(AppealScalarFieldEnum, { name: 'AppealScalarFieldEnum', description: undefined })
