import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { ComplaintReasonService } from './complaint-reason.service';
import { ComplaintReason, Prisma } from '@prisma/client';

@Controller('complaint-reason')
export class ComplaintReasonController {
  constructor(
    private readonly complaintReasonService: ComplaintReasonService,
  ) {}

  @Post()
  async createComplaintReason(
    @Body() data: Prisma.ComplaintReasonCreateInput,
  ): Promise<ComplaintReason> {
    return this.complaintReasonService.createComplaintReason(data);
  }

  @Get(':id')
  async getComplaintReasonById(
    @Param('id') id: number,
  ): Promise<ComplaintReason> {
    return this.complaintReasonService.getComplaintReasonById(id);
  }

  @Put(':id')
  async updateComplaintReason(
    @Param('id') id: number,
    @Body() data: Prisma.ComplaintReasonUpdateInput,
  ): Promise<ComplaintReason> {
    return this.complaintReasonService.updateComplaintReason(id, data);
  }

  @Delete(':id')
  async deleteComplaintReason(
    @Param('id') id: number,
  ): Promise<ComplaintReason> {
    return this.complaintReasonService.deleteComplaintReason(id);
  }

  @Get()
  async getAllComplaintReasons(): Promise<ComplaintReason[]> {
    return this.complaintReasonService.getAllComplaintReasons();
  }

  @Get('count/:reasonId')
  async countComplaintsByReasonId(
    @Param('reasonId') reasonId: number,
  ): Promise<number> {
    return this.complaintReasonService.countComplaintsByReasonId(reasonId);
  }
}
