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
exports.ContentComplaintController = void 0;
const common_1 = require("@nestjs/common");
const content_complaint_service_1 = require("./content-complaint.service");
const client_1 = require("@prisma/client");
let ContentComplaintController = class ContentComplaintController {
    constructor(contentComplaintService) {
        this.contentComplaintService = contentComplaintService;
    }
    async createContentComplaint(data) {
        return this.contentComplaintService.createContentComplaint(data);
    }
    async getContentComplaintById(id) {
        return this.contentComplaintService.getContentComplaintById(id);
    }
    async updateContentComplaint(id, data) {
        return this.contentComplaintService.updateContentComplaint(id, data);
    }
    async deleteContentComplaint(id) {
        return this.contentComplaintService.deleteContentComplaint(id);
    }
    async getAllContentComplaints() {
        return this.contentComplaintService.getAllContentComplaints();
    }
    async countComplaintsByReasonId(reasonId) {
        return this.contentComplaintService.countComplaintsByReasonId(reasonId);
    }
    async resolveContentComplaint(id) {
        return this.contentComplaintService.resolveContentComplaint(id);
    }
    async getComplaintsByUserId(userId) {
        return this.contentComplaintService.getComplaintsByUserId(userId);
    }
};
exports.ContentComplaintController = ContentComplaintController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ContentComplaintController.prototype, "createContentComplaint", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ContentComplaintController.prototype, "getContentComplaintById", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], ContentComplaintController.prototype, "updateContentComplaint", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ContentComplaintController.prototype, "deleteContentComplaint", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ContentComplaintController.prototype, "getAllContentComplaints", null);
__decorate([
    (0, common_1.Get)('count/reason/:reasonId'),
    __param(0, (0, common_1.Param)('reasonId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ContentComplaintController.prototype, "countComplaintsByReasonId", null);
__decorate([
    (0, common_1.Put)('resolve/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ContentComplaintController.prototype, "resolveContentComplaint", null);
__decorate([
    (0, common_1.Get)('user/:userId'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ContentComplaintController.prototype, "getComplaintsByUserId", null);
exports.ContentComplaintController = ContentComplaintController = __decorate([
    (0, common_1.Controller)('content-complaint'),
    __metadata("design:paramtypes", [content_complaint_service_1.ContentComplaintService])
], ContentComplaintController);
//# sourceMappingURL=content-complaint.controller.js.map