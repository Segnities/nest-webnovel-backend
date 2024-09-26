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
import { Prisma } from '@prisma/client';

@Controller('user-rating')
export class UserRatingController {
  constructor(private readonly userRatingService: UserRatingService) {}

  @Post()
  async createRating(@Body() data: Prisma.UserRatingCreateInput) {
    return this.userRatingService.create(data);
  }

  @Put(':id')
  async updateRating(
    @Param('id') id: number,
    @Body() data: Prisma.UserRatingUpdateInput,
  ) {
    return this.userRatingService.update(id, data);
  }

  @Get(':id')
  async getRating(@Param('id') id: number) {
    return this.userRatingService.findOneById(id);
  }

  @Delete(':id')
  async deleteRating(@Param('id') id: number) {
    return this.userRatingService.delete(id);
  }
}
