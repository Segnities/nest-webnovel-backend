import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { ReviewService } from './review.service';
import { Review, Prisma } from '@prisma/client';

@Controller('reviews')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Post()
  async createReview(
    @Body() createReviewDto: Prisma.ReviewCreateInput,
  ): Promise<Review> {
    return this.reviewService.createReview(createReviewDto);
  }

  @Get(':id')
  async getReviewById(@Param('id') id: number): Promise<Review | null> {
    return this.reviewService.getReviewById(id);
  }

  @Get('by-novel/:novelId')
  async getReviewsByNovel(
    @Param('novelId') novelId: number,
  ): Promise<Review[]> {
    return this.reviewService.getReviewsByNovel(novelId);
  }

  @Put(':id')
  async updateReview(
    @Param('id') id: number,
    @Body() updateReviewDto: Prisma.ReviewUpdateInput,
  ): Promise<Review> {
    return this.reviewService.updateReview(id, updateReviewDto);
  }

  @Delete(':id')
  async deleteReview(@Param('id') id: number): Promise<Review> {
    return this.reviewService.deleteReview(id);
  }
}
