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
  ParseArrayPipe,
  UseGuards,
} from '@nestjs/common';
import { RoleGuard } from '../role/role.guard';
import { FirebaseAuthGuard } from '../auth/auth.guard';
import { NovelService } from './novel.service';
import {
  Novel,
  NovelFormat,
  NovelStatus,
  NovelTranslationStatus,
  Prisma,
} from '@prisma/client';
import { Roles } from '@/role/role.decorator';

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
  @UseGuards(FirebaseAuthGuard, RoleGuard)
  @Roles('ADMIN', 'MODERATOR')
  @HttpCode(HttpStatus.CREATED)
  async createOne(@Body() data: Prisma.NovelCreateInput): Promise<Novel> {
    return this.novelService.createOne(data);
  }

  @Post('many')
  @HttpCode(HttpStatus.CREATED)
  async createMany(
    @Body() data: Prisma.NovelCreateManyInput,
  ): Promise<Novel[]> {
    return this.novelService.createMany(data);
  }

  @Put(':id')
  @UseGuards(FirebaseAuthGuard, RoleGuard)
  @Roles('ADMIN', 'MODERATOR')
  async updateOne(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: Prisma.NovelUpdateInput,
  ): Promise<Novel> {
    return this.novelService.updateOne(id, data);
  }

  @Delete(':id')
  @UseGuards(FirebaseAuthGuard, RoleGuard)
  @Roles('ADMIN')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteOne(@Param('id', ParseIntPipe) id: number): Promise<Novel> {
    return this.novelService.deleteOne(id);
  }
  @Get('author/:authorId')
  async findByAuthor(
    @Param('authorId', ParseIntPipe) authorId: number,
  ): Promise<Novel[]> {
    return this.novelService.findByAuthor(authorId);
  }

  @Get('status/:status')
  async findByStatus(@Param('status') status: NovelStatus): Promise<Novel[]> {
    return this.novelService.findByStatus(status);
  }

  @Get('format/:format')
  async findByFormat(@Param('format') format: NovelFormat): Promise<Novel[]> {
    return this.novelService.findByFormat(format);
  }

  @Get('translation-status/:status')
  async findByTranslationStatus(
    @Param('status') status: NovelTranslationStatus,
  ): Promise<Novel[]> {
    return this.novelService.findByTranslationStatus(status);
  }

  @Get('tag/:tagId')
  async findByTag(
    @Param('tagId', ParseIntPipe) tagId: number,
  ): Promise<Novel[]> {
    return this.novelService.findByTag(tagId);
  }

  @Get('tags')
  async findByTags(
    @Query('ids', new ParseArrayPipe({ items: Number, separator: ',' }))
    tagIds: number[],
  ): Promise<Novel[]> {
    return this.novelService.findByTags(tagIds);
  }

  @Get('genre/:genreId')
  async findByGenre(
    @Param('genreId', ParseIntPipe) genreId: number,
  ): Promise<Novel[]> {
    return this.novelService.findByGenre(genreId);
  }

  @Get('genres')
  async findByGenres(
    @Query('ids', new ParseArrayPipe({ items: Number, separator: ',' }))
    genreIds: number[],
  ): Promise<Novel[]> {
    return this.novelService.findByGenres(genreIds);
  }

  @Get('country/:countryId')
  async findByCountry(
    @Param('countryId', ParseIntPipe) countryId: number,
  ): Promise<Novel[]> {
    return this.novelService.findByCountry(countryId);
  }

  @Get('countries')
  async findByCountries(
    @Query('ids', new ParseArrayPipe({ items: Number, separator: ',' }))
    countryIds: number[],
  ): Promise<Novel[]> {
    return this.novelService.findByCountries(countryIds);
  }

  @Get('top-rated')
  async getTopRatedNovels(
    @Query('limit', ParseIntPipe) limit: number = 10,
  ): Promise<Novel[]> {
    return this.novelService.getTopRatedNovels(limit);
  }

  @Get('most-viewed')
  async getMostViewedNovels(
    @Query('limit', ParseIntPipe) limit: number = 10,
  ): Promise<Novel[]> {
    return this.novelService.getMostViewedNovels(limit);
  }

  @Get('recently-updated')
  async getRecentlyUpdatedNovels(
    @Query('limit', ParseIntPipe) limit: number = 10,
  ): Promise<Novel[]> {
    return this.novelService.getRecentlyUpdatedNovels(limit);
  }

  @Get('search')
  async searchNovels(@Query('term') searchTerm: string): Promise<Novel[]> {
    return this.novelService.searchNovels(searchTerm);
  }

  @Get(':id/chapters')
  async getNovelWithChapters(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Novel & { chapters: any[] }> {
    return this.novelService.getNovelWithChapters(id);
  }
  

  @Put(':id/views')
  async updateNovelViews(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Novel> {
    return this.novelService.updateNovelViews(id);
  }

  @Get(':id/stats')
  async getNovelStats(@Param('id', ParseIntPipe) id: number): Promise<any> {
    return this.novelService.getNovelStats(id);
  }

  @Get(':id/related')
  async getRelatedNovels(
    @Param('id', ParseIntPipe) id: number,
    @Query('limit', ParseIntPipe) limit: number = 5,
  ): Promise<Novel[]> {
    return this.novelService.getRelatedNovels(id, limit);
  }

  @Get('release-year/:year')
  async getNovelsByReleaseYear(
    @Param('year', ParseIntPipe) year: number,
  ): Promise<Novel[]> {
    return this.novelService.getNovelsByReleaseYear(year);
  }

  @Get('adult')
  async getAdultNovels(): Promise<Novel[]> {
    return this.novelService.getAdultNovels();
  }

  @Get('non-adult')
  async getNonAdultNovels(): Promise<Novel[]> {
    return this.novelService.getNonAdultNovels();
  }

  @Get('author-name/:name')
  async getNovelsByAuthorName(@Param('name') name: string): Promise<Novel[]> {
    return this.novelService.getNovelsByAuthorName(name);
  }

  @Get('alternative-title/:title')
  async getNovelsByAlternativeTitle(
    @Param('title') title: string,
  ): Promise<Novel[]> {
    return this.novelService.getNovelsByAlternativeTitle(title);
  }

  @Put(':id/rating')
  async updateNovelRating(
    @Param('id', ParseIntPipe) id: number,
    @Body('rating', ParseIntPipe) rating: number,
  ): Promise<Novel> {
    return this.novelService.updateNovelRating(id, rating);
  }
}
