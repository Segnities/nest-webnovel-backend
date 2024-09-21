import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Ban, Prisma } from '@prisma/client';

@Injectable()
export class BanService {
  constructor(private prisma: PrismaService) {}

  async createBan(data: Prisma.BanCreateInput): Promise<Ban> {
    return this.prisma.ban.create({ data });
  }

  async getBanById(id: number): Promise<Ban | null> {
    return this.prisma.ban.findUnique({ where: { id } });
  }

  async getAllBans(params: {
    skip?: number;
    take?: number;
    where?: Prisma.BanWhereInput;
    orderBy?: Prisma.BanOrderByWithRelationInput;
  }): Promise<Ban[]> {
    const { skip, take, where, orderBy } = params;
    return this.prisma.ban.findMany({ skip, take, where, orderBy });
  }

  async updateBan(id: number, data: Prisma.BanUpdateInput): Promise<Ban> {
    return this.prisma.ban.update({ where: { id }, data });
  }

  async deleteBan(id: number): Promise<Ban> {
    return this.prisma.ban.delete({ where: { id } });
  }

  async getUserActiveBans(userId: number): Promise<Ban[]> {
    const currentDate = new Date();
    return this.prisma.ban.findMany({
      where: {
        userId,
        banEnd: { gt: currentDate },
        appealed: false,
      },
    });
  }

  async appealBan(
    banId: number,
    appealData: Prisma.AppealCreateInput,
  ): Promise<Ban> {
    const ban = await this.prisma.ban.findUnique({ where: { id: banId } });
    if (!ban) {
      throw new NotFoundException(`Ban with ID ${banId} not found`);
    }

    return this.prisma.ban.update({
      where: { id: banId },
      data: {
        appealed: true,
        appeal: {
          create: appealData,
        },
      },
    });
  }

  async checkUserBanStatus(userId: number): Promise<boolean> {
    const activeBans = await this.getUserActiveBans(userId);
    return activeBans.length > 0;
  }

  async getExpiredBans(): Promise<Ban[]> {
    const currentDate = new Date();
    return this.prisma.ban.findMany({
      where: {
        banEnd: { lt: currentDate },
        appealed: false,
      },
    });
  }

  async extendBan(banId: number, newEndDate: Date): Promise<Ban> {
    return this.prisma.ban.update({
      where: { id: banId },
      data: { banEnd: newEndDate },
    });
  }

  async getBansByComplaintTarget(complaintTargetId: number): Promise<Ban[]> {
    return this.prisma.ban.findMany({
      where: { complaintTargetId },
      include: { user: true, complaintTargetType: true },
    });
  }

  async getBanHistory(userId: number): Promise<Ban[]> {
    return this.prisma.ban.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      include: { appeal: true },
    });
  }
}
