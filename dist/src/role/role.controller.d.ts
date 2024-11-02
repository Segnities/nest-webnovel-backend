import { RoleService } from './role.service';
import { Role } from '@prisma/client';
export declare class RoleController {
    private readonly roleService;
    constructor(roleService: RoleService);
    createRole(data: {
        name: string;
        description?: string;
    }): Promise<Role>;
    getAllRoles(): Promise<Role[]>;
    getRoleById(id: string): Promise<Role | null>;
    getRoleByName(name: string): Promise<Role | null>;
    updateRole(id: string, data: {
        name?: string;
        description?: string;
    }): Promise<Role>;
    deleteRole(id: string): Promise<Role>;
    getUsersWithRole(id: string): Promise<{
        id: number;
        username: string;
    }[]>;
    assignRoleToUser(data: {
        userId: number;
        roleId: number;
    }): Promise<void>;
}
