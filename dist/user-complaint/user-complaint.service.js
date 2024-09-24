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
exports.UserComplaintService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let UserComplaintService = class UserComplaintService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createComplaint(data) {
        return this.prisma.userComplaint.create({ data });
    }
    async getComplaintsByUserId(userId) {
        return this.prisma.userComplaint.findMany({
            where: { userId },
            include: {
                reason: true,
                complaintTargetType: true,
            },
        });
    }
    async getComplaintById(id) {
        return this.prisma.userComplaint.findUnique({
            where: { id },
            include: {
                reason: true,
                complaintTargetType: true,
            },
        });
    }
    async updateComplaint(id, data) {
        return this.prisma.userComplaint.update({
            where: { id },
            data,
        });
    }
    async deleteComplaint(id) {
        return this.prisma.userComplaint.delete({
            where: { id },
        });
    }
    async getComplaintsCountByUserId(userId) {
        return this.prisma.userComplaint.count({
            where: { userId },
        });
    }
};
exports.UserComplaintService = UserComplaintService;
exports.UserComplaintService = UserComplaintService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserComplaintService);
//# sourceMappingURL=user-complaint.service.js.map