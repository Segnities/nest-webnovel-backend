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
import { CountryService } from './country.service';
import { Country, Novel, Prisma } from '@prisma/client';

@Controller('countries')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Get(':id')
  async findOneById(@Param('id', ParseIntPipe) id: number): Promise<Country> {
    return this.countryService.findOneById(id);
  }

  @Get()
  async findAll(
    @Query() args?: Prisma.CountryFindManyArgs,
  ): Promise<Country[]> {
    return this.countryService.findAll(args);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createOne(@Body() data: Prisma.CountryCreateInput): Promise<Country> {
    return this.countryService.createOne(data);
  }

  @Post('many')
  @HttpCode(HttpStatus.CREATED)
  async createMany(
    @Body() data: Prisma.CountryCreateManyInput[],
  ): Promise<Prisma.BatchPayload> {
    return this.countryService.createMany(data);
  }

  @Put(':id')
  async updateOne(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: Prisma.CountryUpdateInput,
  ): Promise<Country> {
    return this.countryService.updateOne(id, data);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteOne(@Param('id', ParseIntPipe) id: number): Promise<void> {
    await this.countryService.deleteOne(id);
  }

  @Get('title/:title')
  async findByTitle(@Param('title') title: string): Promise<Country | null> {
    return this.countryService.findByTitle(title);
  }

  @Get('with-novel-count')
  async getCountriesWithNovelCount(): Promise<
    { id: number; title: string; novelCount: number }[]
  > {
    return this.countryService.getCountriesWithNovelCount();
  }

  @Get('top')
  async getTopCountriesByNovelCount(
    @Query('limit', ParseIntPipe) limit: number = 10,
  ): Promise<{ id: number; title: string; novelCount: number }[]> {
    return this.countryService.getTopCountriesByNovelCount(limit);
  }

  @Get(':id/novels')
  async getNovelsByCountry(
    @Param('id', ParseIntPipe) id: number,
    @Query() args?: Prisma.NovelFindManyArgs,
  ): Promise<Novel[]> {
    return this.countryService.getNovelsByCountry(id, args);
  }

  @Get('search/:term')
  async searchCountries(@Param('term') term: string): Promise<Country[]> {
    return this.countryService.searchCountries(term);
  }

  @Get('stats')
  async getCountryStats(): Promise<{
    totalCountries: number;
    totalNovels: number;
    averageNovelsPerCountry: number;
  }> {
    return this.countryService.getCountryStats();
  }

  @Post('update-novel-count')
  @HttpCode(HttpStatus.NO_CONTENT)
  async updateNovelCount(): Promise<void> {
    await this.countryService.updateNovelCount();
  }
}
