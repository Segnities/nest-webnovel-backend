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
exports.NovelService = void 0;
const prisma_service_1 = require("../prisma/prisma.service");
const common_1 = require("@nestjs/common");
let NovelService = class NovelService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findOneById(id) {
        return this.prisma.novel.findUnique({ where: { id } });
    }
    async createOne(data) {
        try {
            return this.prisma.novel.create({ data });
        }
        catch (error) {
            throw error;
        }
    }
    async findAll(args) {
        try {
            return this.prisma.novel.findMany(args);
        }
        catch (error) {
            throw error;
        }
    }
    async createMany(data) {
        try {
            return this.prisma.novel.createManyAndReturn({
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
            return this.prisma.novel.update({ where: { id }, data });
        }
        catch (error) {
            throw error;
        }
    }
    async deleteOne(id) {
        try {
            return this.prisma.novel.delete({ where: { id } });
        }
        catch (error) {
            throw error;
        }
    }
    async findByAuthor(authorId) {
        return this.prisma.novel.findMany({
            where: { authorId },
            include: { author: true, tags: true, genres: true },
        });
    }
    async findByStatus(status) {
        return this.prisma.novel.findMany({
            where: { status },
            include: { author: true },
        });
    }
    async findByFormat(format) {
        return this.prisma.novel.findMany({
            where: { format },
            include: { author: true },
        });
    }
    async findByTranslationStatus(translationStatus) {
        return this.prisma.novel.findMany({
            where: { translationStatus },
            include: { author: true },
        });
    }
    async findByTag(tagId) {
        return this.prisma.novel.findMany({
            where: {
                tags: {
                    some: { id: tagId },
                },
            },
            include: { author: true, tags: true },
        });
    }
    async findByTags(tagIds) {
        return this.prisma.novel.findMany({
            where: {
                tags: {
                    some: {
                        id: {
                            in: tagIds,
                        },
                    },
                },
            },
        });
    }
    async findByGenre(genreId) {
        return this.prisma.novel.findMany({
            where: {
                genres: {
                    some: { id: genreId },
                },
            },
            include: { author: true, genres: true },
        });
    }
    async findByGenres(genreIds) {
        return this.prisma.novel.findMany({
            where: {
                genres: {
                    some: {
                        id: {
                            in: genreIds,
                        },
                    },
                },
            },
            include: { author: true, genres: true },
        });
    }
    async findByCountry(countryId) {
        return this.prisma.novel.findMany({
            where: { countryId },
            include: { author: true, country: true },
        });
    }
    async findByCountries(countryIds) {
        return this.prisma.novel.findMany({
            where: {
                countryId: {
                    in: countryIds,
                },
            },
            include: { author: true, country: true },
        });
    }
    async getTopRatedNovels(limit = 10) {
        return this.prisma.novel.findMany({
            take: limit,
            orderBy: {
                novelRating: {
                    avgRating: 'desc',
                },
            },
            include: { author: true, novelRating: true },
        });
    }
    async getMostViewedNovels(limit = 10) {
        return this.prisma.novel.findMany({
            take: limit,
            orderBy: { views: 'desc' },
            include: { author: true },
        });
    }
    async getRecentlyUpdatedNovels(limit = 10) {
        return this.prisma.novel.findMany({
            take: limit,
            orderBy: { updatedAt: 'desc' },
            include: { author: true },
        });
    }
    async searchNovels(searchTerm) {
        return this.prisma.novel.findMany({
            where: {
                OR: [
                    { title: { contains: searchTerm, mode: 'insensitive' } },
                    { original_title: { contains: searchTerm, mode: 'insensitive' } },
                    { description: { contains: searchTerm, mode: 'insensitive' } },
                    { author: { name: { contains: searchTerm, mode: 'insensitive' } } },
                ],
            },
            include: { author: true, tags: true, genres: true },
        });
    }
    async getNovelWithChapters(novelId) {
        const novel = await this.prisma.novel.findUnique({
            where: { id: novelId },
            include: {
                author: true,
                alternativeTitles: true,
                tags: true,
                genres: true,
                chapters: {
                    orderBy: { createdAt: 'asc' },
                },
            },
        });
        if (!novel) {
            throw new common_1.NotFoundException(`Роман з ID ${novelId} не знайдено`);
        }
        return novel;
    }
    async updateNovelViews(novelId) {
        return this.prisma.novel.update({
            where: { id: novelId },
            data: { views: { increment: 1 } },
        });
    }
    async getNovelStats(novelId) {
        const novel = await this.prisma.novel.findUnique({
            where: { id: novelId },
            include: {
                _count: {
                    select: { chapters: true, reviews: true },
                },
                novelRating: true,
            },
        });
        if (!novel) {
            throw new common_1.NotFoundException(`Роман з ID ${novelId} не знайдено`);
        }
        return {
            id: novel.id,
            title: novel.title,
            views: novel.views,
            chapterCount: novel._count.chapters,
            reviewCount: novel._count.reviews,
            avgRating: novel.novelRating?.avgRating || 0,
            totalRatings: novel.novelRating?.votesCount || 0,
        };
    }
    async getRelatedNovels(novelId, limit = 5) {
        const novel = await this.prisma.novel.findUnique({
            where: { id: novelId },
            include: { tags: true, genres: true },
        });
        if (!novel) {
            throw new common_1.NotFoundException(`Роман з ID ${novelId} не знайдено`);
        }
        return this.prisma.novel.findMany({
            where: {
                OR: [
                    { tags: { some: { id: { in: novel.tags.map((tag) => tag.id) } } } },
                    {
                        genres: {
                            some: { id: { in: novel.genres.map((genre) => genre.id) } },
                        },
                    },
                ],
                NOT: { id: novelId },
            },
            take: limit,
            include: { author: true, tags: true, genres: true },
        });
    }
    async getNovelsByReleaseYear(year) {
        return this.prisma.novel.findMany({
            where: { releaseYear: year },
            include: { author: true, country: true },
        });
    }
    async getAdultNovels() {
        return this.prisma.novel.findMany({
            where: { isAdult: true },
            include: { author: true },
        });
    }
    async getNonAdultNovels() {
        return this.prisma.novel.findMany({
            where: { isAdult: false },
            include: { author: true },
        });
    }
    async getNovelsByAuthorName(authorName) {
        return this.prisma.novel.findMany({
            where: {
                author: {
                    name: {
                        contains: authorName,
                        mode: 'insensitive',
                    },
                },
            },
            include: { author: true },
        });
    }
    async getNovelsByAlternativeTitle(title) {
        return this.prisma.novel.findMany({
            where: {
                alternativeTitles: {
                    some: {
                        title: {
                            contains: title,
                            mode: 'insensitive',
                        },
                    },
                },
            },
            include: { author: true, alternativeTitles: true },
        });
    }
    async updateNovelRating(novelId, rating) {
        const novel = await this.prisma.novel.findUnique({
            where: { id: novelId },
            include: { novelRating: true },
        });
        if (!novel) {
            throw new common_1.NotFoundException(`Роман з ID ${novelId} не знайдено`);
        }
        const newTotalRating = (novel.novelRating?.totalRating || 0) + rating;
        const newVotesCount = (novel.novelRating?.votesCount || 0) + 1;
        const newAvgRating = newTotalRating / newVotesCount;
        return this.prisma.novel.update({
            where: { id: novelId },
            data: {
                novelRating: {
                    upsert: {
                        create: {
                            totalRating: newTotalRating,
                            votesCount: newVotesCount,
                            avgRating: newAvgRating,
                        },
                        update: {
                            totalRating: newTotalRating,
                            votesCount: newVotesCount,
                            avgRating: newAvgRating,
                        },
                    },
                },
            },
            include: { novelRating: true },
        });
    }
};
exports.NovelService = NovelService;
exports.NovelService = NovelService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], NovelService);
//# sourceMappingURL=novel.service.js.map