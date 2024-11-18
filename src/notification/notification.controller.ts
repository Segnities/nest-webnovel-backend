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
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { MultipleDeviceNotificationDto, TopicNotificationDto } from './dto/notification.dto';

@Controller('notifications')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Post("send-notification")
  @ApiOperation({ summary: "Send a push notification to a single device" })
  @ApiResponse({ status: 200, description: "Notification sent successfully" })
  async sendNotification(
    @Body() body: { token: string; title: string; body: string; icon: string }
  ) {
    return this.notificationService.sendPushNotification({
      token: body.token,
      title: body.title,
      body: body.body,
      icon: body.icon,
    });
  }

  @Post("send-multiple-notifications")
  @ApiOperation({ summary: "Send push notifications to multiple devices" })
  @ApiResponse({ status: 200, description: "Notifications sent successfully" })
  async sendMultipleNotifications(@Body() body: MultipleDeviceNotificationDto) {
    return this.notificationService.sendNotificationToMultipleTokens({
      tokens: body.tokens,
      title: body.title,
      body: body.body,
      icon: body.icon,
    });
  }

  @Post("send-topic-notification")
  @ApiOperation({ summary: "Send a push notification to a topic" })
  @ApiResponse({
    status: 200,
    description: "Topic notification sent successfully",
  })
  async sendTopicNotification(@Body() body: TopicNotificationDto) {
    return this.notificationService.sendTopicNotification({
      topic: body.topic,
      title: body.title,
      body: body.body,
      icon: body.icon,
    });
  }


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
