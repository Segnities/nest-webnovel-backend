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
import { AlternativeTitleService } from './alternative-title.service';
import { AlternativeTitle, Prisma } from '@prisma/client';

@Controller('alternative-titles')
export class AlternativeTitleController {
  constructor(
    private readonly alternativeTitleService: AlternativeTitleService,
  ) {}

  @Get(':id')
  async findOneById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<AlternativeTitle> {
    return this.alternativeTitleService.findOneById(id);
  }

  @Get()
  async findAll(
    @Query() args?: Prisma.AlternativeTitleFindManyArgs,
  ): Promise<AlternativeTitle[]> {
    return this.alternativeTitleService.findAll(args);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createOne(
    @Body() data: Prisma.AlternativeTitleCreateInput,
  ): Promise<AlternativeTitle> {
    return this.alternativeTitleService.createOne(data);
  }

  @Post('many')
  @HttpCode(HttpStatus.CREATED)
  async createMany(
    @Body() data: Prisma.AlternativeTitleCreateManyInput[],
  ): Promise<Prisma.BatchPayload> {
    return this.alternativeTitleService.createMany(data);
  }

  @Put(':id')
  async updateOne(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: Prisma.AlternativeTitleUpdateInput,
  ): Promise<AlternativeTitle> {
    return this.alternativeTitleService.updateOne(id, data);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteOne(@Param('id', ParseIntPipe) id: number): Promise<void> {
    await this.alternativeTitleService.deleteOne(id);
  }

  @Get('novel/:novelId')
  async findByNovelId(
    @Param('novelId', ParseIntPipe) novelId: number,
  ): Promise<AlternativeTitle[]> {
    return this.alternativeTitleService.findByNovelId(novelId);
  }

  @Get('title/:title')
  async findByTitle(
    @Param('title') title: string,
  ): Promise<AlternativeTitle[]> {
    return this.alternativeTitleService.findByTitle(title);
  }
}
