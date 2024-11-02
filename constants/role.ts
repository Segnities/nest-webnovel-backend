export enum UserRole {
   SYSTEM = 'SYSTEM',
   ADMIN = 'ADMIN',
   MODERATOR = 'MODERATOR',
   DEFAULT_USER = 'DEFAULT_USER'
}

// src/common/constants/role.constants.ts
export const ROLE_IDS = {
   [UserRole.SYSTEM]: 1,
   [UserRole.ADMIN]: 2,
   [UserRole.MODERATOR]: 3,
   [UserRole.DEFAULT_USER]: 4,
} as const;

export const DEFAULT_ROLE = {
   id: ROLE_IDS[UserRole.DEFAULT_USER],
   name: UserRole.DEFAULT_USER
} as const;