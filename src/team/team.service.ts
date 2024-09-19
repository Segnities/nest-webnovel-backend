import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Team, User } from '@prisma/client';

@Injectable()
export class TeamService {
  constructor(private prisma: PrismaService) {}

  async createTeam(name: string): Promise<Team> {
    return this.prisma.team.create({
      data: { name },
    });
  }

  async getTeamById(id: number): Promise<Team | null> {
    return this.prisma.team.findUnique({
      where: { id },
      include: { users: true },
    });
  }

  async updateTeam(id: number, data: Partial<Team>): Promise<Team> {
    return this.prisma.team.update({
      where: { id },
      data,
    });
  }

  async deleteTeam(id: number): Promise<Team> {
    return this.prisma.team.delete({
      where: { id },
    });
  }

  async addUserToTeam(teamId: number, userId: number): Promise<Team> {
    return this.prisma.team.update({
      where: { id: teamId },
      data: {
        users: {
          connect: { id: userId },
        },
      },
      include: { users: true },
    });
  }

  async removeUserFromTeam(teamId: number, userId: number): Promise<Team> {
    return this.prisma.team.update({
      where: { id: teamId },
      data: {
        users: {
          disconnect: { id: userId },
        },
      },
      include: { users: true },
    });
  }

  async getTeamMembers(teamId: number): Promise<User[]> {
    const team = await this.prisma.team.findUnique({
      where: { id: teamId },
      include: { users: true },
    });
    return team?.users || [];
  }

  async updateTeamStats(teamId: number): Promise<Team> {
    const team = await this.prisma.team.findUnique({
      where: { id: teamId },
      include: { users: true },
    });

    if (!team) {
      throw new Error('Team not found');
    }

    const chaptersCount = await this.prisma.chapter.count({
      where: {
        novel: {
          author: {
            id: { in: team.users.map((user) => user.id) },
          },
        },
      },
    });

    const booksCount = await this.prisma.novel.count({
      where: {
        author: {
          id: { in: team.users.map((user) => user.id) },
        },
      },
    });

    return this.prisma.team.update({
      where: { id: teamId },
      data: {
        chapters_count: chaptersCount,
        books_count: booksCount,
      },
    });
  }
}
