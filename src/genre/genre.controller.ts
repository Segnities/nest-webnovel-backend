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
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { GenreService } from './genre.service';
import { Genre, Prisma } from '@prisma/client';

@Controller('genres')
export class GenreController {
  constructor(private readonly genreService: GenreService) {}

  @Get(':id')
  async findOneById(@Param('id', ParseIntPipe) id: number): Promise<Genre> {
    return this.genreService.findOneById(id);
  }

  @Get()
  async findAll(@Query() args?: Prisma.GenreFindManyArgs): Promise<Genre[]> {
    return this.genreService.findAll(args);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createOne(@Body() data: Prisma.GenreCreateInput): Promise<Genre> {
    return this.genreService.createOne(data);
  }

  @Post('many')
  @HttpCode(HttpStatus.CREATED)
  async createMany(
    @Body() data: Prisma.GenreCreateManyInput[],
  ): Promise<Prisma.BatchPayload> {
    return this.genreService.createMany(data);
  }

  @Put(':id')
  async updateOne(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: Prisma.GenreUpdateInput,
  ): Promise<Genre> {
    return this.genreService.updateOne(id, data);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteOne(@Param('id', ParseIntPipe) id: number): Promise<void> {
    await this.genreService.deleteOne(id);
  }

  @Get('title/:title')
  async findByTitle(@Param('title') title: string): Promise<Genre | null> {
    return this.genreService.findByTitle(title);
  }
}
