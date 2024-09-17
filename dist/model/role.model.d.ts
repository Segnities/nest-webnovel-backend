import { User } from './user.model';
import { Permission } from './permission.model';
export declare class Role {
    id: number;
    name: string;
    description?: string;
    users: User[];
    permissions: Permission[];
}
