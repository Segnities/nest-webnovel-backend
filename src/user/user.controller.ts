import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User, Prisma } from '@prisma/client';
import { CreateUserDto } from './dto/CreateUserDto';
import { UserRecord } from 'firebase-admin/lib/auth/user-record';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('signup')
  async signup(@Body() createUserDto: CreateUserDto): Promise<UserRecord> {
    return this.userService.createUserWithFirebase(createUserDto);
  }

  @Post()
  async createUser(
    @Body() createUserDto: Prisma.UserCreateInput,
  ): Promise<User> {
    return this.userService.createUser(createUserDto);
  }

  @Get(':id')
  async getUserById(@Param('id') id: number): Promise<User | null> {
    return this.userService.getUserById(id);
  }

  @Get('email/:email')
  async getUserByEmail(@Param('email') email: string): Promise<User | null> {
    return this.userService.getUserByEmail(email);
  }

  @Put(':id')
  async updateUser(
    @Param('id') id: number,
    @Body() updateUserDto: Prisma.UserUpdateInput,
  ): Promise<User> {
    return this.userService.updateUser(id, updateUserDto);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: number): Promise<User> {
    return this.userService.deleteUser(id);
  }

  @Get(':id/reviews')
  async getUserReviews(@Param('id') userId: number) {
    return this.userService.getUserReviews(userId);
  }

  @Get(':id/bookmarks')
  async getUserBookmarks(@Param('id') userId: number) {
    return this.userService.getUserBookmarks(userId);
  }

  @Get(':id/notifications')
  async getUserNotifications(@Param('id') userId: number) {
    return this.userService.getUserNotifications(userId);
  }

  @Get(':id/comments')
  async getUserComments(@Param('id') userId: number) {
    return this.userService.getUserComments(userId);
  }

  @Get(':id/news')
  async getUserNews(@Param('id') userId: number) {
    return this.userService.getUserNews(userId);
  }

  @Get(':id/novel-subscriptions')
  async getUserNovelSubscriptions(@Param('id') userId: number) {
    return this.userService.getUserNovelSubscriptions(userId);
  }

  @Get(':id/author-subscriptions')
  async getUserAuthorSubscriptions(@Param('id') userId: number) {
    return this.userService.getUserAuthorSubscriptions(userId);
  }

  @Get(':id/permissions')
  async getUserPermissions(@Param('id') userId: number) {
    return this.userService.getUserPermissions(userId);
  }

  @Get(':id/novel-ratings')
  async getUserNovelRatings(@Param('id') userId: number) {
    return this.userService.getUserNovelRatings(userId);
  }

  @Get(':id/created-content')
  async getUserCreatedContent(@Param('id') userId: number) {
    return this.userService.getUserCreatedContent(userId);
  }

  @Get(':id/activity-stats')
  async getUserActivityStats(@Param('id') userId: number) {
    return this.userService.getUserActivityStats(userId);
  }
}
