import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { ContentComplaintService } from './content-complaint.service';
import { ContentComplaint, Prisma } from '@prisma/client';

@Controller('content-complaint')
export class ContentComplaintController {
  constructor(
    private readonly contentComplaintService: ContentComplaintService,
  ) {}

  @Post()
  async createContentComplaint(
    @Body() data: Prisma.ContentComplaintCreateInput,
  ): Promise<ContentComplaint> {
    return this.contentComplaintService.createContentComplaint(data);
  }

  @Get(':id')
  async getContentComplaintById(
    @Param('id') id: number,
  ): Promise<ContentComplaint> {
    return this.contentComplaintService.getContentComplaintById(id);
  }

  @Put(':id')
  async updateContentComplaint(
    @Param('id') id: number,
    @Body() data: Prisma.ContentComplaintUpdateInput,
  ): Promise<ContentComplaint> {
    return this.contentComplaintService.updateContentComplaint(id, data);
  }

  @Delete(':id')
  async deleteContentComplaint(
    @Param('id') id: number,
  ): Promise<ContentComplaint> {
    return this.contentComplaintService.deleteContentComplaint(id);
  }

  @Get()
  async getAllContentComplaints(): Promise<ContentComplaint[]> {
    return this.contentComplaintService.getAllContentComplaints();
  }

  @Get('count/reason/:reasonId')
  async countComplaintsByReasonId(
    @Param('reasonId') reasonId: number,
  ): Promise<number> {
    return this.contentComplaintService.countComplaintsByReasonId(reasonId);
  }

  @Put('resolve/:id')
  async resolveContentComplaint(
    @Param('id') id: number,
  ): Promise<ContentComplaint> {
    return this.contentComplaintService.resolveContentComplaint(id);
  }

  @Get('user/:userId')
  async getComplaintsByUserId(
    @Param('userId') userId: number,
  ): Promise<ContentComplaint[]> {
    return this.contentComplaintService.getComplaintsByUserId(userId);
  }
}
