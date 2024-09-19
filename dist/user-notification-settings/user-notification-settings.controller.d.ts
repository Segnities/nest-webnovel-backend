import { UserNotificationSettings } from '@prisma/client';
import { UserNotificationSettingsService } from './user-notification-settings.service';
export declare class UserNotificationSettingsController {
    private readonly userNotificationSettingsService;
    constructor(userNotificationSettingsService: UserNotificationSettingsService);
    getUserNotificationSettings(userId: number): Promise<UserNotificationSettings[]>;
    updateUserNotificationSetting(userId: number, isEnabled: boolean): Promise<UserNotificationSettings>;
    setDefaultNotificationSettings(userId: number): Promise<{
        count: number;
    }>;
    toggleAllNotifications(userId: number, isEnabled: boolean): Promise<UserNotificationSettings[]>;
    deleteUserNotificationSettings(userId: number): Promise<void>;
}
