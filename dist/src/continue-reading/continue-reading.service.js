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
exports.ContinueReadingService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ContinueReadingService = class ContinueReadingService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createContinueReading(data) {
        return this.prisma.continueReading.create({
            data: {
                user: {
                    connect: {
                        id: data.userId,
                    },
                },
                lastChapter: {
                    connect: {
                        id: data.lastChapterId,
                    },
                },
            },
        });
    }
    async createOrUpdateReadingProgress(data) {
        const record = await this.prisma.chapter.findFirst({
            where: {
                id: data.lastChapterId,
            },
            include: {
                novel: {
                    select: {
                        id: true,
                    },
                },
            },
        });
        const slotNovelId = record.novel.id;
        const slot = await this.prisma.continueReading.findFirst({
            where: {
                lastChapter: {
                    novelId: slotNovelId,
                },
                userId: data.userId,
            },
        });
        if (!slot) {
            return this.createContinueReading(data);
        }
        return this.prisma.continueReading.update({
            where: {
                id: slot.id,
            },
            data: {
                lastChapterId: data.lastChapterId,
            },
        });
    }
    async getContinueReadingById(id) {
        const continueReading = await this.prisma.continueReading.findUnique({
            where: { id },
        });
        if (!continueReading) {
            throw new common_1.NotFoundException(`ContinueReading with ID ${id} not found`);
        }
        return continueReading;
    }
    async updateContinueReading(id, data) {
        const continueReading = await this.prisma.continueReading.findUnique({
            where: { id },
        });
        if (!continueReading) {
            throw new common_1.NotFoundException(`ContinueReading with ID ${id} not found`);
        }
        return this.prisma.continueReading.update({
            where: { id },
            data,
        });
    }
    async deleteContinueReading(id) {
        const continueReading = await this.prisma.continueReading.findUnique({
            where: { id },
        });
        if (!continueReading) {
            throw new common_1.NotFoundException(`ContinueReading with ID ${id} not found`);
        }
        return this.prisma.continueReading.delete({
            where: { id },
        });
    }
    async getContinueReadingByUserId(userId) {
        return this.prisma.continueReading.findMany({
            where: { userId },
        });
    }
};
exports.ContinueReadingService = ContinueReadingService;
exports.ContinueReadingService = ContinueReadingService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ContinueReadingService);
//# sourceMappingURL=continue-reading.service.js.map