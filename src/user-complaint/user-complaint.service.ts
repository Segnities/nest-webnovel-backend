import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UserComplaint, Prisma } from '@prisma/client';

@Injectable()
export class UserComplaintService {
  constructor(private prisma: PrismaService) {}

  async createComplaint(
    data: Prisma.UserComplaintCreateInput,
  ): Promise<UserComplaint> {
    return this.prisma.userComplaint.create({ data });
  }

  async getComplaintsByUserId(userId: number): Promise<UserComplaint[]> {
    return this.prisma.userComplaint.findMany({
      where: { userId },
      include: {
        reason: true,
        complaintTargetType: true,
      },
    });
  }

  async getComplaintById(id: number): Promise<UserComplaint | null> {
    return this.prisma.userComplaint.findUnique({
      where: { id },
      include: {
        reason: true,
        complaintTargetType: true,
      },
    });
  }

  async updateComplaint(
    id: number,
    data: Prisma.UserComplaintUpdateInput,
  ): Promise<UserComplaint> {
    return this.prisma.userComplaint.update({
      where: { id },
      data,
    });
  }

  async deleteComplaint(id: number): Promise<UserComplaint> {
    return this.prisma.userComplaint.delete({
      where: { id },
    });
  }

  async getComplaintsCountByUserId(userId: number): Promise<number> {
    return this.prisma.userComplaint.count({
      where: { userId },
    });
  }
}
