import { PrismaService } from '../prisma/prisma.service';
import { Role, Permission, Prisma } from '@prisma/client';
export declare class RoleService {
    private prisma;
    constructor(prisma: PrismaService);
    createRole(data: Prisma.RoleCreateInput): Promise<Role>;
    getAllRoles(): Promise<Role[]>;
    getRoleById(id: number): Promise<Role | null>;
    getRoleByName(name: string): Promise<Role | null>;
    updateRole(id: number, data: Prisma.RoleUpdateInput): Promise<Role>;
    deleteRole(id: number): Promise<Role>;
    getRoleWithPermissions(id: number): Promise<Role & {
        permissions: Permission[];
    }>;
    addPermissionToRole(roleId: number, permissionData: Prisma.PermissionCreateInput): Promise<Permission>;
    removePermissionFromRole(roleId: number, permissionId: number): Promise<Permission>;
    getUsersWithRole(roleId: number): Promise<{
        id: number;
        username: string;
    }[]>;
    assignRoleToUser(userId: number, roleId: number): Promise<void>;
}
