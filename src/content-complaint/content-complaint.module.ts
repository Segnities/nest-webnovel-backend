import { Module } from '@nestjs/common';
import { ContentComplaintController } from './content-complaint.controller';
import { ContentComplaintService } from './content-complaint.service';
import { PrismaService } from '@/prisma/prisma.service';

@Module({
  controllers: [ContentComplaintController],
  providers: [ContentComplaintService, PrismaService],
})
export class ContentComplaintModule {}
