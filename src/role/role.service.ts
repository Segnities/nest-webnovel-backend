import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Role, Prisma } from '@prisma/client';

@Injectable()
export class RoleService {
  constructor(private prisma: PrismaService) {}

  async createRole(data: Prisma.RoleCreateInput): Promise<Role> {
    return this.prisma.role.create({ data });
  }

  async getAllRoles(): Promise<Role[]> {
    return this.prisma.role.findMany();
  }

  async getRoleById(id: number): Promise<Role | null> {
    return this.prisma.role.findUnique({ where: { id } });
  }

  async getRoleByName(name: string): Promise<Role | null> {
    return this.prisma.role.findUnique({ where: { name } });
  }

  async updateRole(id: number, data: Prisma.RoleUpdateInput): Promise<Role> {
    return this.prisma.role.update({ where: { id }, data });
  }

  async deleteRole(id: number): Promise<Role> {
    return this.prisma.role.delete({ where: { id } });
  }

  async getUsersWithRole(
    roleId: number,
  ): Promise<{ id: number; username: string }[]> {
    return this.prisma.user.findMany({
      where: { roleId },
      select: { id: true, username: true },
    });
  }

  async assignRoleToUser(userId: number, roleId: number): Promise<void> {
    await this.prisma.user.update({
      where: { id: userId },
      data: { roleId },
    });
  }
}
