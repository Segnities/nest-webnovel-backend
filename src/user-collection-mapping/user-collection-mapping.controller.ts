import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { UserCollectionMappingService } from './user-collection-mapping.service';
import { UserCollectionMapping, Prisma } from '@prisma/client';

@Controller('user-collection-mapping')
export class UserCollectionMappingController {
  constructor(
    private readonly userCollectionMappingService: UserCollectionMappingService,
  ) {}

  @Post()
  async createMapping(
    @Body() createMappingDto: Prisma.UserCollectionMappingCreateInput,
  ): Promise<UserCollectionMapping> {
    return this.userCollectionMappingService.createMapping(createMappingDto);
  }

  @Get('user/:userId')
  async getMappingsByUserId(
    @Param('userId') userId: number,
  ): Promise<UserCollectionMapping[]> {
    return this.userCollectionMappingService.getMappingsByUserId(userId);
  }

  @Get('collection/:collectionId')
  async getMappingsByCollectionId(
    @Param('collectionId') collectionId: number,
  ): Promise<UserCollectionMapping[]> {
    return this.userCollectionMappingService.getMappingsByCollectionId(
      collectionId,
    );
  }

  @Put(':id')
  async updateMapping(
    @Param('id') id: number,
    @Body() updateMappingDto: Prisma.UserCollectionMappingUpdateInput,
  ): Promise<UserCollectionMapping> {
    return this.userCollectionMappingService.updateMapping(
      id,
      updateMappingDto,
    );
  }

  @Delete(':id')
  async deleteMapping(@Param('id') id: number): Promise<UserCollectionMapping> {
    return this.userCollectionMappingService.deleteMapping(id);
  }

  @Get('user/:userId/count')
  async getUserCollectionCount(
    @Param('userId') userId: number,
  ): Promise<number> {
    return this.userCollectionMappingService.getUserCollectionCount(userId);
  }
}
