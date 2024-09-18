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
exports.CountryService = void 0;
const prisma_service_1 = require("../prisma/prisma.service");
const common_1 = require("@nestjs/common");
let CountryService = class CountryService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findOneById(id) {
        const country = await this.prisma.country.findUnique({
            where: { id },
            include: { novels: true },
        });
        if (!country) {
            throw new common_1.NotFoundException(`Країну з ID ${id} не знайдено`);
        }
        return country;
    }
    async createOne(data) {
        return this.prisma.country.create({ data });
    }
    async findAll(args) {
        return this.prisma.country.findMany(args);
    }
    async createMany(data) {
        return this.prisma.country.createMany({
            data,
            skipDuplicates: true,
        });
    }
    async updateOne(id, data) {
        try {
            return await this.prisma.country.update({
                where: { id },
                data,
                include: { novels: true },
            });
        }
        catch (error) {
            if (error.code === 'P2025') {
                throw new common_1.NotFoundException(`Країну з ID ${id} не знайдено`);
            }
            throw error;
        }
    }
    async deleteOne(id) {
        try {
            return await this.prisma.country.delete({
                where: { id },
                include: { novels: true },
            });
        }
        catch (error) {
            if (error.code === 'P2025') {
                throw new common_1.NotFoundException(`Країну з ID ${id} не знайдено`);
            }
            throw error;
        }
    }
    async findByTitle(title) {
        return this.prisma.country.findUnique({
            where: { title },
            include: { novels: true },
        });
    }
    async getCountriesWithNovelCount() {
        return this.prisma.country
            .findMany({
            select: {
                id: true,
                title: true,
                _count: {
                    select: { novels: true },
                },
            },
        })
            .then((countries) => countries.map((country) => ({
            id: country.id,
            title: country.title,
            novelCount: country._count.novels,
        })));
    }
    async getTopCountriesByNovelCount(limit = 10) {
        return this.prisma.country
            .findMany({
            select: {
                id: true,
                title: true,
                _count: {
                    select: { novels: true },
                },
            },
            orderBy: {
                novels: {
                    _count: 'desc',
                },
            },
            take: limit,
        })
            .then((countries) => countries.map((country) => ({
            id: country.id,
            title: country.title,
            novelCount: country._count.novels,
        })));
    }
    async getNovelsByCountry(countryId, args) {
        const country = await this.prisma.country.findUnique({
            where: { id: countryId },
            include: {
                novels: args || true,
            },
        });
        if (!country) {
            throw new common_1.NotFoundException(`Країну з ID ${countryId} не знайдено`);
        }
        return country.novels;
    }
    async searchCountries(searchTerm) {
        return this.prisma.country.findMany({
            where: {
                title: {
                    contains: searchTerm,
                    mode: 'insensitive',
                },
            },
            include: { novels: true },
        });
    }
    async getCountryStats() {
        const result = await this.prisma.country.aggregate({
            _count: {
                id: true,
            },
        });
        const totalCountries = result._count.id;
        const totalNovels = await this.prisma.novel.count();
        const averageNovelsPerCountry = totalCountries > 0 ? totalNovels / totalCountries : 0;
        return {
            totalCountries,
            totalNovels,
            averageNovelsPerCountry,
        };
    }
    async updateNovelCount() {
        await this.prisma.$executeRaw `
     UPDATE "country"
     SET novel_count = (
       SELECT COUNT(*)
       FROM "novel"
       WHERE "novel"."countryId" = "country"."id"
     )
   `;
    }
};
exports.CountryService = CountryService;
exports.CountryService = CountryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CountryService);
//# sourceMappingURL=country.service.js.map