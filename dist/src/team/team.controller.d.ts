import { TeamService } from './team.service';
import { Team, User } from '@prisma/client';
export declare class TeamController {
    private readonly teamService;
    constructor(teamService: TeamService);
    createTeam(name: string): Promise<Team>;
    getTeamById(id: string): Promise<Team | null>;
    updateTeam(id: string, data: Partial<Team>): Promise<Team>;
    deleteTeam(id: string): Promise<Team>;
    addUserToTeam(teamId: string, userId: number): Promise<Team>;
    removeUserFromTeam(teamId: string, userId: string): Promise<Team>;
    getTeamMembers(id: string): Promise<User[]>;
    updateTeamStats(id: string): Promise<Team>;
}
