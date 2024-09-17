import { User } from './user.model';
import { AppelaReason } from './appeal-reason.model';
import { ApprovalStatus } from './enums';
export declare class Appeal {
    id: number;
    title: string;
    body: string;
    createdAt: Date;
    updatedAt: Date;
    reviewedAt: Date;
    status: ApprovalStatus;
    appealReasonId: number;
    appeal: AppelaReason;
    reviewedBy: number;
    reviewedByUser: User;
}
