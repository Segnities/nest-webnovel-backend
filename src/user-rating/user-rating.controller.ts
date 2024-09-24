import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { UserRatingService } from './user-rating.service';

@Controller('user-rating')
export class UserRatingController {
  constructor(private readonly userRatingService: UserRatingService) {}

  @Post()
  async createRating(
    @Body() body: { userId: number; novelId: number; rating: number },
  ) {
    return this.userRatingService.createRating(
      body.userId,
      body.novelId,
      body.rating,
    );
  }

  @Put(':id')
  async updateRating(
    @Param('id') id: number,
    @Body() body: { userId: number; novelId: number; rating: number },
  ) {
    return this.userRatingService.updateRating(
      id,
      body.userId,
      body.novelId,
      body.rating,
    );
  }

  @Get(':id')
  async getRating(@Param('id') id: number) {
    return this.userRatingService.getUserRating(id);
  }

  @Get('novel/:novelId')
  async getRatingsByNovel(@Param('novelId') novelId: number) {
    return this.userRatingService.getRatingsByNovel(novelId);
  }

  @Delete(':id')
  async deleteRating(@Param('id') id: number) {
    return this.userRatingService.deleteRating(id);
  }
}
