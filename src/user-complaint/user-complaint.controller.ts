import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { UserComplaintService } from './user-complaint.service';
import { UserComplaint, Prisma } from '@prisma/client';

@Controller('user-complaint')
export class UserComplaintController {
  constructor(private readonly userComplaintService: UserComplaintService) {}

  @Post()
  async createComplaint(
    @Body() createComplaintDto: Prisma.UserComplaintCreateInput,
  ): Promise<UserComplaint> {
    return this.userComplaintService.createComplaint(createComplaintDto);
  }

  @Get('user/:userId')
  async getComplaintsByUserId(
    @Param('userId') userId: number,
  ): Promise<UserComplaint[]> {
    return this.userComplaintService.getComplaintsByUserId(userId);
  }

  @Get(':id')
  async getComplaintById(
    @Param('id') id: number,
  ): Promise<UserComplaint | null> {
    return this.userComplaintService.getComplaintById(id);
  }

  @Put(':id')
  async updateComplaint(
    @Param('id') id: number,
    @Body() updateComplaintDto: Prisma.UserComplaintUpdateInput,
  ): Promise<UserComplaint> {
    return this.userComplaintService.updateComplaint(id, updateComplaintDto);
  }

  @Delete(':id')
  async deleteComplaint(@Param('id') id: number): Promise<UserComplaint> {
    return this.userComplaintService.deleteComplaint(id);
  }

  @Get('user/:userId/count')
  async getComplaintsCountByUserId(
    @Param('userId') userId: number,
  ): Promise<number> {
    return this.userComplaintService.getComplaintsCountByUserId(userId);
  }
}
