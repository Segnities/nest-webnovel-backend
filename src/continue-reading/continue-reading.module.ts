import { Module } from '@nestjs/common';
import { ContinueReadingController } from './continue-reading.controller';
import { ContinueReadingService } from './continue-reading.service';
import { PrismaService } from '@/prisma/prisma.service';

@Module({
  controllers: [ContinueReadingController],
  providers: [ContinueReadingService, PrismaService],
})
export class ContinueReadingModule {}
