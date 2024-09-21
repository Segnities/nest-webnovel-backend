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
import { BanService } from './ban.service';
import { Ban, Prisma } from '@prisma/client';

@Controller('bans')
export class BanController {
  constructor(private readonly banService: BanService) {}

  @Post()
  async createBan(@Body() data: Prisma.BanCreateInput): Promise<Ban> {
    return this.banService.createBan(data);
  }

  @Get(':id')
  async getBanById(@Param('id') id: string): Promise<Ban | null> {
    return this.banService.getBanById(Number(id));
  }

  @Get()
  async getAllBans(
    @Query('skip') skip?: string,
    @Query('take') take?: string,
    @Query('where') where?: string,
    @Query('orderBy') orderBy?: string,
  ): Promise<Ban[]> {
    return this.banService.getAllBans({
      skip: skip ? Number(skip) : undefined,
      take: take ? Number(take) : undefined,
      where: where ? JSON.parse(where) : undefined,
      orderBy: orderBy ? JSON.parse(orderBy) : undefined,
    });
  }

  @Put(':id')
  async updateBan(
    @Param('id') id: string,
    @Body() data: Prisma.BanUpdateInput,
  ): Promise<Ban> {
    return this.banService.updateBan(Number(id), data);
  }

  @Delete(':id')
  async deleteBan(@Param('id') id: string): Promise<Ban> {
    return this.banService.deleteBan(Number(id));
  }

  @Get('user/:userId/active')
  async getUserActiveBans(@Param('userId') userId: string): Promise<Ban[]> {
    return this.banService.getUserActiveBans(Number(userId));
  }

  @Post(':id/appeal')
  async appealBan(
    @Param('id') id: string,
    @Body() appealData: Prisma.AppealCreateInput,
  ): Promise<Ban> {
    return this.banService.appealBan(Number(id), appealData);
  }

  @Get('user/:userId/status')
  async checkUserBanStatus(@Param('userId') userId: string): Promise<boolean> {
    return this.banService.checkUserBanStatus(Number(userId));
  }

  @Get('expired')
  async getExpiredBans(): Promise<Ban[]> {
    return this.banService.getExpiredBans();
  }

  @Put(':id/extend')
  async extendBan(
    @Param('id') id: string,
    @Body('newEndDate') newEndDate: string,
  ): Promise<Ban> {
    return this.banService.extendBan(Number(id), new Date(newEndDate));
  }

  @Get('complaint-target/:targetId')
  async getBansByComplaintTarget(
    @Param('targetId') targetId: string,
  ): Promise<Ban[]> {
    return this.banService.getBansByComplaintTarget(Number(targetId));
  }

  @Get('user/:userId/history')
  async getBanHistory(@Param('userId') userId: string): Promise<Ban[]> {
    return this.banService.getBanHistory(Number(userId));
  }
}
