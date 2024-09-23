import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { ContinueReadingService } from './continue-reading.service';
import { ContinueReading, Prisma } from '@prisma/client';

@Controller('continue-reading')
export class ContinueReadingController {
  constructor(
    private readonly continueReadingService: ContinueReadingService,
  ) {}

  @Post()
  async createContinueReading(
    @Body() data: Prisma.ContinueReadingCreateInput,
  ): Promise<ContinueReading> {
    return this.continueReadingService.createContinueReading(data);
  }

  @Get(':id')
  async getContinueReadingById(
    @Param('id') id: number,
  ): Promise<ContinueReading> {
    return this.continueReadingService.getContinueReadingById(id);
  }

  @Put(':id')
  async updateContinueReading(
    @Param('id') id: number,
    @Body() data: Prisma.ContinueReadingUpdateInput,
  ): Promise<ContinueReading> {
    return this.continueReadingService.updateContinueReading(id, data);
  }

  @Delete(':id')
  async deleteContinueReading(
    @Param('id') id: number,
  ): Promise<ContinueReading> {
    return this.continueReadingService.deleteContinueReading(id);
  }

  @Get('user/:userId')
  async getContinueReadingByUserId(
    @Param('userId') userId: number,
  ): Promise<ContinueReading[]> {
    return this.continueReadingService.getContinueReadingByUserId(userId);
  }

  @Put('progress')
  async updateProgress(
    @Body('userId') userId: number,
    @Body('novelId') novelId: number,
    @Body('progressPercentage') progressPercentage: number,
  ): Promise<ContinueReading> {
    return this.continueReadingService.updateProgress(
      userId,
      novelId,
      progressPercentage,
    );
  }

  @Get('novel/:novelId/users')
  async getUsersReadingNovel(
    @Param('novelId') novelId: number,
  ): Promise<ContinueReading[]> {
    return this.continueReadingService.getUsersReadingNovel(novelId);
  }

  @Get('novel/:novelId/count')
  async countUsersReadingNovel(
    @Param('novelId') novelId: number,
  ): Promise<number> {
    return this.continueReadingService.countUsersReadingNovel(novelId);
  }
}
