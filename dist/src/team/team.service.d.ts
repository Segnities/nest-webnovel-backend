import { PrismaService } from '../prisma/prisma.service';
import { Team, User } from '@prisma/client';
export declare class TeamService {
    private prisma;
    constructor(prisma: PrismaService);
    createTeam(name: string): Promise<Team>;
    getTeamById(id: number): Promise<Team | null>;
    updateTeam(id: number, data: Partial<Team>): Promise<Team>;
    deleteTeam(id: number): Promise<Team>;
    addUserToTeam(teamId: number, userId: number): Promise<Team>;
    removeUserFromTeam(teamId: number, userId: number): Promise<Team>;
    getTeamMembers(teamId: number): Promise<User[]>;
    updateTeamStats(teamId: number): Promise<Team>;
}
