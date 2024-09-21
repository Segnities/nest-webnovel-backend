import { Module } from '@nestjs/common';
import { AppealController } from './appeal.controller';
import { AppealService } from './appeal.service';
import { PrismaService } from '@/prisma/prisma.service';

@Module({
  controllers: [AppealController],
  providers: [AppealService, PrismaService],
})
export class AppealModule {}
