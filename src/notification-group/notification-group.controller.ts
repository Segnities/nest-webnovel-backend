import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { NotificationGroupService } from './notification-group.service';
import { NotificationGroup, Prisma } from '@prisma/client';

@Controller('notification-groups')
export class NotificationGroupController {
  constructor(
    private readonly notificationGroupService: NotificationGroupService,
  ) {}

  @Post()
  async createNotificationGroup(
    @Body() createDto: Prisma.NotificationGroupCreateInput,
  ): Promise<NotificationGroup> {
    return this.notificationGroupService.createNotificationGroup(createDto);
  }

  @Get()
  async getAllNotificationGroups(): Promise<NotificationGroup[]> {
    return this.notificationGroupService.getAllNotificationGroups();
  }

  @Get(':id')
  async getNotificationGroupById(
    @Param('id') id: number,
  ): Promise<NotificationGroup | null> {
    return this.notificationGroupService.getNotificationGroupById(id);
  }

  @Put(':id')
  async updateNotificationGroup(
    @Param('id') id: number,
    @Body() updateDto: Prisma.NotificationGroupUpdateInput,
  ): Promise<NotificationGroup> {
    return this.notificationGroupService.updateNotificationGroup(id, updateDto);
  }

  @Delete(':id')
  async deleteNotificationGroup(
    @Param('id') id: number,
  ): Promise<NotificationGroup> {
    return this.notificationGroupService.deleteNotificationGroup(id);
  }
}
