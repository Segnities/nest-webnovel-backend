import { PrismaService } from '../prisma/prisma.service';
import { Review, Prisma } from '@prisma/client';
export declare class ReviewService {
    private prisma;
    constructor(prisma: PrismaService);
    createReview(data: Prisma.ReviewCreateInput): Promise<Review>;
    getReviewById(id: number): Promise<Review | null>;
    getReviewsByNovel(novelId: number): Promise<Review[]>;
    updateReview(id: number, data: Prisma.ReviewUpdateInput): Promise<Review>;
    deleteReview(id: number): Promise<Review>;
}
