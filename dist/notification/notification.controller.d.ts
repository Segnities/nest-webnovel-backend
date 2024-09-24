import { NotificationService } from './notification.service';
import { Notification, NotificationMessageStatus, NotificationRelatedEntity, Prisma, UserNotificationSettings } from '@prisma/client';
export declare class NotificationController {
    private readonly notificationService;
    constructor(notificationService: NotificationService);
    createNotification(createNotificationDto: Prisma.NotificationCreateInput): Promise<Notification>;
    getNotificationsByUser(userId: number, status?: NotificationMessageStatus): Promise<Notification[]>;
    updateNotificationStatus(id: number, status: NotificationMessageStatus): Promise<Notification>;
    deleteNotification(id: number): Promise<Notification>;
    getNotificationsByRelatedEntity(entityType: NotificationRelatedEntity, entityId: number): Promise<Notification[]>;
    getUserNotificationSettings(id: number, userId: number): Promise<UserNotificationSettings>;
    updateUserNotificationSettings(id: number, userId: number, updateSettingsDto: Prisma.UserNotificationSettingsUpdateInput): Promise<Prisma.UserNotificationSettingsUpdateInput>;
}
