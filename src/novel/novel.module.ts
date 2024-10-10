import { Module } from '@nestjs/common';
import { NovelService } from './novel.service';
import { PrismaService } from '@/prisma/prisma.service';
import { NovelController } from './novel.controller';
import { CloudinaryService } from '@/cloudinary/cloudinary.service';

@Module({
  providers: [NovelService, PrismaService, CloudinaryService],
  controllers: [NovelController],
})
export class NovelModule {}
