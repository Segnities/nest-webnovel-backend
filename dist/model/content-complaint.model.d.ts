import { User } from './user.model';
import { ComplaintReason } from './complaint-reason.model';
import { ComplaintTargetType } from './complaint-target-type.model';
import { ApprovalStatus } from './enums';
export declare class ContentComplaint {
    id: number;
    status: ApprovalStatus;
    contentId: number;
    createdAt: Date;
    updatedAt: Date;
    reasonId: number;
    complaintReason: ComplaintReason;
    complaintTargetId: number;
    complaintTargetType: ComplaintTargetType;
    resolvedAt: Date;
    issuedBy: number;
    issuedByUser: User;
    resolvedBy: number;
    resolvedByUser: User;
}
