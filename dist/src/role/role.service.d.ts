import { PrismaService } from '../prisma/prisma.service';
import { Role, Prisma } from '@prisma/client';
export declare class RoleService {
    private prisma;
    constructor(prisma: PrismaService);
    createRole(data: Prisma.RoleCreateInput): Promise<Role>;
    getAllRoles(): Promise<Role[]>;
    getRoleById(id: number): Promise<Role | null>;
    getRoleByName(name: string): Promise<Role | null>;
    updateRole(id: number, data: Prisma.RoleUpdateInput): Promise<Role>;
    deleteRole(id: number): Promise<Role>;
    getUsersWithRole(roleId: number): Promise<{
        id: number;
        username: string;
    }[]>;
    assignRoleToUser(userId: number, roleId: number): Promise<void>;
}
