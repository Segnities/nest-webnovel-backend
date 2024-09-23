import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ComplaintReason, Prisma } from '@prisma/client';

@Injectable()
export class ComplaintReasonService {
  constructor(private prisma: PrismaService) {}

  async createComplaintReason(
    data: Prisma.ComplaintReasonCreateInput,
  ): Promise<ComplaintReason> {
    return this.prisma.complaintReason.create({
      data,
    });
  }

  async getComplaintReasonById(id: number): Promise<ComplaintReason> {
    const reason = await this.prisma.complaintReason.findUnique({
      where: { id },
    });
    if (!reason) {
      throw new NotFoundException(`ComplaintReason with ID ${id} not found`);
    }
    return reason;
  }

  async updateComplaintReason(
    id: number,
    data: Prisma.ComplaintReasonUpdateInput,
  ): Promise<ComplaintReason> {
    const reason = await this.prisma.complaintReason.findUnique({
      where: { id },
    });
    if (!reason) {
      throw new NotFoundException(`ComplaintReason with ID ${id} not found`);
    }
    return this.prisma.complaintReason.update({
      where: { id },
      data,
    });
  }

  async deleteComplaintReason(id: number): Promise<ComplaintReason> {
    const reason = await this.prisma.complaintReason.findUnique({
      where: { id },
    });
    if (!reason) {
      throw new NotFoundException(`ComplaintReason with ID ${id} not found`);
    }
    return this.prisma.complaintReason.delete({
      where: { id },
    });
  }

  async getAllComplaintReasons(): Promise<ComplaintReason[]> {
    return this.prisma.complaintReason.findMany();
  }

  async countComplaintsByReasonId(reasonId: number): Promise<number> {
    return this.prisma.userComplaint.count({
      where: { reasonId },
    });
  }
}
