import { PrismaService } from '../prisma/prisma.service';
import { ComplaintReason, Prisma } from '@prisma/client';
export declare class ComplaintReasonService {
    private prisma;
    constructor(prisma: PrismaService);
    createComplaintReason(data: Prisma.ComplaintReasonCreateInput): Promise<ComplaintReason>;
    getComplaintReasonById(id: number): Promise<ComplaintReason>;
    updateComplaintReason(id: number, data: Prisma.ComplaintReasonUpdateInput): Promise<ComplaintReason>;
    deleteComplaintReason(id: number): Promise<ComplaintReason>;
    getAllComplaintReasons(): Promise<ComplaintReason[]>;
    countComplaintsByReasonId(reasonId: number): Promise<number>;
}
