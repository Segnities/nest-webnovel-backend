import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import {
  Notification,
  NotificationMessageStatus,
  NotificationRelatedEntity,
  Prisma,
  UserNotificationSettings,
} from '@prisma/client';
import { FirebaseAdminService } from '@/firebase.config';
import { MultipleDeviceNotificationDto, NotificationDto, TopicNotificationDto } from './dto/notification.dto';

@Injectable()
export class NotificationService {
  constructor(
    private prisma: PrismaService,
    private firebaseAdminService: FirebaseAdminService,
  ) { }

  async sendPushNotification({ token, title, body, icon }: NotificationDto) {
    try {
      const admin = this.firebaseAdminService.getAdmin();
      const response = await admin.messaging().send({
        token,
        webpush: {
          notification: {
            title,
            body,
            icon,
          },
        },
      });
      return response;
    } catch (error) {
      throw error;
    }
  }

  async sendNotificationToMultipleTokens({
    tokens,
    title,
    body,
    icon,
  }: MultipleDeviceNotificationDto) {
    const message = {
      notification: {
        title,
        body,
        icon,
      },
      tokens,
    };

    try {
      const admin = this.firebaseAdminService.getAdmin();
      const response = await admin.messaging().sendEachForMulticast(message);
      console.log("Successfully sent messages:", response);
      return {
        success: true,
        message: `Successfully sent ${response.successCount} messages; ${response.failureCount} failed.`,
      };
    } catch (error) {
      console.log("Error sending messages:", error);
      return { success: false, message: "Failed to send notifications" };
    }
  }

  async sendTopicNotification({
    topic,
    title,
    body,
    icon,
  }: TopicNotificationDto) {
    const message = {
      notification: {
        title,
        body,
        icon,
        badge: icon,
        vibrate: [200, 100, 200],
        requireInteraction: true,
      },
      topic,
    };

    try {
      const admin = this.firebaseAdminService.getAdmin();
      const response = await admin.messaging().send(message);
      console.log("Successfully sent message:", response);
      return { success: true, message: "Topic notification sent successfully" };
    } catch (error) {
      console.log("Error sending message:", error);
      return { success: false, message: "Failed to send topic notification" };
    }
  }

  async createNotification(
    data: Prisma.NotificationCreateInput,
  ): Promise<Notification> {
    return this.prisma.notification.create({ data });
  }

  async getNotificationsByUser(
    userId: number,
    status?: NotificationMessageStatus,
  ): Promise<Notification[]> {
    return this.prisma.notification.findMany({
      where: { userId, notificationStatus: status },
      orderBy: { createdAt: 'desc' },
    });
  }

  async updateNotificationStatus(
    id: number,
    status: NotificationMessageStatus,
  ): Promise<Notification> {
    return this.prisma.notification.update({
      where: { id },
      data: { notificationStatus: status },
    });
  }

  async deleteNotification(id: number): Promise<Notification> {
    return this.prisma.notification.delete({ where: { id } });
  }

  async getNotificationsByRelatedEntity(
    entityType: NotificationRelatedEntity,
    entityId: number,
  ): Promise<Notification[]> {
    return this.prisma.notification.findMany({
      where: { relatedEntityType: entityType, relatedEntityId: entityId },
    });
  }

  async getUserNotificationSettings(
    id: number,
    userId: number,
  ): Promise<UserNotificationSettings> {
    return this.prisma.userNotificationSettings.findUnique({
      where: { userId, id },
    });
  }

  async updateUserNotificationSettings(
    id: number,
    userId: number,
    data: Prisma.UserNotificationSettingsUpdateInput,
  ): Promise<UserNotificationSettings> {
    return this.prisma.userNotificationSettings.update({
      where: { userId, id },
      data,
    });
  }
}
