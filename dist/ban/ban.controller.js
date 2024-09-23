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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BanController = void 0;
const common_1 = require("@nestjs/common");
const ban_service_1 = require("./ban.service");
const client_1 = require("@prisma/client");
let BanController = class BanController {
    constructor(banService) {
        this.banService = banService;
    }
    async createBan(data) {
        return this.banService.createBan(data);
    }
    async getBanById(id) {
        return this.banService.getBanById(Number(id));
    }
    async getAllBans(skip, take, where, orderBy) {
        return this.banService.getAllBans({
            skip: skip ? Number(skip) : undefined,
            take: take ? Number(take) : undefined,
            where: where ? JSON.parse(where) : undefined,
            orderBy: orderBy ? JSON.parse(orderBy) : undefined,
        });
    }
    async updateBan(id, data) {
        return this.banService.updateBan(Number(id), data);
    }
    async deleteBan(id) {
        return this.banService.deleteBan(Number(id));
    }
    async getUserActiveBans(userId) {
        return this.banService.getUserActiveBans(Number(userId));
    }
    async appealBan(id, appealData) {
        return this.banService.appealBan(Number(id), appealData);
    }
    async checkUserBanStatus(userId) {
        return this.banService.checkUserBanStatus(Number(userId));
    }
    async getExpiredBans() {
        return this.banService.getExpiredBans();
    }
    async extendBan(id, newEndDate) {
        return this.banService.extendBan(Number(id), new Date(newEndDate));
    }
    async getBansByComplaintTarget(targetId) {
        return this.banService.getBansByComplaintTarget(Number(targetId));
    }
    async getBanHistory(userId) {
        return this.banService.getBanHistory(Number(userId));
    }
};
exports.BanController = BanController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BanController.prototype, "createBan", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BanController.prototype, "getBanById", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('skip')),
    __param(1, (0, common_1.Query)('take')),
    __param(2, (0, common_1.Query)('where')),
    __param(3, (0, common_1.Query)('orderBy')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String]),
    __metadata("design:returntype", Promise)
], BanController.prototype, "getAllBans", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], BanController.prototype, "updateBan", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BanController.prototype, "deleteBan", null);
__decorate([
    (0, common_1.Get)('user/:userId/active'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BanController.prototype, "getUserActiveBans", null);
__decorate([
    (0, common_1.Post)(':id/appeal'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], BanController.prototype, "appealBan", null);
__decorate([
    (0, common_1.Get)('user/:userId/status'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BanController.prototype, "checkUserBanStatus", null);
__decorate([
    (0, common_1.Get)('expired'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BanController.prototype, "getExpiredBans", null);
__decorate([
    (0, common_1.Put)(':id/extend'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('newEndDate')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], BanController.prototype, "extendBan", null);
__decorate([
    (0, common_1.Get)('complaint-target/:targetId'),
    __param(0, (0, common_1.Param)('targetId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BanController.prototype, "getBansByComplaintTarget", null);
__decorate([
    (0, common_1.Get)('user/:userId/history'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BanController.prototype, "getBanHistory", null);
exports.BanController = BanController = __decorate([
    (0, common_1.Controller)('bans'),
    __metadata("design:paramtypes", [ban_service_1.BanService])
], BanController);
//# sourceMappingURL=ban.controller.js.map