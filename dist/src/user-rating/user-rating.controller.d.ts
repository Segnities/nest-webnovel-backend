import { UserRatingService } from './user-rating.service';
import { Prisma } from '@prisma/client';
export declare class UserRatingController {
    private readonly userRatingService;
    constructor(userRatingService: UserRatingService);
    createRating(data: Prisma.UserRatingCreateInput): Promise<{
        id: number;
        isLiked: boolean;
        createdAt: Date;
        updatedAt: Date;
        novelId: number;
        userId: number;
    }>;
    updateRating(id: number, data: Prisma.UserRatingUpdateInput): Promise<{
        id: number;
        isLiked: boolean;
        createdAt: Date;
        updatedAt: Date;
        novelId: number;
        userId: number;
    }>;
    getRating(id: number): Promise<{
        id: number;
        isLiked: boolean;
        createdAt: Date;
        updatedAt: Date;
        novelId: number;
        userId: number;
    }>;
    deleteRating(id: number): Promise<{
        id: number;
        isLiked: boolean;
        createdAt: Date;
        updatedAt: Date;
        novelId: number;
        userId: number;
    }>;
}
