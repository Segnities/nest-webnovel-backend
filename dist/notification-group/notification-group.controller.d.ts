import { NotificationGroupService } from './notification-group.service';
import { NotificationGroup, Prisma } from '@prisma/client';
export declare class NotificationGroupController {
    private readonly notificationGroupService;
    constructor(notificationGroupService: NotificationGroupService);
    createNotificationGroup(createDto: Prisma.NotificationGroupCreateInput): Promise<NotificationGroup>;
    getAllNotificationGroups(): Promise<NotificationGroup[]>;
    getNotificationGroupById(id: number): Promise<NotificationGroup | null>;
    updateNotificationGroup(id: number, updateDto: Prisma.NotificationGroupUpdateInput): Promise<NotificationGroup>;
    deleteNotificationGroup(id: number): Promise<NotificationGroup>;
}
