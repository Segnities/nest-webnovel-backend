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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComplaintReasonController = void 0;
const common_1 = require("@nestjs/common");
const complaint_reason_service_1 = require("./complaint-reason.service");
const client_1 = require("@prisma/client");
let ComplaintReasonController = class ComplaintReasonController {
    constructor(complaintReasonService) {
        this.complaintReasonService = complaintReasonService;
    }
    async createComplaintReason(data) {
        return this.complaintReasonService.createComplaintReason(data);
    }
    async getComplaintReasonById(id) {
        return this.complaintReasonService.getComplaintReasonById(id);
    }
    async updateComplaintReason(id, data) {
        return this.complaintReasonService.updateComplaintReason(id, data);
    }
    async deleteComplaintReason(id) {
        return this.complaintReasonService.deleteComplaintReason(id);
    }
    async getAllComplaintReasons() {
        return this.complaintReasonService.getAllComplaintReasons();
    }
    async countComplaintsByReasonId(reasonId) {
        return this.complaintReasonService.countComplaintsByReasonId(reasonId);
    }
};
exports.ComplaintReasonController = ComplaintReasonController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof client_1.Prisma !== "undefined" && client_1.Prisma.ComplaintReasonCreateInput) === "function" ? _a : Object]),
    __metadata("design:returntype", Promise)
], ComplaintReasonController.prototype, "createComplaintReason", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ComplaintReasonController.prototype, "getComplaintReasonById", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, typeof (_b = typeof client_1.Prisma !== "undefined" && client_1.Prisma.ComplaintReasonUpdateInput) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], ComplaintReasonController.prototype, "updateComplaintReason", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ComplaintReasonController.prototype, "deleteComplaintReason", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ComplaintReasonController.prototype, "getAllComplaintReasons", null);
__decorate([
    (0, common_1.Get)('count/:reasonId'),
    __param(0, (0, common_1.Param)('reasonId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ComplaintReasonController.prototype, "countComplaintsByReasonId", null);
exports.ComplaintReasonController = ComplaintReasonController = __decorate([
    (0, common_1.Controller)('complaint-reason'),
    __metadata("design:paramtypes", [complaint_reason_service_1.ComplaintReasonService])
], ComplaintReasonController);
//# sourceMappingURL=complaint-reason.controller.js.map