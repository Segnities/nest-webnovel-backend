import { Module } from '@nestjs/common';
import { CommendableTypeController } from './commendable-type.controller';
import { CommendableTypeService } from './commendable-type.service';
import { PrismaService } from '@/prisma/prisma.service';

@Module({
  controllers: [CommendableTypeController],
  providers: [CommendableTypeService, PrismaService]
})
export class CommendableTypeModule {}
