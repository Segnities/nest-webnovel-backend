import { BanService } from './ban.service';
import { Ban, Prisma } from '@prisma/client';
export declare class BanController {
    private readonly banService;
    constructor(banService: BanService);
    createBan(data: Prisma.BanCreateInput): Promise<Ban>;
    getBanById(id: string): Promise<Ban | null>;
    getAllBans(skip?: string, take?: string, where?: string, orderBy?: string): Promise<Ban[]>;
    updateBan(id: string, data: Prisma.BanUpdateInput): Promise<Ban>;
    deleteBan(id: string): Promise<Ban>;
    getUserActiveBans(userId: string): Promise<Ban[]>;
    appealBan(id: string, appealData: Prisma.AppealCreateInput): Promise<Ban>;
    checkUserBanStatus(userId: string): Promise<boolean>;
    getExpiredBans(): Promise<Ban[]>;
    extendBan(id: string, newEndDate: string): Promise<Ban>;
    getBansByComplaintTarget(targetId: string): Promise<Ban[]>;
    getBanHistory(userId: string): Promise<Ban[]>;
}
