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
exports.BanService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let BanService = class BanService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createBan(data) {
        return this.prisma.ban.create({ data });
    }
    async getBanById(id) {
        return this.prisma.ban.findUnique({ where: { id } });
    }
    async getAllBans(params) {
        const { skip, take, where, orderBy } = params;
        return this.prisma.ban.findMany({ skip, take, where, orderBy });
    }
    async updateBan(id, data) {
        return this.prisma.ban.update({ where: { id }, data });
    }
    async deleteBan(id) {
        return this.prisma.ban.delete({ where: { id } });
    }
    async getUserActiveBans(userId) {
        const currentDate = new Date();
        return this.prisma.ban.findMany({
            where: {
                userId,
                banEnd: { gt: currentDate },
                appealed: false,
            },
        });
    }
    async appealBan(banId, appealData) {
        const ban = await this.prisma.ban.findUnique({ where: { id: banId } });
        if (!ban) {
            throw new common_1.NotFoundException(`Ban with ID ${banId} not found`);
        }
        return this.prisma.ban.update({
            where: { id: banId },
            data: {
                appealed: true,
                appeal: {
                    create: appealData,
                },
            },
        });
    }
    async checkUserBanStatus(userId) {
        const activeBans = await this.getUserActiveBans(userId);
        return activeBans.length > 0;
    }
    async getExpiredBans() {
        const currentDate = new Date();
        return this.prisma.ban.findMany({
            where: {
                banEnd: { lt: currentDate },
                appealed: false,
            },
        });
    }
    async extendBan(banId, newEndDate) {
        return this.prisma.ban.update({
            where: { id: banId },
            data: { banEnd: newEndDate },
        });
    }
    async getBansByComplaintTarget(complaintTargetId) {
        return this.prisma.ban.findMany({
            where: { complaintTargetId },
            include: { user: true, complaintTargetType: true },
        });
    }
    async getBanHistory(userId) {
        return this.prisma.ban.findMany({
            where: { userId },
            orderBy: { createdAt: 'desc' },
            include: { appeal: true },
        });
    }
};
exports.BanService = BanService;
exports.BanService = BanService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BanService);
//# sourceMappingURL=ban.service.js.map