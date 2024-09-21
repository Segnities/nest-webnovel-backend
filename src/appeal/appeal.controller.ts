import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
} from '@nestjs/common';
import { AppealService } from './appeal.service';
import { Appeal, Prisma, ApprovalStatus } from '@prisma/client';

@Controller('appeals')
export class AppealController {
  constructor(private readonly appealService: AppealService) {}

  @Post()
  async createAppeal(@Body() data: Prisma.AppealCreateInput): Promise<Appeal> {
    return this.appealService.createAppeal(data);
  }

  @Get(':id')
  async getAppealById(@Param('id') id: string): Promise<Appeal | null> {
    return this.appealService.getAppealById(Number(id));
  }

  @Get()
  async getAllAppeals(
    @Query('skip') skip?: string,
    @Query('take') take?: string,
    @Query('where') where?: string,
    @Query('orderBy') orderBy?: string,
  ): Promise<Appeal[]> {
    return this.appealService.getAllAppeals({
      skip: skip ? Number(skip) : undefined,
      take: take ? Number(take) : undefined,
      where: where ? JSON.parse(where) : undefined,
      orderBy: orderBy ? JSON.parse(orderBy) : undefined,
    });
  }

  @Put(':id')
  async updateAppeal(
    @Param('id') id: string,
    @Body() data: Prisma.AppealUpdateInput,
  ): Promise<Appeal> {
    return this.appealService.updateAppeal(Number(id), data);
  }

  @Delete(':id')
  async deleteAppeal(@Param('id') id: string): Promise<Appeal> {
    return this.appealService.deleteAppeal(Number(id));
  }

  @Put(':id/review')
  async reviewAppeal(
    @Param('id') id: string,
    @Body('reviewerId') reviewerId: number,
    @Body('status') status: ApprovalStatus,
  ): Promise<Appeal> {
    return this.appealService.reviewAppeal(Number(id), reviewerId, status);
  }

  @Get('status/:status')
  async getAppealsByStatus(
    @Param('status') status: ApprovalStatus,
  ): Promise<Appeal[]> {
    return this.appealService.getAppealsByStatus(status);
  }

  @Get('user/:userId')
  async getAppealsByUser(@Param('userId') userId: string): Promise<Appeal[]> {
    return this.appealService.getAppealsByUser(Number(userId));
  }

  @Get('pending')
  async getPendingAppeals(): Promise<Appeal[]> {
    return this.appealService.getPendingAppeals();
  }

  @Get('statistics')
  async getAppealStatistics(): Promise<{ [key in ApprovalStatus]: number }> {
    return this.appealService.getAppealStatistics();
  }

  @Get('recent')
  async getRecentAppeals(@Query('limit') limit?: string): Promise<Appeal[]> {
    return this.appealService.getRecentAppeals(
      limit ? Number(limit) : undefined,
    );
  }
}
