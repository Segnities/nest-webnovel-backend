import { ReviewService } from './review.service';
import { Review, Prisma } from '@prisma/client';
export declare class ReviewController {
    private readonly reviewService;
    constructor(reviewService: ReviewService);
    createReview(createReviewDto: Prisma.ReviewCreateInput): Promise<Review>;
    getReviewById(id: number): Promise<Review | null>;
    getReviewsByNovel(novelId: number): Promise<Review[]>;
    updateReview(id: number, updateReviewDto: Prisma.ReviewUpdateInput): Promise<Review>;
    deleteReview(id: number): Promise<Review>;
}
