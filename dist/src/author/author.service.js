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
exports.AuthorService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let AuthorService = class AuthorService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createAuthor(data) {
        return this.prisma.author.create({ data });
    }
    async getAuthorById(id) {
        return this.prisma.author.findUnique({ where: { id } });
    }
    async getAuthorByName(name) {
        return this.prisma.author.findUnique({ where: { name } });
    }
    async updateAuthor(id, data) {
        return this.prisma.author.update({ where: { id }, data });
    }
    async deleteAuthor(id) {
        return this.prisma.author.delete({ where: { id } });
    }
    async getAllAuthors(params) {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.author.findMany({ skip, take, cursor, where, orderBy });
    }
    async getAuthorNovels(authorId) {
        const author = await this.prisma.author.findUnique({
            where: { id: authorId },
            include: { novels: true },
        });
        if (!author)
            throw new common_1.NotFoundException(`Author with ID ${authorId} not found`);
        return author.novels;
    }
    async getAuthorSubscribers(authorId) {
        return this.prisma.authorSubscription.count({
            where: { authorId },
        });
    }
    async searchAuthors(searchString) {
        return this.prisma.author.findMany({
            where: {
                name: { contains: searchString, mode: 'insensitive' },
            },
        });
    }
    async getTopAuthors(limit = 10) {
        return this.prisma.author.findMany({
            take: limit,
            orderBy: {
                novels: {
                    _count: 'desc',
                },
            },
            include: {
                _count: {
                    select: { novels: true },
                },
            },
        });
    }
    async addNovelToAuthor(authorId, novelData) {
        return this.prisma.novel.create({
            data: {
                ...novelData,
                author: {
                    connect: { id: authorId },
                },
            },
        });
    }
};
exports.AuthorService = AuthorService;
exports.AuthorService = AuthorService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AuthorService);
//# sourceMappingURL=author.service.js.map