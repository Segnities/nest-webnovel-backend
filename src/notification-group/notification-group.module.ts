import { Module } from '@nestjs/common';
import { NotificationGroupController } from './notification-group.controller';
import { NotificationGroupService } from './notification-group.service';
import { PrismaService } from '@/prisma/prisma.service';

@Module({
  controllers: [NotificationGroupController],
  providers: [NotificationGroupService, PrismaService],
})
export class NotificationGroupModule {}
