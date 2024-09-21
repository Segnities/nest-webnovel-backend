import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { RoleService } from './role.service';
import { Role, Permission, Prisma } from '@prisma/client';

@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Post()
  async createRole(
    @Body() data: { name: string; description?: string },
  ): Promise<Role> {
    return this.roleService.createRole(data);
  }

  @Get()
  async getAllRoles(): Promise<Role[]> {
    return this.roleService.getAllRoles();
  }

  @Get(':id')
  async getRoleById(@Param('id') id: string): Promise<Role | null> {
    return this.roleService.getRoleById(Number(id));
  }

  @Get('name/:name')
  async getRoleByName(@Param('name') name: string): Promise<Role | null> {
    return this.roleService.getRoleByName(name);
  }

  @Put(':id')
  async updateRole(
    @Param('id') id: string,
    @Body() data: { name?: string; description?: string },
  ): Promise<Role> {
    return this.roleService.updateRole(Number(id), data);
  }

  @Delete(':id')
  async deleteRole(@Param('id') id: string): Promise<Role> {
    return this.roleService.deleteRole(Number(id));
  }

  @Get(':id/permissions')
  async getRoleWithPermissions(
    @Param('id') id: string,
  ): Promise<Role & { permissions: Permission[] }> {
    return this.roleService.getRoleWithPermissions(Number(id));
  }

  @Post(':id/permissions')
  async addPermissionToRole(
    @Param('id') id: string,
    @Body() permissionData: Prisma.PermissionCreateInput,
  ): Promise<Permission> {
    return this.roleService.addPermissionToRole(Number(id), permissionData);
  }

  @Delete(':roleId/permissions/:permissionId')
  async removePermissionFromRole(
    @Param('roleId') roleId: string,
    @Param('permissionId') permissionId: string,
  ): Promise<Permission> {
    return this.roleService.removePermissionFromRole(
      Number(roleId),
      Number(permissionId),
    );
  }

  @Get(':id/users')
  async getUsersWithRole(
    @Param('id') id: string,
  ): Promise<{ id: number; username: string }[]> {
    return this.roleService.getUsersWithRole(Number(id));
  }

  @Post('assign')
  async assignRoleToUser(
    @Body() data: { userId: number; roleId: number },
  ): Promise<void> {
    await this.roleService.assignRoleToUser(data.userId, data.roleId);
  }
}
