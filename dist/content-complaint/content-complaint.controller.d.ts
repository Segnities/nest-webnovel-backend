import { ContentComplaintService } from './content-complaint.service';
import { ContentComplaint, Prisma } from '@prisma/client';
export declare class ContentComplaintController {
    private readonly contentComplaintService;
    constructor(contentComplaintService: ContentComplaintService);
    createContentComplaint(data: Prisma.ContentComplaintCreateInput): Promise<ContentComplaint>;
    getContentComplaintById(id: number): Promise<ContentComplaint>;
    updateContentComplaint(id: number, data: Prisma.ContentComplaintUpdateInput): Promise<ContentComplaint>;
    deleteContentComplaint(id: number): Promise<ContentComplaint>;
    getAllContentComplaints(): Promise<ContentComplaint[]>;
    countComplaintsByReasonId(reasonId: number): Promise<number>;
    resolveContentComplaint(id: number): Promise<ContentComplaint>;
    getComplaintsByUserId(userId: number): Promise<ContentComplaint[]>;
}
