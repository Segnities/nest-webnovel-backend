import { PrismaService } from '@/prisma/prisma.service';
import { UserNotificationSettings } from '@prisma/client';
export declare class UserNotificationSettingsService {
    private prisma;
    constructor(prisma: PrismaService);
    getUserNotificationSettings(userId: number): Promise<UserNotificationSettings[]>;
    updateUserNotificationSetting(userId: number, isEnabled: boolean): Promise<UserNotificationSettings>;
    getDefaultNotificationSettings(): Promise<UserNotificationSettings[]>;
    setDefaultNotificationSettings(userId: number): Promise<{
        count: number;
    }>;
    toggleAllNotifications(userId: number, isEnabled: boolean): Promise<UserNotificationSettings[]>;
    deleteUserNotificationSettings(userId: number): Promise<void>;
}
