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
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppealController = void 0;
const common_1 = require("@nestjs/common");
const appeal_service_1 = require("./appeal.service");
const client_1 = require("@prisma/client");
let AppealController = class AppealController {
    constructor(appealService) {
        this.appealService = appealService;
    }
    async createAppeal(data) {
        return this.appealService.createAppeal(data);
    }
    async getAppealById(id) {
        return this.appealService.getAppealById(Number(id));
    }
    async getAllAppeals(skip, take, where, orderBy) {
        return this.appealService.getAllAppeals({
            skip: skip ? Number(skip) : undefined,
            take: take ? Number(take) : undefined,
            where: where ? JSON.parse(where) : undefined,
            orderBy: orderBy ? JSON.parse(orderBy) : undefined,
        });
    }
    async updateAppeal(id, data) {
        return this.appealService.updateAppeal(Number(id), data);
    }
    async deleteAppeal(id) {
        return this.appealService.deleteAppeal(Number(id));
    }
    async reviewAppeal(id, reviewerId, status) {
        return this.appealService.reviewAppeal(Number(id), reviewerId, status);
    }
    async getAppealsByStatus(status) {
        return this.appealService.getAppealsByStatus(status);
    }
    async getAppealsByUser(userId) {
        return this.appealService.getAppealsByUser(Number(userId));
    }
    async getPendingAppeals() {
        return this.appealService.getPendingAppeals();
    }
    async getAppealStatistics() {
        return this.appealService.getAppealStatistics();
    }
    async getRecentAppeals(limit) {
        return this.appealService.getRecentAppeals(limit ? Number(limit) : undefined);
    }
};
exports.AppealController = AppealController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof client_1.Prisma !== "undefined" && client_1.Prisma.AppealCreateInput) === "function" ? _a : Object]),
    __metadata("design:returntype", Promise)
], AppealController.prototype, "createAppeal", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppealController.prototype, "getAppealById", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('skip')),
    __param(1, (0, common_1.Query)('take')),
    __param(2, (0, common_1.Query)('where')),
    __param(3, (0, common_1.Query)('orderBy')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String]),
    __metadata("design:returntype", Promise)
], AppealController.prototype, "getAllAppeals", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_b = typeof client_1.Prisma !== "undefined" && client_1.Prisma.AppealUpdateInput) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], AppealController.prototype, "updateAppeal", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppealController.prototype, "deleteAppeal", null);
__decorate([
    (0, common_1.Put)(':id/review'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('reviewerId')),
    __param(2, (0, common_1.Body)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, typeof (_c = typeof client_1.ApprovalStatus !== "undefined" && client_1.ApprovalStatus) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], AppealController.prototype, "reviewAppeal", null);
__decorate([
    (0, common_1.Get)('status/:status'),
    __param(0, (0, common_1.Param)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof client_1.ApprovalStatus !== "undefined" && client_1.ApprovalStatus) === "function" ? _d : Object]),
    __metadata("design:returntype", Promise)
], AppealController.prototype, "getAppealsByStatus", null);
__decorate([
    (0, common_1.Get)('user/:userId'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppealController.prototype, "getAppealsByUser", null);
__decorate([
    (0, common_1.Get)('pending'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppealController.prototype, "getPendingAppeals", null);
__decorate([
    (0, common_1.Get)('statistics'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppealController.prototype, "getAppealStatistics", null);
__decorate([
    (0, common_1.Get)('recent'),
    __param(0, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppealController.prototype, "getRecentAppeals", null);
exports.AppealController = AppealController = __decorate([
    (0, common_1.Controller)('appeals'),
    __metadata("design:paramtypes", [appeal_service_1.AppealService])
], AppealController);
//# sourceMappingURL=appeal.controller.js.map