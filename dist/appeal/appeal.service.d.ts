import { PrismaService } from '../prisma/prisma.service';
import { Appeal, Prisma, ApprovalStatus } from '@prisma/client';
export declare class AppealService {
    private prisma;
    constructor(prisma: PrismaService);
    createAppeal(data: Prisma.AppealCreateInput): Promise<Appeal>;
    getAppealById(id: number): Promise<Appeal | null>;
    getAllAppeals(params: {
        skip?: number;
        take?: number;
        where?: Prisma.AppealWhereInput;
        orderBy?: Prisma.AppealOrderByWithRelationInput;
    }): Promise<Appeal[]>;
    updateAppeal(id: number, data: Prisma.AppealUpdateInput): Promise<Appeal>;
    deleteAppeal(id: number): Promise<Appeal>;
    reviewAppeal(id: number, reviewerId: number, status: ApprovalStatus): Promise<Appeal>;
    getAppealsByStatus(status: ApprovalStatus): Promise<Appeal[]>;
    getAppealsByUser(userId: number): Promise<Appeal[]>;
    getPendingAppeals(): Promise<Appeal[]>;
    getAppealStatistics(): Promise<{
        [key in ApprovalStatus]: number;
    }>;
    getRecentAppeals(limit?: number): Promise<Appeal[]>;
}
