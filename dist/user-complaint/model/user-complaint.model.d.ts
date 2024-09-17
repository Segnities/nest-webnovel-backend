import { User } from '../../user/model/user.model';
export declare class UserComplaint {
    id: number;
    complainant: User;
    reportedUser: User;
    reason: string;
    createdAt: Date;
}
