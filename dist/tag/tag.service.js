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
exports.TagService = void 0;
const prisma_service_1 = require("../prisma/prisma.service");
const common_1 = require("@nestjs/common");
let TagService = class TagService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findOneById(id) {
        return this.prisma.tag.findUnique({ where: { id } });
    }
    async createOne(data) {
        try {
            return this.prisma.tag.create({ data });
        }
        catch (error) {
            throw error;
        }
    }
    async findAll(args) {
        try {
            return this.prisma.tag.findMany(args);
        }
        catch (error) {
            throw error;
        }
    }
    async createMany(data) {
        try {
            return this.prisma.tag.createMany({
                data,
                skipDuplicates: true,
            });
        }
        catch (error) {
            throw error;
        }
    }
    async updateOne(id, data) {
        try {
            return this.prisma.tag.update({ where: { id }, data });
        }
        catch (error) {
            throw error;
        }
    }
    async deleteOne(id) {
        try {
            return this.prisma.tag.delete({ where: { id } });
        }
        catch (error) {
            throw error;
        }
    }
};
exports.TagService = TagService;
exports.TagService = TagService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TagService);
//# sourceMappingURL=tag.service.js.map