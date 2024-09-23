import { PrismaService } from '../prisma/prisma.service';
import { ContentComplaint, Prisma } from '@prisma/client';
export declare class ContentComplaintService {
    private prisma;
    constructor(prisma: PrismaService);
    createContentComplaint(data: Prisma.ContentComplaintCreateInput): Promise<ContentComplaint>;
    getContentComplaintById(id: number): Promise<ContentComplaint>;
    updateContentComplaint(id: number, data: Prisma.ContentComplaintUpdateInput): Promise<ContentComplaint>;
    deleteContentComplaint(id: number): Promise<ContentComplaint>;
    getAllContentComplaints(): Promise<ContentComplaint[]>;
    countComplaintsByReasonId(reasonId: number): Promise<number>;
    resolveContentComplaint(id: number): Promise<ContentComplaint>;
    getComplaintsByUserId(userId: number): Promise<ContentComplaint[]>;
}
