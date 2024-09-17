import { registerEnumType } from '@nestjs/graphql';

export enum ContentComplaintScalarFieldEnum {
    id = "id",
    status = "status",
    contentId = "contentId",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    reasonId = "reasonId",
    complaintTargetId = "complaintTargetId",
    resolvedAt = "resolvedAt",
    issuedBy = "issuedBy",
    resolvedBy = "resolvedBy"
}


registerEnumType(ContentComplaintScalarFieldEnum, { name: 'ContentComplaintScalarFieldEnum', description: undefined })
