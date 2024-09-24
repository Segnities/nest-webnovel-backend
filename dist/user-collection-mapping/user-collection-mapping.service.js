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
exports.UserCollectionMappingService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let UserCollectionMappingService = class UserCollectionMappingService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createMapping(data) {
        return this.prisma.userCollectionMapping.create({ data });
    }
    async getMappingsByUserId(userId) {
        return this.prisma.userCollectionMapping.findMany({
            where: { userId },
            include: {
                collection: true,
            },
        });
    }
    async getMappingsByCollectionId(collectionId) {
        return this.prisma.userCollectionMapping.findMany({
            where: { collectionId },
            include: {
                user: true,
            },
        });
    }
    async updateMapping(id, data) {
        return this.prisma.userCollectionMapping.update({
            where: { id },
            data,
        });
    }
    async deleteMapping(id) {
        return this.prisma.userCollectionMapping.delete({
            where: { id },
        });
    }
    async getUserCollectionCount(userId) {
        return this.prisma.userCollectionMapping.count({
            where: { userId },
        });
    }
};
exports.UserCollectionMappingService = UserCollectionMappingService;
exports.UserCollectionMappingService = UserCollectionMappingService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserCollectionMappingService);
//# sourceMappingURL=user-collection-mapping.service.js.map