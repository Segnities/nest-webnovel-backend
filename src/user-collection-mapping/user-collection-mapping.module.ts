import { Module } from '@nestjs/common';
import { UserCollectionMappingController } from './user-collection-mapping.controller';
import { UserCollectionMappingService } from './user-collection-mapping.service';
import { PrismaService } from '@/prisma/prisma.service';

@Module({
  controllers: [UserCollectionMappingController],
  providers: [UserCollectionMappingService, PrismaService]
})
export class UserCollectionMappingModule {}
