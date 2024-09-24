import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import {
  Notification,
  NotificationMessageStatus,
  NotificationRelatedEntity,
  Prisma,
  UserNotificationSettings,
} from '@prisma/client';

@Injectable()
export class NotificationService {
  constructor(private prisma: PrismaService) {}

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
