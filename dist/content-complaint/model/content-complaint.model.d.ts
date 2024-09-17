import { User } from '../../user/model/user.model';
export declare class ContentComplaint {
    id: number;
    complainant: User;
    resolvedBy?: User;
    contentType: string;
    contentId: number;
    reason: string;
    createdAt: Date;
    resolvedAt?: Date;
}
