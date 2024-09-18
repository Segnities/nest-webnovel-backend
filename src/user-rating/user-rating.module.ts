import { Module } from '@nestjs/common';
import { UserRatingController } from './user-rating.controller';
import { UserRatingService } from './user-rating.service';
import { PrismaService } from '@/prisma/prisma.service';

@Module({
  controllers: [UserRatingController],
  providers: [UserRatingService, PrismaService],
})
export class UserRatingModule {}
