import { Module } from '@nestjs/common';
import { UserComplaintService } from './user-complaint.service';
import { UserComplaintController } from './user-complaint.controller';
import { PrismaService } from '@/prisma/prisma.service';

@Module({
  providers: [UserComplaintService, PrismaService],
  controllers: [UserComplaintController]
})
export class UserComplaintModule {}
