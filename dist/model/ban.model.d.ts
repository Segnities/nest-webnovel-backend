import { User } from './user.model';
import { Appeal } from './appeal.model';
import { ComplaintTargetType } from './complaint-target-type.model';
export declare class Ban {
    id: number;
    banStart: Date;
    banEnd: Date;
    duration: number;
    appealed: boolean;
    appealId: number;
    appeal: Appeal;
    createdAt: Date;
    updatedAt: Date;
    issuedBy: number;
    issuedByUser: User;
    userId: number;
    user: User;
    complaintTargetId: number;
    complaintTargetType: ComplaintTargetType;
}
