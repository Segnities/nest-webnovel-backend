import { UserRatingService } from './user-rating.service';
export declare class UserRatingController {
    private readonly userRatingService;
    constructor(userRatingService: UserRatingService);
    createRating(body: {
        userId: number;
        novelId: number;
        rating: number;
    }): Promise<{
        id: number;
        rating: number;
        createdAt: Date;
        updatedAt: Date;
        novelId: number;
        userId: number;
    }>;
    updateRating(id: number, body: {
        userId: number;
        novelId: number;
        rating: number;
    }): Promise<{
        id: number;
        rating: number;
        createdAt: Date;
        updatedAt: Date;
        novelId: number;
        userId: number;
    }>;
    getRating(id: number): Promise<{
        id: number;
        rating: number;
        createdAt: Date;
        updatedAt: Date;
        novelId: number;
        userId: number;
    }>;
    getRatingsByNovel(novelId: number): Promise<{
        id: number;
        rating: number;
        createdAt: Date;
        updatedAt: Date;
        novelId: number;
        userId: number;
    }[]>;
    deleteRating(id: number): Promise<{
        id: number;
        rating: number;
        createdAt: Date;
        updatedAt: Date;
        novelId: number;
        userId: number;
    }>;
}
