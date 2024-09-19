import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { TeamService } from './team.service';
import { Team, User } from '@prisma/client';

@Controller('team')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Post()
  async createTeam(@Body('name') name: string): Promise<Team> {
    return this.teamService.createTeam(name);
  }

  @Get(':id')
  async getTeamById(@Param('id') id: string): Promise<Team | null> {
    return this.teamService.getTeamById(Number(id));
  }

  @Put(':id')
  async updateTeam(
    @Param('id') id: string,
    @Body() data: Partial<Team>,
  ): Promise<Team> {
    return this.teamService.updateTeam(Number(id), data);
  }

  @Delete(':id')
  async deleteTeam(@Param('id') id: string): Promise<Team> {
    return this.teamService.deleteTeam(Number(id));
  }

  @Post(':id/users')
  async addUserToTeam(
    @Param('id') teamId: string,
    @Body('userId') userId: number,
  ): Promise<Team> {
    return this.teamService.addUserToTeam(Number(teamId), userId);
  }

  @Delete(':id/users/:userId')
  async removeUserFromTeam(
    @Param('id') teamId: string,
    @Param('userId') userId: string,
  ): Promise<Team> {
    return this.teamService.removeUserFromTeam(Number(teamId), Number(userId));
  }

  @Get(':id/members')
  async getTeamMembers(@Param('id') id: string): Promise<User[]> {
    return this.teamService.getTeamMembers(Number(id));
  }

  @Put(':id/stats')
  async updateTeamStats(@Param('id') id: string): Promise<Team> {
    return this.teamService.updateTeamStats(Number(id));
  }
}
