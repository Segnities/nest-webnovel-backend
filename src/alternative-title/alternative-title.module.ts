import { Module } from '@nestjs/common';
import { AlternativeTitleController } from './alternative-title.controller';
import { AlternativeTitleService } from './alternative-title.service';
import { PrismaService } from '@/prisma/prisma.service';

@Module({
  controllers: [AlternativeTitleController],
  providers: [AlternativeTitleService, PrismaService],
})
export class AlternativeTitleModule {}
