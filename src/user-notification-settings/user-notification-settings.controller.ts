import {
  Controller,
  Get,
  Put,
  Post,
  Delete,
  Param,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { UserNotificationSettings } from '@prisma/client';
import { UserNotificationSettingsService } from './user-notification-settings.service';

@Controller('user-notification-settings')
export class UserNotificationSettingsController {
  constructor(
    private readonly userNotificationSettingsService: UserNotificationSettingsService,
  ) {}

  @Get(':userId')
  async getUserNotificationSettings(
    @Param('userId', ParseIntPipe) userId: number,
  ): Promise<UserNotificationSettings[]> {
    return this.userNotificationSettingsService.getUserNotificationSettings(
      userId,
    );
  }

  @Put(':userId')
  async updateUserNotificationSetting(
    @Param('userId', ParseIntPipe) userId: number,
    @Body('isEnabled') isEnabled: boolean,
  ): Promise<UserNotificationSettings> {
    return this.userNotificationSettingsService.updateUserNotificationSetting(
      userId,
      isEnabled,
    );
  }

  @Post('default/:userId')
  async setDefaultNotificationSettings(
    @Param('userId', ParseIntPipe) userId: number,
  ): Promise<{ count: number }> {
    return this.userNotificationSettingsService.setDefaultNotificationSettings(
      userId,
    );
  }

  @Put('toggle-all/:userId')
  async toggleAllNotifications(
    @Param('userId', ParseIntPipe) userId: number,
    @Body('isEnabled') isEnabled: boolean,
  ): Promise<UserNotificationSettings[]> {
    return this.userNotificationSettingsService.toggleAllNotifications(
      userId,
      isEnabled,
    );
  }

  @Delete(':userId')
  async deleteUserNotificationSettings(
    @Param('userId', ParseIntPipe) userId: number,
  ): Promise<void> {
    return this.userNotificationSettingsService.deleteUserNotificationSettings(
      userId,
    );
  }
}
