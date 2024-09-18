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
import { TagService } from './tag.service';
import { Tag, Prisma } from '@prisma/client';

@Controller('tags')
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @Get(':id')
  async findOneById(@Param('id', ParseIntPipe) id: number): Promise<Tag> {
    return this.tagService.findOneById(id);
  }

  @Get()
  async findAll(@Query() args: Prisma.TagFindManyArgs): Promise<Tag[]> {
    return this.tagService.findAll(args);
  }

  @Post()
  async createOne(@Body() data: Prisma.TagCreateInput): Promise<Tag> {
    return this.tagService.createOne(data);
  }

  @Post('many')
  async createMany(
    @Body() data: Prisma.TagCreateManyInput,
  ): Promise<Prisma.BatchPayload> {
    return this.tagService.createMany(data);
  }

  @Put(':id')
  async updateOne(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: Prisma.TagUpdateInput,
  ): Promise<Tag> {
    return this.tagService.updateOne(id, data);
  }

  @Delete(':id')
  async deleteOne(@Param('id', ParseIntPipe) id: number): Promise<Tag> {
    return this.tagService.deleteOne(id);
  }
}
