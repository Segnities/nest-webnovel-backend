import { UserCollectionMappingService } from './user-collection-mapping.service';
import { UserCollectionMapping, Prisma } from '@prisma/client';
export declare class UserCollectionMappingController {
    private readonly userCollectionMappingService;
    constructor(userCollectionMappingService: UserCollectionMappingService);
    createMapping(createMappingDto: Prisma.UserCollectionMappingCreateInput): Promise<UserCollectionMapping>;
    getMappingsByUserId(userId: number): Promise<UserCollectionMapping[]>;
    getMappingsByCollectionId(collectionId: number): Promise<UserCollectionMapping[]>;
    updateMapping(id: number, updateMappingDto: Prisma.UserCollectionMappingUpdateInput): Promise<UserCollectionMapping>;
    deleteMapping(id: number): Promise<UserCollectionMapping>;
    getUserCollectionCount(userId: number): Promise<number>;
}
