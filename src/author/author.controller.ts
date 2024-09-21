import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
  UseGuards,
} from '@nestjs/common';
import { AuthorService } from './author.service';
import { FirebaseAuthGuard } from '../auth/auth.guard';
import { RoleGuard } from '../role/role.guard';
import { Roles } from '../role/role.decorator';
import { Author, Novel, Prisma } from '@prisma/client';

@Controller('authors')
@UseGuards(FirebaseAuthGuard)
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @Post()
  @UseGuards(RoleGuard)
  @Roles('ADMIN', 'MODERATOR')
  async createAuthor(@Body() data: Prisma.AuthorCreateInput): Promise<Author> {
    return this.authorService.createAuthor(data);
  }

  @Get(':id')
  async getAuthorById(@Param('id') id: string): Promise<Author | null> {
    return this.authorService.getAuthorById(Number(id));
  }

  @Get('name/:name')
  async getAuthorByName(@Param('name') name: string): Promise<Author | null> {
    return this.authorService.getAuthorByName(name);
  }

  @Put(':id')
  @UseGuards(RoleGuard)
  @Roles('ADMIN', 'MODERATOR')
  async updateAuthor(
    @Param('id') id: string,
    @Body() data: Prisma.AuthorUpdateInput,
  ): Promise<Author> {
    return this.authorService.updateAuthor(Number(id), data);
  }

  @Delete(':id')
  @UseGuards(RoleGuard)
  @Roles('ADMIN')
  async deleteAuthor(@Param('id') id: string): Promise<Author> {
    return this.authorService.deleteAuthor(Number(id));
  }

  @Get()
  async getAllAuthors(
    @Query('skip') skip?: string,
    @Query('take') take?: string,
    @Query('orderBy') orderBy?: string,
  ): Promise<Author[]> {
    return this.authorService.getAllAuthors({
      skip: skip ? Number(skip) : undefined,
      take: take ? Number(take) : undefined,
      orderBy: orderBy ? JSON.parse(orderBy) : undefined,
    });
  }

  @Get(':id/novels')
  async getAuthorNovels(@Param('id') id: string): Promise<Novel[]> {
    return this.authorService.getAuthorNovels(Number(id));
  }

  @Get(':id/subscribers')
  async getAuthorSubscribers(@Param('id') id: string): Promise<number> {
    return this.authorService.getAuthorSubscribers(Number(id));
  }

  @Get('search')
  async searchAuthors(@Query('q') searchString: string): Promise<Author[]> {
    return this.authorService.searchAuthors(searchString);
  }

  @Get('top')
  async getTopAuthors(@Query('limit') limit?: string): Promise<Author[]> {
    return this.authorService.getTopAuthors(limit ? Number(limit) : undefined);
  }

  @Post(':id/novels')
  @UseGuards(RoleGuard)
  @Roles('ADMIN', 'MODERATOR')
  async addNovelToAuthor(
    @Param('id') id: string,
    @Body() novelData: Prisma.NovelCreateInput,
  ): Promise<Novel> {
    return this.authorService.addNovelToAuthor(Number(id), novelData);
  }
}
