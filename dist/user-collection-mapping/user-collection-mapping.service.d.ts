import { PrismaService } from '../prisma/prisma.service';
import { UserCollectionMapping, Prisma } from '@prisma/client';
export declare class UserCollectionMappingService {
    private prisma;
    constructor(prisma: PrismaService);
    createMapping(data: Prisma.UserCollectionMappingCreateInput): Promise<UserCollectionMapping>;
    getMappingsByUserId(userId: number): Promise<UserCollectionMapping[]>;
    getMappingsByCollectionId(collectionId: number): Promise<UserCollectionMapping[]>;
    updateMapping(id: number, data: Prisma.UserCollectionMappingUpdateInput): Promise<UserCollectionMapping>;
    deleteMapping(id: number): Promise<UserCollectionMapping>;
    getUserCollectionCount(userId: number): Promise<number>;
}
