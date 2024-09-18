import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { NovelService } from './novel.service';
import { Novel, Prisma } from '@prisma/client';

@Controller('novels')
export class NovelController {
  constructor(private readonly novelService: NovelService) {}

  @Get(':id')
  async findOneById(@Param('id', ParseIntPipe) id: number): Promise<Novel> {
    return this.novelService.findOneById(id);
  }

  @Get()
  async findAll(@Query() args: Prisma.NovelFindManyArgs): Promise<Novel[]> {
    return this.novelService.findAll(args);
  }

  @Post()
  async createOne(@Body() data: Prisma.NovelCreateInput): Promise<Novel> {
    return this.novelService.createOne(data);
  }

  @Post('many')
  async createMany(
    @Body() data: Prisma.NovelCreateManyInput,
  ): Promise<Novel[]> {
    return this.novelService.createMany(data);
  }

  @Put(':id')
  async updateOne(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: Prisma.NovelUpdateInput,
  ): Promise<Novel> {
    return this.novelService.updateOne(id, data);
  }

  @Delete(':id')
  async deleteOne(@Param('id', ParseIntPipe) id: number): Promise<Novel> {
    return this.novelService.deleteOne(id);
  }
}
