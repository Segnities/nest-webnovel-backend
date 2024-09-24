import { PrismaService } from '../prisma/prisma.service';
import { UserComplaint, Prisma } from '@prisma/client';
export declare class UserComplaintService {
    private prisma;
    constructor(prisma: PrismaService);
    createComplaint(data: Prisma.UserComplaintCreateInput): Promise<UserComplaint>;
    getComplaintsByUserId(userId: number): Promise<UserComplaint[]>;
    getComplaintById(id: number): Promise<UserComplaint | null>;
    updateComplaint(id: number, data: Prisma.UserComplaintUpdateInput): Promise<UserComplaint>;
    deleteComplaint(id: number): Promise<UserComplaint>;
    getComplaintsCountByUserId(userId: number): Promise<number>;
}
