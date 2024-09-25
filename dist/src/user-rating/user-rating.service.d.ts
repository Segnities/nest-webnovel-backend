import { UserRating } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
export declare class UserRatingService {
    private prisma;
    constructor(prisma: PrismaService);
    createRating(userId: number, novelId: number, rating: number): Promise<UserRating>;
    updateRating(id: number, userId: number, novelId: number, rating: number): Promise<UserRating>;
    getUserRating(id: number): Promise<UserRating | null>;
    getRatingsByNovel(novelId: number): Promise<UserRating[]>;
    deleteRating(id: number): Promise<UserRating>;
}
