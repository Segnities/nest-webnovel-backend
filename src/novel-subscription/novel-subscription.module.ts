import { Module } from '@nestjs/common';
import { NovelSubscriptionController } from './novel-subscription.controller';
import { NovelSubscriptionService } from './novel-subscription.service';
import { PrismaService } from '@/prisma/prisma.service';

@Module({
  controllers: [NovelSubscriptionController],
  providers: [NovelSubscriptionService, PrismaService]
})
export class NovelSubscriptionModule {}
