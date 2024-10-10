import { UserRatingService } from './user-rating.service';
import { Prisma } from '@prisma/client';
export declare class UserRatingController {
    private readonly userRatingService;
    constructor(userRatingService: UserRatingService);
    createRating(data: Prisma.UserRatingCreateInput): Promise<{
        id: number;
        createdAt: Date;
        userId: number;
        updatedAt: Date;
        novelId: number;
        isLiked: boolean;
    }>;
    updateRating(id: number, data: Prisma.UserRatingUpdateInput): Promise<{
        id: number;
        createdAt: Date;
        userId: number;
        updatedAt: Date;
        novelId: number;
        isLiked: boolean;
    }>;
    getRating(id: number): Promise<{
        id: number;
        createdAt: Date;
        userId: number;
        updatedAt: Date;
        novelId: number;
        isLiked: boolean;
    }>;
    deleteRating(id: number): Promise<{
        id: number;
        createdAt: Date;
        userId: number;
        updatedAt: Date;
        novelId: number;
        isLiked: boolean;
    }>;
}
