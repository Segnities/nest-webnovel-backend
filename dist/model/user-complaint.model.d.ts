import { User } from './user.model';
import { ComplaintReason } from './complaint-reason.model';
import { ComplaintTargetType } from './complaint-target-type.model';
import { ApprovalStatus } from './enums';
export declare class UserComplaint {
    id: number;
    status: ApprovalStatus;
    createdAt: Date;
    reasonId: number;
    reason: ComplaintReason;
    userId: number;
    user: User;
    complaintTargetId: number;
    complaintTargetType: ComplaintTargetType;
}
