import { Module } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { NotificationController } from './notification.controller';
import { PrismaService } from '@/prisma/prisma.service';
import { FirebaseAdminService } from '@/firebase.config';

@Module({
  providers: [NotificationService, PrismaService, FirebaseAdminService],
  controllers: [NotificationController],
})
export class NotificationModule {}
