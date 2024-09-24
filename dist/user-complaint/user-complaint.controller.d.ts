import { UserComplaintService } from './user-complaint.service';
import { UserComplaint, Prisma } from '@prisma/client';
export declare class UserComplaintController {
    private readonly userComplaintService;
    constructor(userComplaintService: UserComplaintService);
    createComplaint(createComplaintDto: Prisma.UserComplaintCreateInput): Promise<UserComplaint>;
    getComplaintsByUserId(userId: number): Promise<UserComplaint[]>;
    getComplaintById(id: number): Promise<UserComplaint | null>;
    updateComplaint(id: number, updateComplaintDto: Prisma.UserComplaintUpdateInput): Promise<UserComplaint>;
    deleteComplaint(id: number): Promise<UserComplaint>;
    getComplaintsCountByUserId(userId: number): Promise<number>;
}
