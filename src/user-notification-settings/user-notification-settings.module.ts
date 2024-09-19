import { Module } from '@nestjs/common';
import { UserNotificationSettingsController } from './user-notification-settings.controller';
import { UserNotificationSettingsService } from './user-notification-settings.service';
import { PrismaService } from '@/prisma/prisma.service';

@Module({
  controllers: [UserNotificationSettingsController],
  providers: [UserNotificationSettingsService, PrismaService],
})
export class UserNotificationSettingsModule {}
