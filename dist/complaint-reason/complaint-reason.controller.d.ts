import { ComplaintReasonService } from './complaint-reason.service';
import { ComplaintReason, Prisma } from '@prisma/client';
export declare class ComplaintReasonController {
    private readonly complaintReasonService;
    constructor(complaintReasonService: ComplaintReasonService);
    createComplaintReason(data: Prisma.ComplaintReasonCreateInput): Promise<ComplaintReason>;
    getComplaintReasonById(id: number): Promise<ComplaintReason>;
    updateComplaintReason(id: number, data: Prisma.ComplaintReasonUpdateInput): Promise<ComplaintReason>;
    deleteComplaintReason(id: number): Promise<ComplaintReason>;
    getAllComplaintReasons(): Promise<ComplaintReason[]>;
    countComplaintsByReasonId(reasonId: number): Promise<number>;
}
