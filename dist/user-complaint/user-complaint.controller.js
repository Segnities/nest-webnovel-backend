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
exports.UserComplaintController = void 0;
const common_1 = require("@nestjs/common");
const user_complaint_service_1 = require("./user-complaint.service");
const client_1 = require("@prisma/client");
let UserComplaintController = class UserComplaintController {
    constructor(userComplaintService) {
        this.userComplaintService = userComplaintService;
    }
    async createComplaint(createComplaintDto) {
        return this.userComplaintService.createComplaint(createComplaintDto);
    }
    async getComplaintsByUserId(userId) {
        return this.userComplaintService.getComplaintsByUserId(userId);
    }
    async getComplaintById(id) {
        return this.userComplaintService.getComplaintById(id);
    }
    async updateComplaint(id, updateComplaintDto) {
        return this.userComplaintService.updateComplaint(id, updateComplaintDto);
    }
    async deleteComplaint(id) {
        return this.userComplaintService.deleteComplaint(id);
    }
    async getComplaintsCountByUserId(userId) {
        return this.userComplaintService.getComplaintsCountByUserId(userId);
    }
};
exports.UserComplaintController = UserComplaintController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserComplaintController.prototype, "createComplaint", null);
__decorate([
    (0, common_1.Get)('user/:userId'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserComplaintController.prototype, "getComplaintsByUserId", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserComplaintController.prototype, "getComplaintById", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], UserComplaintController.prototype, "updateComplaint", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserComplaintController.prototype, "deleteComplaint", null);
__decorate([
    (0, common_1.Get)('user/:userId/count'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserComplaintController.prototype, "getComplaintsCountByUserId", null);
exports.UserComplaintController = UserComplaintController = __decorate([
    (0, common_1.Controller)('user-complaint'),
    __metadata("design:paramtypes", [user_complaint_service_1.UserComplaintService])
], UserComplaintController);
//# sourceMappingURL=user-complaint.controller.js.map