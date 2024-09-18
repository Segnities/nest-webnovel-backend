import { Module } from '@nestjs/common';
import { NovelService } from './novel.service';
import { PrismaService } from '@/prisma/prisma.service';
import { NovelController } from './novel.controller';

@Module({
  providers: [NovelService, PrismaService],
  controllers: [NovelController],
})
export class NovelModule {}
