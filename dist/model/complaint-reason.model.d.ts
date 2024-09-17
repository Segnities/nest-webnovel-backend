import { User } from './user.model';
import { UserComplaint } from './user-complaint.model';
import { ContentComplaint } from './content-complaint.model';
export declare class ComplaintReason {
    id: number;
    title: string;
    description: string;
    userComplaints: UserComplaint[];
    contentComplaints: ContentComplaint[];
    createdAt: Date;
    User?: User;
    userId?: number;
}
