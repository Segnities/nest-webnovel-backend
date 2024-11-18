import { Module } from '@nestjs/common';
import { NotificationTypeService } from './notification-type.service';
import { NotificationTypeController } from './notification-type.controller';
import { PrismaService } from '@/prisma/prisma.service';

@Module({
  providers: [NotificationTypeService, PrismaService],
  controllers: [NotificationTypeController],
})
export class NotificationTypeModule {}
