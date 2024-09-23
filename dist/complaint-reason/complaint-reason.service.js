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
exports.ComplaintReasonService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ComplaintReasonService = class ComplaintReasonService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createComplaintReason(data) {
        return this.prisma.complaintReason.create({
            data,
        });
    }
    async getComplaintReasonById(id) {
        const reason = await this.prisma.complaintReason.findUnique({
            where: { id },
        });
        if (!reason) {
            throw new common_1.NotFoundException(`ComplaintReason with ID ${id} not found`);
        }
        return reason;
    }
    async updateComplaintReason(id, data) {
        const reason = await this.prisma.complaintReason.findUnique({
            where: { id },
        });
        if (!reason) {
            throw new common_1.NotFoundException(`ComplaintReason with ID ${id} not found`);
        }
        return this.prisma.complaintReason.update({
            where: { id },
            data,
        });
    }
    async deleteComplaintReason(id) {
        const reason = await this.prisma.complaintReason.findUnique({
            where: { id },
        });
        if (!reason) {
            throw new common_1.NotFoundException(`ComplaintReason with ID ${id} not found`);
        }
        return this.prisma.complaintReason.delete({
            where: { id },
        });
    }
    async getAllComplaintReasons() {
        return this.prisma.complaintReason.findMany();
    }
    async countComplaintsByReasonId(reasonId) {
        return this.prisma.userComplaint.count({
            where: { reasonId },
        });
    }
};
exports.ComplaintReasonService = ComplaintReasonService;
exports.ComplaintReasonService = ComplaintReasonService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ComplaintReasonService);
//# sourceMappingURL=complaint-reason.service.js.map