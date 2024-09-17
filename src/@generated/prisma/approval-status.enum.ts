import { registerEnumType } from '@nestjs/graphql';

export enum ApprovalStatus {
    Pending = "Pending",
    Approved = "Approved",
    Rejected = "Rejected",
    Reviewed = "Reviewed",
    Resolved = "Resolved"
}


registerEnumType(ApprovalStatus, { name: 'ApprovalStatus', description: undefined })
