import { PrismaService } from '../prisma/prisma.service';
import { Ban, Prisma } from '@prisma/client';
export declare class BanService {
    private prisma;
    constructor(prisma: PrismaService);
    createBan(data: Prisma.BanCreateInput): Promise<Ban>;
    getBanById(id: number): Promise<Ban | null>;
    getAllBans(params: {
        skip?: number;
        take?: number;
        where?: Prisma.BanWhereInput;
        orderBy?: Prisma.BanOrderByWithRelationInput;
    }): Promise<Ban[]>;
    updateBan(id: number, data: Prisma.BanUpdateInput): Promise<Ban>;
    deleteBan(id: number): Promise<Ban>;
    getUserActiveBans(userId: number): Promise<Ban[]>;
    appealBan(banId: number, appealData: Prisma.AppealCreateInput): Promise<Ban>;
    checkUserBanStatus(userId: number): Promise<boolean>;
    getExpiredBans(): Promise<Ban[]>;
    extendBan(banId: number, newEndDate: Date): Promise<Ban>;
    getBansByComplaintTarget(complaintTargetId: number): Promise<Ban[]>;
    getBanHistory(userId: number): Promise<Ban[]>;
}
