import { AppealService } from './appeal.service';
import { Appeal, Prisma, ApprovalStatus } from '@prisma/client';
export declare class AppealController {
    private readonly appealService;
    constructor(appealService: AppealService);
    createAppeal(data: Prisma.AppealCreateInput): Promise<Appeal>;
    getAppealById(id: string): Promise<Appeal | null>;
    getAllAppeals(skip?: string, take?: string, where?: string, orderBy?: string): Promise<Appeal[]>;
    updateAppeal(id: string, data: Prisma.AppealUpdateInput): Promise<Appeal>;
    deleteAppeal(id: string): Promise<Appeal>;
    reviewAppeal(id: string, reviewerId: number, status: ApprovalStatus): Promise<Appeal>;
    getAppealsByStatus(status: ApprovalStatus): Promise<Appeal[]>;
    getAppealsByUser(userId: string): Promise<Appeal[]>;
    getPendingAppeals(): Promise<Appeal[]>;
    getAppealStatistics(): Promise<{
        [key in ApprovalStatus]: number;
    }>;
    getRecentAppeals(limit?: string): Promise<Appeal[]>;
}
