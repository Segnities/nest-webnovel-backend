export enum UserRole {
   SYSTEM = 'SYSTEM',
   ADMIN = 'ADMIN',
   MODERATOR = 'MODERATOR',
   DEFAULT_USER = 'DEFAULT_USER'
}

// src/common/constants/role.constants.ts
export const ROLE_IDS = {
   [UserRole.DEFAULT_USER]: 1,
   [UserRole.SYSTEM]: 2,
   [UserRole.ADMIN]: 3,
   [UserRole.MODERATOR]: 4,
} as const;

export const DEFAULT_ROLE = {
   id: ROLE_IDS[UserRole.DEFAULT_USER],
   name: UserRole.DEFAULT_USER
} as const;