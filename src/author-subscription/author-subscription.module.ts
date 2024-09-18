import { Module } from '@nestjs/common';
import { AuthorSubscriptionService } from './author-subscription.service';
import { AuthorSubscriptionController } from './author-subscription.controller';
import { PrismaService } from '@/prisma/prisma.service';

@Module({
  providers: [AuthorSubscriptionService, PrismaService],
  controllers: [AuthorSubscriptionController],
})
export class AuthorSubscriptionModule {}
