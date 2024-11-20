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
const cloudinary_service_1 = require("../cloudinary/cloudinary.service");
const prisma_service_1 = require("../prisma/prisma.service");
const common_1 = require("@nestjs/common");
const compressAndUploadImage_1 = require("../../utils/compressAndUploadImage");
const deleteLocalImages_1 = require("../../utils/deleteLocalImages");
const selectNovel_1 = require("./types/selectNovel");
const whereNovel_1 = require("./types/whereNovel");
let NovelService = class NovelService {
    constructor(prisma, cloudinaryService) {
        this.prisma = prisma;
        this.cloudinaryService = cloudinaryService;
    }
    async findChaptersStatsByChapterSlug(slug) {
        return this.prisma.novel.findUnique({
            where: { slug },
            select: {
                isAdult: true,
                slug: true,
                title: true,
                img: true,
                chapters: {
                    select: {
                        title: true,
                        chapterNumber: true,
                        slug: true,
                    }
                }
            }
        });
    }
    async searchByCombinedConditions(searchTerm, limit = 20, orderDirection = 'desc') {
        const novelWhere = (0, whereNovel_1.buildTitleSearchCondition)(searchTerm);
        const authorWhere = (0, whereNovel_1.buildAuthorCondition)(searchTerm);
        const yearWhere = (0, whereNovel_1.buildYearSearchCondition)(searchTerm);
        const [novels, novelTotal, authors, authorTotal, novelsByYear, novelsByYearTotal] = await Promise.all([
            this.prisma.novel.findMany({
                where: novelWhere,
                select: selectNovel_1.selectMinimalNovelSetup,
                take: limit,
                orderBy: { title: orderDirection },
            }),
            this.prisma.novel.count({
                where: novelWhere,
            }),
            this.prisma.author.findMany({
                where: authorWhere,
                select: {
                    id: true,
                    name: true,
                    img: true,
                },
                orderBy: {
                    name: orderDirection,
                },
                take: limit,
            }),
            this.prisma.author.count({
                where: authorWhere,
            }),
            this.prisma.novel.findMany({
                where: yearWhere,
                select: selectNovel_1.selectMinimalNovelSetup,
                orderBy: {
                    releaseYear: orderDirection,
                },
            }),
            this.prisma.novel.count({
                where: yearWhere,
            })
        ]);
        const maxTotal = Math.max(novelTotal, authorTotal, novelsByYearTotal);
        return {
            novels: {
                data: novels,
                total: novelTotal,
            },
            authors: {
                data: authors,
                total: authorTotal,
            },
            year: {
                data: novelsByYear,
                total: novelsByYearTotal,
            },
            pagination: {
                limit,
                totalPages: Math.ceil(maxTotal / limit),
            },
        };
    }
    async searchByAuthor(authorName, page = 1, limit = 20) {
        const skip = (page - 1) * limit;
        const whereCondition = (0, whereNovel_1.buildAuthorSearchCondition)(authorName);
        const [novels, total] = await Promise.all([
            this.prisma.novel.findMany({
                where: whereCondition,
                select: {
                    id: true,
                    title: true,
                    slug: true,
                    img: true,
                    author: {
                        select: {
                            id: true,
                            name: true,
                        },
                    },
                },
                take: limit,
                skip,
                orderBy: { views: 'desc' },
            }),
            this.prisma.novel.count({ where: whereCondition }),
        ]);
        return {
            data: novels,
            pagination: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit),
            },
        };
    }
    async searchByYear(year, page = 1, limit = 20) {
        const skip = (page - 1) * limit;
        const whereCondition = (0, whereNovel_1.buildYearSearchCondition)(year);
        const [novels, total] = await Promise.all([
            this.prisma.novel.findMany({
                where: whereCondition,
                select: {
                    id: true,
                    title: true,
                    releaseYear: true,
                    slug: true,
                    img: true,
                    author: {
                        select: { name: true },
                    },
                },
                take: limit,
                skip,
                orderBy: { views: 'desc' },
            }),
            this.prisma.novel.count({ where: whereCondition }),
        ]);
        return {
            data: novels,
            pagination: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit),
            },
        };
    }
    async searchByTitle(searchTerm, page = 1, limit = 20) {
        const skip = (page - 1) * limit;
        const whereCondition = (0, whereNovel_1.buildTitleSearchCondition)(searchTerm);
        const [novels, total] = await Promise.all([
            this.prisma.novel.findMany({
                where: whereCondition,
                select: selectNovel_1.selectMinimalNovelSetup,
                take: limit,
                skip,
                orderBy: { views: 'desc' },
            }),
            this.prisma.novel.count({ where: whereCondition }),
        ]);
        return {
            data: novels,
            pagination: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit),
            },
        };
    }
    async getDownloadData(slug) {
        const chapters_stats = await this.prisma.novel.findUnique({
            where: { slug },
            select: {
                chapters: {
                    select: {
                        id: true,
                        title: true,
                        chapterNumber: true,
                        slug: true,
                        createdAt: true,
                        updatedAt: true
                    }
                }
            }
        });
        const download_data = await this.prisma.novel.findUnique({
            where: { slug },
            select: {
                id: true,
                title: true,
                coverImg: true,
                img: true,
                description: true,
                format: true,
                genres: true,
                createdAt: true,
                updatedAt: true,
                releaseYear: true,
                isAdult: true,
                status: true,
                slug: true,
                translationStatus: true,
                country: {
                    select: {
                        title: true,
                    },
                },
                author: {
                    select: {
                        name: true,
                    },
                },
                chapters: {
                    select: {
                        chapterNumber: true,
                        id: true,
                        slug: true,
                        title: true,
                        content: true,
                        createdAt: true,
                        updatedAt: true,
                    },
                },
            }
        });
        if (!download_data) {
            throw new common_1.NotFoundException('Novel not found');
        }
        return { download_data, chapters_stats };
    }
    async findOneById(id) {
        return this.prisma.novel.findUnique({
            where: { id },
            include: {
                author: true,
                alternativeTitles: true,
                tags: true,
                chapters: {
                    select: {
                        id: true,
                        title: true,
                        createdAt: true,
                        updatedAt: true,
                        slug: true,
                        views: true,
                        chapterNumber: true,
                    },
                },
            },
        });
    }
    async createOne(data) {
        const localImages = [];
        try {
            console.log('Original data:', data);
            const novelImageProps = {
                imageUrl: data.img,
                title: data.original_title,
                width: 800,
                height: 600,
            };
            const novelImage = await (0, compressAndUploadImage_1.default)(novelImageProps);
            localImages.push(novelImage);
            console.log('Compressed novel image URL:', novelImage);
            const coverImageProps = {
                imageUrl: data.coverImg,
                title: data.original_title,
                width: 1000,
                height: 450,
            };
            const coverImage = data.coverImg
                ? await (0, compressAndUploadImage_1.default)(coverImageProps)
                : null;
            console.log('Compressed cover image URL:', coverImage);
            localImages.push(coverImage);
            const cloudinaryImgSecureUrl = (await this.cloudinaryService.uploadImage(novelImage)).secure_url;
            const cloudinaryCoverSecureUrl = coverImage
                ? (await this.cloudinaryService.uploadImage(coverImage)).secure_url
                : null;
            const createdNovel = await this.prisma.novel.create({
                data: {
                    title: data.title,
                    description: data.description,
                    original_title: data.original_title,
                    slug: data.slug,
                    releaseYear: data.releaseYear,
                    isAdult: data.isAdult,
                    translationStatus: data.translationStatus,
                    format: data.format,
                    status: data.status,
                    commendableType: { connect: { id: data.commendableType.connect.id } },
                    country: { connect: { id: data.country.connect.id } },
                    author: { connect: { id: data.author.connect.id } },
                    img: cloudinaryImgSecureUrl,
                    coverImg: cloudinaryCoverSecureUrl,
                },
            });
            return createdNovel;
        }
        catch (error) {
            console.error('Error creating novel:', error);
            await (0, deleteLocalImages_1.deleteLocalImages)(localImages);
            throw error;
        }
    }
    async createMany(data) {
        const localImages = [];
        try {
            const novels = [];
            for (const novelData of data) {
                if (!novelData.img) {
                    throw new Error(`Invalid image URL for novel: ${novelData.original_title}`);
                }
                const novelImageProps = {
                    imageUrl: novelData.img,
                    title: novelData.original_title,
                    width: 800,
                    height: 600,
                };
                const novelImage = await (0, compressAndUploadImage_1.default)(novelImageProps);
                localImages.push(novelImage);
                console.log('Compressed novel image URL:', novelImage);
                const coverImageProps = novelData.coverImg
                    ? {
                        imageUrl: novelData.coverImg,
                        title: novelData.original_title,
                        width: 1000,
                        height: 450,
                    }
                    : null;
                const coverImage = coverImageProps
                    ? await (0, compressAndUploadImage_1.default)(coverImageProps)
                    : null;
                localImages.push(coverImage);
                console.log('Compressed cover image URL:', coverImage);
                const cloudinaryImgSecureUrl = (await this.cloudinaryService.uploadImage(novelImage)).secure_url;
                const cloudinaryCoverSecureUrl = coverImage
                    ? (await this.cloudinaryService.uploadImage(coverImage)).secure_url
                    : null;
                const novel = {
                    ...novelData,
                    img: cloudinaryImgSecureUrl,
                    coverImg: cloudinaryCoverSecureUrl,
                };
                novels.push(novel);
            }
            const createdNovels = await this.prisma.novel.createManyAndReturn({
                data: novels,
            });
            return createdNovels;
        }
        catch (error) {
            await (0, deleteLocalImages_1.deleteLocalImages)(localImages);
            throw error;
        }
    }
    async findOneBySlug(slug) {
        return this.prisma.novel.findUnique({
            where: { slug },
            include: {
                author: true,
                alternativeTitles: true,
                country: {
                    select: {
                        title: true,
                    },
                },
                tags: true,
                chapters: {
                    select: {
                        id: true,
                        title: true,
                        createdAt: true,
                        updatedAt: true,
                        slug: true,
                        views: true,
                        chapterNumber: true,
                    },
                },
            },
        });
    }
    async findOneByTitle(title) {
        return this.prisma.novel.findFirst({ where: { title } });
    }
    async findOneByOriginalTitle(original_title) {
        return this.prisma.novel.findFirst({ where: { original_title } });
    }
    async findAll(args) {
        try {
            return this.prisma.novel.findMany(args);
        }
        catch (error) {
            throw error;
        }
    }
    async likeNovel(novelId) {
        return this.prisma.novel.update({
            where: { id: novelId },
            data: { likes: { increment: 1 } },
        });
    }
    async dislikeNovel(novelId) {
        return this.prisma.novel.update({
            where: { id: novelId },
            data: { dislikes: { increment: 1 } },
        });
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
                likes: 'desc',
            },
            include: { author: true },
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
            include: { tags: true, genres: true, author: true, chapters: true },
        });
    }
    async findRecentlyCreatedNovels(limit = 10) {
        return this.prisma.novel.findMany({
            take: limit,
            orderBy: { createdAt: 'desc' },
            select: {
                id: true,
                title: true,
                slug: true,
                country: {
                    select: { title: true },
                },
                img: true,
                createdAt: true,
            },
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
            likes: novel.likes,
            dislikes: novel.dislikes,
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
    async getDiscoverNovels() {
        const top500Novels = await this.prisma.novel.findMany({
            orderBy: {
                likes: 'desc',
            },
            take: 500,
            select: selectNovel_1.selectMinimalNovelSetup,
        });
        const shuffled = top500Novels.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 20);
    }
    async getTimeRatingNovels() {
        const now = new Date();
        const weekAgo = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7);
        const monthAgo = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate());
        const weeklyTop = [];
        const monthlyTop = [];
        const novels = await this.prisma.novel.findMany({
            select: {
                id: true,
                title: true,
                slug: true,
                country: {
                    select: { title: true },
                },
                img: true,
                createdAt: true,
            },
            orderBy: {
                likes: 'desc',
            },
        });
        for (const novel of novels) {
            const createdAt = new Date(novel.createdAt);
            if (createdAt >= monthAgo && monthlyTop.length < 10) {
                monthlyTop.push(novel);
            }
            if (createdAt >= weekAgo && weeklyTop.length < 10) {
                weeklyTop.push(novel);
            }
            if (weeklyTop.length >= 10 && monthlyTop.length >= 10) {
                break;
            }
        }
        return {
            weeklyTop: novels.slice(0, 10),
            monthlyTop,
            allTimeTop: novels.slice(0, 10),
        };
    }
    async getTopRatingNovels({ limit, select, }) {
        return this.prisma.novel.findMany({
            take: limit,
            orderBy: {
                likes: 'desc',
            },
            select,
        });
    }
    async findLastUpdatedChaptersToday() {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return this.prisma.novel.findMany({
            where: {
                chapters: {
                    some: {},
                },
            },
            select: {
                id: true,
                img: true,
                title: true,
                slug: true,
                country: {
                    select: {
                        title: true,
                    },
                },
                releaseYear: true,
                chapters: {
                    select: {
                        slug: true,
                        title: true,
                        id: true,
                        chapterNumber: true,
                    },
                    where: {
                        createdAt: {
                            gte: today,
                        },
                    },
                },
            },
        });
    }
};
exports.NovelService = NovelService;
exports.NovelService = NovelService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        cloudinary_service_1.CloudinaryService])
], NovelService);
//# sourceMappingURL=novel.service.js.map