import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  UseGuards,
} from '@nestjs/common';
import { RoleService } from './role.service';
import { Role, Permission, Prisma } from '@prisma/client';
import { FirebaseAuthGuard } from '../auth/auth.guard';
import { RoleGuard } from '../role/role.guard';
import { Roles } from '../role/role.decorator';
import { ROLES } from './roles';

@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Post()
  @UseGuards(RoleGuard, FirebaseAuthGuard)
  @Roles(ROLES.ADMIN)
  async createRole(
    @Body() data: { name: string; description?: string },
  ): Promise<Role> {
    return this.roleService.createRole(data);
  }

  @Get()
  @UseGuards(RoleGuard, FirebaseAuthGuard)
  @Roles(ROLES.ADMIN, ROLES.MODERATOR)
  async getAllRoles(): Promise<Role[]> {
    return this.roleService.getAllRoles();
  }

  @Get(':id')
  @UseGuards(RoleGuard, FirebaseAuthGuard)
  @Roles(ROLES.ADMIN, ROLES.MODERATOR)
  async getRoleById(@Param('id') id: string): Promise<Role | null> {
    return this.roleService.getRoleById(Number(id));
  }

  @Get('name/:name')
  @UseGuards(RoleGuard, FirebaseAuthGuard)
  @Roles(ROLES.ADMIN, ROLES.MODERATOR)
  async getRoleByName(@Param('name') name: string): Promise<Role | null> {
    return this.roleService.getRoleByName(name);
  }

  @Put(':id')
  @UseGuards(RoleGuard, FirebaseAuthGuard)
  @Roles(ROLES.ADMIN)
  async updateRole(
    @Param('id') id: string,
    @Body() data: { name?: string; description?: string },
  ): Promise<Role> {
    return this.roleService.updateRole(Number(id), data);
  }

  @Delete(':id')
  @UseGuards(RoleGuard, FirebaseAuthGuard)
  @Roles(ROLES.ADMIN)
  async deleteRole(@Param('id') id: string): Promise<Role> {
    return this.roleService.deleteRole(Number(id));
  }

  @Get(':id/permissions')
  @UseGuards(RoleGuard, FirebaseAuthGuard)
  @Roles(ROLES.ADMIN)
  async getRoleWithPermissions(
    @Param('id') id: string,
  ): Promise<Role & { permissions: Permission[] }> {
    return this.roleService.getRoleWithPermissions(Number(id));
  }

  @Post(':id/permissions')
  @UseGuards(RoleGuard, FirebaseAuthGuard)
  @Roles(ROLES.ADMIN)
  async addPermissionToRole(
    @Param('id') id: string,
    @Body() permissionData: Prisma.PermissionCreateInput,
  ): Promise<Permission> {
    return this.roleService.addPermissionToRole(Number(id), permissionData);
  }

  @Delete(':roleId/permissions/:permissionId')
  @UseGuards(RoleGuard, FirebaseAuthGuard)
  @Roles(ROLES.ADMIN)
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
  @UseGuards(RoleGuard, FirebaseAuthGuard)
  @Roles(ROLES.ADMIN, ROLES.MODERATOR)
  async getUsersWithRole(
    @Param('id') id: string,
  ): Promise<{ id: number; username: string }[]> {
    return this.roleService.getUsersWithRole(Number(id));
  }

  @Post('assign')
  @UseGuards(RoleGuard, FirebaseAuthGuard)
  @Roles(ROLES.ADMIN)
  async assignRoleToUser(
    @Body() data: { userId: number; roleId: number },
  ): Promise<void> {
    await this.roleService.assignRoleToUser(data.userId, data.roleId);
  }
}
