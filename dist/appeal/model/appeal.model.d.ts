import { User } from '../../user/model/user.model';
export declare class Appeal {
    id: number;
    appealedBy: User;
    reviewedBy?: User;
    reason: string;
    createdAt: Date;
    reviewedAt?: Date;
}
