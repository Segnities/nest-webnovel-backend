import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ContentComplaint, Prisma } from '@prisma/client';

@Injectable()
export class ContentComplaintService {
  constructor(private prisma: PrismaService) {}

  async createContentComplaint(
    data: Prisma.ContentComplaintCreateInput,
  ): Promise<ContentComplaint> {
    return this.prisma.contentComplaint.create({
      data,
    });
  }

  async getContentComplaintById(id: number): Promise<ContentComplaint> {
    const complaint = await this.prisma.contentComplaint.findUnique({
      where: { id },
    });
    if (!complaint) {
      throw new NotFoundException(`ContentComplaint with ID ${id} not found`);
    }
    return complaint;
  }

  async updateContentComplaint(
    id: number,
    data: Prisma.ContentComplaintUpdateInput,
  ): Promise<ContentComplaint> {
    const complaint = await this.prisma.contentComplaint.findUnique({
      where: { id },
    });
    if (!complaint) {
      throw new NotFoundException(`ContentComplaint with ID ${id} not found`);
    }
    return this.prisma.contentComplaint.update({
      where: { id },
      data,
    });
  }

  async deleteContentComplaint(id: number): Promise<ContentComplaint> {
    const complaint = await this.prisma.contentComplaint.findUnique({
      where: { id },
    });
    if (!complaint) {
      throw new NotFoundException(`ContentComplaint with ID ${id} not found`);
    }
    return this.prisma.contentComplaint.delete({
      where: { id },
    });
  }

  async getAllContentComplaints(): Promise<ContentComplaint[]> {
    return this.prisma.contentComplaint.findMany();
  }

  async countComplaintsByReasonId(reasonId: number): Promise<number> {
    return this.prisma.contentComplaint.count({
      where: { reasonId },
    });
  }

  async resolveContentComplaint(id: number): Promise<ContentComplaint> {
    return this.prisma.contentComplaint.update({
      where: { id },
      data: { status: 'Resolved', resolvedAt: new Date() },
    });
  }

  async getComplaintsByUserId(userId: number): Promise<ContentComplaint[]> {
    return this.prisma.contentComplaint.findMany({
      where: { issuedBy: userId },
    });
  }
}
