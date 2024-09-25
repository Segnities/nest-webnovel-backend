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
exports.UserRatingService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let UserRatingService = class UserRatingService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createRating(userId, novelId, rating) {
        return this.prisma.userRating.create({
            data: {
                userId,
                novelId,
                rating,
            },
        });
    }
    async updateRating(id, userId, novelId, rating) {
        return this.prisma.userRating.update({
            where: {
                id,
                userId,
                novelId,
            },
            data: {
                rating,
            },
        });
    }
    async getUserRating(id) {
        return this.prisma.userRating.findUnique({
            where: {
                id,
            },
        });
    }
    async getRatingsByNovel(novelId) {
        return this.prisma.userRating.findMany({
            where: {
                novelId,
            },
        });
    }
    async deleteRating(id) {
        return this.prisma.userRating.delete({
            where: {
                id,
            },
        });
    }
};
exports.UserRatingService = UserRatingService;
exports.UserRatingService = UserRatingService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserRatingService);
//# sourceMappingURL=user-rating.service.js.map