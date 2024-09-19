import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { UserNotificationSettings } from '@prisma/client';

@Injectable()
export class UserNotificationSettingsService {
  constructor(private prisma: PrismaService) {}

  async getUserNotificationSettings(
    userId: number,
  ): Promise<UserNotificationSettings[]> {
    return this.prisma.userNotificationSettings.findMany({
      where: { userId },
    });
  }

  async updateUserNotificationSetting(
    userId: number,
    isEnabled: boolean,
  ): Promise<UserNotificationSettings> {
    const existingSetting =
      await this.prisma.userNotificationSettings.findFirst({
        where: { userId },
      });

    if (existingSetting) {
      return this.prisma.userNotificationSettings.update({
        where: { id: existingSetting.id },
        data: { receiveSystemNotifications: isEnabled },
      });
    } else {
      return this.prisma.userNotificationSettings.create({
        data: {
          userId,
          receiveSystemNotifications: isEnabled,
        },
      });
    }
  }

  async getDefaultNotificationSettings(): Promise<UserNotificationSettings[]> {
    return this.prisma.userNotificationSettings.findMany({
      where: { user: { role: { name: 'DEFAULT_USER' } } },
    });
  }

  async setDefaultNotificationSettings(
    userId: number,
  ): Promise<{ count: number }> {
    const defaultSettings = await this.getDefaultNotificationSettings();
    const userSettings = defaultSettings.map((setting) => ({
      userId,
      receiveSystemNotifications: setting.receiveSystemNotifications,
      receiveCommentNotifications: setting.receiveCommentNotifications,
      receiveNovelUpdates: setting.receiveNovelUpdates,
      receiveReviewNotifications: setting.receiveReviewNotifications,
      receiveAuthorUpdates: setting.receiveAuthorUpdates,
    }));

    return this.prisma.userNotificationSettings.createMany({
      data: userSettings,
    });
  }

  async toggleAllNotifications(
    userId: number,
    isEnabled: boolean,
  ): Promise<UserNotificationSettings[]> {
    await this.prisma.userNotificationSettings.updateMany({
      where: { userId },
      data: {
        receiveSystemNotifications: isEnabled,
        receiveCommentNotifications: isEnabled,
        receiveNovelUpdates: isEnabled,
        receiveReviewNotifications: isEnabled,
        receiveAuthorUpdates: isEnabled,
      },
    });

    return this.getUserNotificationSettings(userId);
  }

  async deleteUserNotificationSettings(userId: number): Promise<void> {
    await this.prisma.userNotificationSettings.deleteMany({
      where: { userId },
    });
  }
}
