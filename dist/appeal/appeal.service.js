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
exports.AppealService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const client_1 = require("@prisma/client");
let AppealService = class AppealService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createAppeal(data) {
        return this.prisma.appeal.create({ data });
    }
    async getAppealById(id) {
        return this.prisma.appeal.findUnique({
            where: { id },
            include: {
                appeal: true,
                reviewedByUser: true,
                bans: true,
            },
        });
    }
    async getAllAppeals(params) {
        const { skip, take, where, orderBy } = params;
        return this.prisma.appeal.findMany({
            skip,
            take,
            where,
            orderBy,
            include: {
                appeal: true,
                reviewedByUser: true,
                bans: true,
            },
        });
    }
    async updateAppeal(id, data) {
        return this.prisma.appeal.update({
            where: { id },
            data,
            include: {
                appeal: true,
                reviewedByUser: true,
                bans: true,
            },
        });
    }
    async deleteAppeal(id) {
        return this.prisma.appeal.delete({ where: { id } });
    }
    async reviewAppeal(id, reviewerId, status) {
        return this.prisma.appeal.update({
            where: { id },
            data: {
                status,
                reviewedAt: new Date(),
                reviewedByUser: { connect: { id: reviewerId } },
            },
            include: {
                appeal: true,
                reviewedByUser: true,
                bans: true,
            },
        });
    }
    async getAppealsByStatus(status) {
        return this.prisma.appeal.findMany({
            where: { status },
            include: {
                appeal: true,
                reviewedByUser: true,
                bans: true,
            },
        });
    }
    async getAppealsByUser(userId) {
        return this.prisma.appeal.findMany({
            where: {
                bans: {
                    some: {
                        userId,
                    },
                },
            },
            include: {
                appeal: true,
                reviewedByUser: true,
                bans: true,
            },
        });
    }
    async getPendingAppeals() {
        return this.getAppealsByStatus(client_1.ApprovalStatus.Pending);
    }
    async getAppealStatistics() {
        const appeals = await this.prisma.appeal.groupBy({
            by: ['status'],
            _count: {
                status: true,
            },
        });
        return appeals.reduce((acc, curr) => {
            acc[curr.status] = curr._count.status;
            return acc;
        }, {});
    }
    async getRecentAppeals(limit = 10) {
        return this.prisma.appeal.findMany({
            take: limit,
            orderBy: { createdAt: 'desc' },
            include: {
                appeal: true,
                reviewedByUser: true,
                bans: true,
            },
        });
    }
};
exports.AppealService = AppealService;
exports.AppealService = AppealService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AppealService);
//# sourceMappingURL=appeal.service.js.map