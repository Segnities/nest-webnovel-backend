import { PrismaService } from '../prisma/prisma.service';
import { Notification, NotificationMessageStatus, NotificationRelatedEntity, Prisma, UserNotificationSettings } from '@prisma/client';
import { FirebaseAdminService } from '@/firebase.config';
import { MultipleDeviceNotificationDto, NotificationDto, TopicNotificationDto } from './dto/notification.dto';
export declare class NotificationService {
    private prisma;
    private firebaseAdminService;
    constructor(prisma: PrismaService, firebaseAdminService: FirebaseAdminService);
    sendPushNotification({ token, title, body, icon }: NotificationDto): Promise<string>;
    sendNotificationToMultipleTokens({ tokens, title, body, icon, }: MultipleDeviceNotificationDto): Promise<{
        success: boolean;
        message: string;
    }>;
    sendTopicNotification({ topic, title, body, icon, }: TopicNotificationDto): Promise<{
        success: boolean;
        message: string;
    }>;
    createNotification(data: Prisma.NotificationCreateInput): Promise<Notification>;
    getNotificationsByUser(userId: number, status?: NotificationMessageStatus): Promise<Notification[]>;
    updateNotificationStatus(id: number, status: NotificationMessageStatus): Promise<Notification>;
    deleteNotification(id: number): Promise<Notification>;
    getNotificationsByRelatedEntity(entityType: NotificationRelatedEntity, entityId: number): Promise<Notification[]>;
    getUserNotificationSettings(id: number, userId: number): Promise<UserNotificationSettings>;
    updateUserNotificationSettings(id: number, userId: number, data: Prisma.UserNotificationSettingsUpdateInput): Promise<UserNotificationSettings>;
}
