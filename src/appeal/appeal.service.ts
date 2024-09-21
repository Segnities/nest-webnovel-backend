import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Appeal, Prisma, ApprovalStatus } from '@prisma/client';

@Injectable()
export class AppealService {
  constructor(private prisma: PrismaService) {}

  async createAppeal(data: Prisma.AppealCreateInput): Promise<Appeal> {
    return this.prisma.appeal.create({ data });
  }

  async getAppealById(id: number): Promise<Appeal | null> {
    return this.prisma.appeal.findUnique({
      where: { id },
      include: {
        appeal: true,
        reviewedByUser: true,
        bans: true,
      },
    });
  }

  async getAllAppeals(params: {
    skip?: number;
    take?: number;
    where?: Prisma.AppealWhereInput;
    orderBy?: Prisma.AppealOrderByWithRelationInput;
  }): Promise<Appeal[]> {
    const { skip, take, where, orderBy } = params;
    return this.prisma.appeal.findMany({
      skip,
      take,
      where,
      orderBy,
      include: {
        appeal: true,
        reviewedByUser: true,
        bans: true,
      },
    });
  }

  async updateAppeal(
    id: number,
    data: Prisma.AppealUpdateInput,
  ): Promise<Appeal> {
    return this.prisma.appeal.update({
      where: { id },
      data,
      include: {
        appeal: true,
        reviewedByUser: true,
        bans: true,
      },
    });
  }

  async deleteAppeal(id: number): Promise<Appeal> {
    return this.prisma.appeal.delete({ where: { id } });
  }

  async reviewAppeal(
    id: number,
    reviewerId: number,
    status: ApprovalStatus,
  ): Promise<Appeal> {
    return this.prisma.appeal.update({
      where: { id },
      data: {
        status,
        reviewedAt: new Date(),
        reviewedByUser: { connect: { id: reviewerId } },
      },
      include: {
        appeal: true,
        reviewedByUser: true,
        bans: true,
      },
    });
  }

  async getAppealsByStatus(status: ApprovalStatus): Promise<Appeal[]> {
    return this.prisma.appeal.findMany({
      where: { status },
      include: {
        appeal: true,
        reviewedByUser: true,
        bans: true,
      },
    });
  }

  async getAppealsByUser(userId: number): Promise<Appeal[]> {
    return this.prisma.appeal.findMany({
      where: {
        bans: {
          some: {
            userId,
          },
        },
      },
      include: {
        appeal: true,
        reviewedByUser: true,
        bans: true,
      },
    });
  }

  async getPendingAppeals(): Promise<Appeal[]> {
    return this.getAppealsByStatus(ApprovalStatus.Pending);
  }

  async getAppealStatistics(): Promise<{ [key in ApprovalStatus]: number }> {
    const appeals = await this.prisma.appeal.groupBy({
      by: ['status'],
      _count: {
        status: true,
      },
    });

    return appeals.reduce(
      (acc, curr) => {
        acc[curr.status] = curr._count.status;
        return acc;
      },
      {} as { [key in ApprovalStatus]: number },
    );
  }

  async getRecentAppeals(limit: number = 10): Promise<Appeal[]> {
    return this.prisma.appeal.findMany({
      take: limit,
      orderBy: { createdAt: 'desc' },
      include: {
        appeal: true,
        reviewedByUser: true,
        bans: true,
      },
    });
  }
}
