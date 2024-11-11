import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Param,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { ContinueReadingService } from './continue-reading.service';
import { ContinueReading, Prisma } from '@prisma/client';
import { CreateContinueReadingDto } from './dto/CreateContinueReadingDto';

@Controller('continue-reading')
export class ContinueReadingController {
  constructor(
    private readonly continueReadingService: ContinueReadingService,
  ) {}

  @Post()
  async createContinueReading(
    @Body() data: CreateContinueReadingDto,
  ): Promise<ContinueReading> {
    return this.continueReadingService.createContinueReading(data);
  }

  @Post('progress')
  async createOrUpdateProgress(
    @Body() data: CreateContinueReadingDto
  ) {
    return this.continueReadingService.createOrUpdateReadingProgress(data);
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
    @Param('id', ParseIntPipe) id: number,
  ): Promise<ContinueReading> {
    return this.continueReadingService.deleteContinueReading(id);
  }

  @Get('user/:userId')
  async getContinueReadingByUserId(
    @Param('userId', ParseIntPipe) userId: number,
  ): Promise<ContinueReading[]> {
    return this.continueReadingService.getContinueReadingByUserId(userId);
  }

}
