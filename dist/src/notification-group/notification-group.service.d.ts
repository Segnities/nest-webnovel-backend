import { PrismaService } from '../prisma/prisma.service';
import { NotificationGroup, Prisma } from '@prisma/client';
export declare class NotificationGroupService {
    private prisma;
    constructor(prisma: PrismaService);
    createNotificationGroup(data: Prisma.NotificationGroupCreateInput): Promise<NotificationGroup>;
    getAllNotificationGroups(): Promise<NotificationGroup[]>;
    getNotificationGroupById(id: number): Promise<NotificationGroup | null>;
    updateNotificationGroup(id: number, data: Prisma.NotificationGroupUpdateInput): Promise<NotificationGroup>;
    deleteNotificationGroup(id: number): Promise<NotificationGroup>;
}
