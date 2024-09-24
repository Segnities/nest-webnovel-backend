import {
  Controller,
  Get,
  Post,
  Delete,
  Patch,
  Body,
  Param,
  Query,
} from '@nestjs/common';
import { NotificationService } from './notification.service';
import {
  Notification,
  NotificationMessageStatus,
  NotificationRelatedEntity,
  Prisma,
  UserNotificationSettings,
} from '@prisma/client';

@Controller('notifications')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Post()
  async createNotification(
    @Body() createNotificationDto: Prisma.NotificationCreateInput,
  ): Promise<Notification> {
    return this.notificationService.createNotification(createNotificationDto);
  }

  @Get(':userId')
  async getNotificationsByUser(
    @Param('userId') userId: number,
    @Query('status') status?: NotificationMessageStatus,
  ): Promise<Notification[]> {
    return this.notificationService.getNotificationsByUser(userId, status);
  }

  @Patch(':id/status')
  async updateNotificationStatus(
    @Param('id') id: number,
    @Body('status') status: NotificationMessageStatus,
  ): Promise<Notification> {
    return this.notificationService.updateNotificationStatus(id, status);
  }

  @Delete(':id')
  async deleteNotification(@Param('id') id: number): Promise<Notification> {
    return this.notificationService.deleteNotification(id);
  }

  @Get('/related-entity/:entityType/:entityId')
  async getNotificationsByRelatedEntity(
    @Param('entityType') entityType: NotificationRelatedEntity,
    @Param('entityId') entityId: number,
  ): Promise<Notification[]> {
    return this.notificationService.getNotificationsByRelatedEntity(
      entityType,
      entityId,
    );
  }

  @Get('/settings/:id/:userId')
  async getUserNotificationSettings(
    @Param('id') id: number,
    @Param('userId') userId: number,
  ): Promise<UserNotificationSettings> {
    return this.notificationService.getUserNotificationSettings(id, userId);
  }

  @Patch('/settings/:id/:userId')
  async updateUserNotificationSettings(
    @Param('id') id: number,
    @Param('userId') userId: number,
    @Body() updateSettingsDto: Prisma.UserNotificationSettingsUpdateInput,
  ): Promise<Prisma.UserNotificationSettingsUpdateInput> {
    return this.notificationService.updateUserNotificationSettings(
      id,
      userId,
      updateSettingsDto,
    );
  }
}
