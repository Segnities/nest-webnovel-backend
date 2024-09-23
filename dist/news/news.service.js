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
exports.NewsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let NewsService = class NewsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createNews(data) {
        return this.prisma.news.create({
            data,
        });
    }
    async getNewsById(id) {
        const news = await this.prisma.news.findUnique({
            where: { id },
        });
        if (!news) {
            throw new common_1.NotFoundException(`News with ID ${id} not found`);
        }
        return news;
    }
    async updateNews(id, data) {
        const news = await this.prisma.news.findUnique({
            where: { id },
        });
        if (!news) {
            throw new common_1.NotFoundException(`News with ID ${id} not found`);
        }
        return this.prisma.news.update({
            where: { id },
            data,
        });
    }
    async deleteNews(id) {
        const news = await this.prisma.news.findUnique({
            where: { id },
        });
        if (!news) {
            throw new common_1.NotFoundException(`News with ID ${id} not found`);
        }
        return this.prisma.news.delete({
            where: { id },
        });
    }
    async getAllNews() {
        return this.prisma.news.findMany();
    }
    async getNewsByUserId(userId) {
        return this.prisma.news.findMany({
            where: { userId },
        });
    }
    async countNewsByUserId(userId) {
        return this.prisma.news.count({
            where: { userId },
        });
    }
    async incrementViews(id) {
        const news = await this.prisma.news.findUnique({
            where: { id },
        });
        if (!news) {
            throw new common_1.NotFoundException(`News with ID ${id} not found`);
        }
        return this.prisma.news.update({
            where: { id },
            data: { views: news.views + 1 },
        });
    }
};
exports.NewsService = NewsService;
exports.NewsService = NewsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], NewsService);
//# sourceMappingURL=news.service.js.map