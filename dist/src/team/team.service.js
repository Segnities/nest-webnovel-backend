"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let TeamService = class TeamService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createTeam(name) {
        return this.prisma.team.create({
            data: { name },
        });
    }
    async getTeamById(id) {
        return this.prisma.team.findUnique({
            where: { id },
            include: { users: true },
        });
    }
    async updateTeam(id, data) {
        return this.prisma.team.update({
            where: { id },
            data,
        });
    }
    async deleteTeam(id) {
        return this.prisma.team.delete({
            where: { id },
        });
    }
    async addUserToTeam(teamId, userId) {
        return this.prisma.team.update({
            where: { id: teamId },
            data: {
                users: {
                    connect: { id: userId },
                },
            },
            include: { users: true },
        });
    }
    async removeUserFromTeam(teamId, userId) {
        return this.prisma.team.update({
            where: { id: teamId },
            data: {
                users: {
                    disconnect: { id: userId },
                },
            },
            include: { users: true },
        });
    }
    async getTeamMembers(teamId) {
        const team = await this.prisma.team.findUnique({
            where: { id: teamId },
            include: { users: true },
        });
        return team?.users || [];
    }
    async updateTeamStats(teamId) {
        const team = await this.prisma.team.findUnique({
            where: { id: teamId },
            include: { users: true },
        });
        if (!team) {
            throw new Error('Team not found');
        }
        const chaptersCount = await this.prisma.chapter.count({
            where: {
                novel: {
                    author: {
                        id: { in: team.users.map((user) => user.id) },
                    },
                },
            },
        });
        const booksCount = await this.prisma.novel.count({
            where: {
                author: {
                    id: { in: team.users.map((user) => user.id) },
                },
            },
        });
        return this.prisma.team.update({
            where: { id: teamId },
            data: {
                chapters_count: chaptersCount,
                books_count: booksCount,
            },
        });
    }
};
exports.TeamService = TeamService;
exports.TeamService = TeamService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TeamService);
//# sourceMappingURL=team.service.js.map