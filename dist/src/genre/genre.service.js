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
exports.GenreService = void 0;
const prisma_service_1 = require("../prisma/prisma.service");
const common_1 = require("@nestjs/common");
let GenreService = class GenreService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findOneById(id) {
        const genre = await this.prisma.genre.findUnique({ where: { id } });
        if (!genre) {
            throw new common_1.NotFoundException(`Жанр з ID ${id} не знайдено`);
        }
        return genre;
    }
    async createOne(data) {
        return this.prisma.genre.create({ data });
    }
    async findAll(args) {
        return this.prisma.genre.findMany(args);
    }
    async createMany(data) {
        return this.prisma.genre.createMany({
            data,
            skipDuplicates: true,
        });
    }
    async updateOne(id, data) {
        const genre = await this.prisma.genre.update({
            where: { id },
            data,
        });
        if (!genre) {
            throw new common_1.NotFoundException(`Жанр з ID ${id} не знайдено`);
        }
        return genre;
    }
    async deleteOne(id) {
        try {
            return await this.prisma.genre.delete({ where: { id } });
        }
        catch (error) {
            if (error.code === 'P2025') {
                throw new common_1.NotFoundException(`Жанр з ID ${id} не знайдено`);
            }
            throw error;
        }
    }
    async findByTitle(title) {
        return this.prisma.genre.findUnique({ where: { title } });
    }
};
exports.GenreService = GenreService;
exports.GenreService = GenreService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], GenreService);
//# sourceMappingURL=genre.service.js.map