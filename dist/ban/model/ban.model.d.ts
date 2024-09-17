import { User } from '../../user/model/user.model';
export declare class Ban {
    id: number;
    bannedUser: User;
    issuedBy: User;
    reason: string;
    startDate: Date;
    endDate?: Date;
}
