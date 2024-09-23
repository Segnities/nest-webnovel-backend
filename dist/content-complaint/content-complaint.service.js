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
exports.ContentComplaintService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ContentComplaintService = class ContentComplaintService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createContentComplaint(data) {
        return this.prisma.contentComplaint.create({
            data,
        });
    }
    async getContentComplaintById(id) {
        const complaint = await this.prisma.contentComplaint.findUnique({
            where: { id },
        });
        if (!complaint) {
            throw new common_1.NotFoundException(`ContentComplaint with ID ${id} not found`);
        }
        return complaint;
    }
    async updateContentComplaint(id, data) {
        const complaint = await this.prisma.contentComplaint.findUnique({
            where: { id },
        });
        if (!complaint) {
            throw new common_1.NotFoundException(`ContentComplaint with ID ${id} not found`);
        }
        return this.prisma.contentComplaint.update({
            where: { id },
            data,
        });
    }
    async deleteContentComplaint(id) {
        const complaint = await this.prisma.contentComplaint.findUnique({
            where: { id },
        });
        if (!complaint) {
            throw new common_1.NotFoundException(`ContentComplaint with ID ${id} not found`);
        }
        return this.prisma.contentComplaint.delete({
            where: { id },
        });
    }
    async getAllContentComplaints() {
        return this.prisma.contentComplaint.findMany();
    }
    async countComplaintsByReasonId(reasonId) {
        return this.prisma.contentComplaint.count({
            where: { reasonId },
        });
    }
    async resolveContentComplaint(id) {
        return this.prisma.contentComplaint.update({
            where: { id },
            data: { status: 'Resolved', resolvedAt: new Date() },
        });
    }
    async getComplaintsByUserId(userId) {
        return this.prisma.contentComplaint.findMany({
            where: { issuedBy: userId },
        });
    }
};
exports.ContentComplaintService = ContentComplaintService;
exports.ContentComplaintService = ContentComplaintService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ContentComplaintService);
//# sourceMappingURL=content-complaint.service.js.map