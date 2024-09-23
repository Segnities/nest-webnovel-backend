import { Module } from '@nestjs/common';
import { ComplaintReasonController } from './complaint-reason.controller';
import { ComplaintReasonService } from './complaint-reason.service';
import { PrismaService } from '@/prisma/prisma.service';

@Module({
  controllers: [ComplaintReasonController],
  providers: [ComplaintReasonService, PrismaService],
})
export class ComplaintReasonModule {}
