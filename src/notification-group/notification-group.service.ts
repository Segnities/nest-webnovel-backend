import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { NotificationGroup, Prisma } from '@prisma/client';

@Injectable()
export class NotificationGroupService {
  constructor(private prisma: PrismaService) {}

  async createNotificationGroup(
    data: Prisma.NotificationGroupCreateInput,
  ): Promise<NotificationGroup> {
    return this.prisma.notificationGroup.create({ data });
  }

  async getAllNotificationGroups(): Promise<NotificationGroup[]> {
    return this.prisma.notificationGroup.findMany();
  }

  async getNotificationGroupById(
    id: number,
  ): Promise<NotificationGroup | null> {
    return this.prisma.notificationGroup.findUnique({
      where: { id },
    });
  }

  async updateNotificationGroup(
    id: number,
    data: Prisma.NotificationGroupUpdateInput,
  ): Promise<NotificationGroup> {
    return this.prisma.notificationGroup.update({
      where: { id },
      data,
    });
  }

  async deleteNotificationGroup(id: number): Promise<NotificationGroup> {
    return this.prisma.notificationGroup.delete({
      where: { id },
    });
  }
}
