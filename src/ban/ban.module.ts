import { Module } from '@nestjs/common';
import { BanController } from './ban.controller';
import { BanService } from './ban.service';
import { PrismaService } from '@/prisma/prisma.service';

@Module({
  controllers: [BanController],
  providers: [BanService, PrismaService],
})
export class BanModule {}
