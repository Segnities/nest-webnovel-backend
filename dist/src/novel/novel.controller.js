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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NovelController = void 0;
const common_1 = require("@nestjs/common");
const novel_service_1 = require("./novel.service");
const client_1 = require("@prisma/client");
let NovelController = class NovelController {
    constructor(novelService) {
        this.novelService = novelService;
    }
    async findOneById(id) {
        return this.novelService.findOneById(id);
    }
    async findAll(args) {
        return this.novelService.findAll(args);
    }
    async createOne(data) {
        return this.novelService.createOne(data);
    }
    async createMany(data) {
        return this.novelService.createMany(data);
    }
    async updateOne(id, data) {
        return this.novelService.updateOne(id, data);
    }
    async deleteOne(id) {
        return this.novelService.deleteOne(id);
    }
    async findByAuthor(authorId) {
        return this.novelService.findByAuthor(authorId);
    }
    async findByStatus(status) {
        return this.novelService.findByStatus(status);
    }
    async findByFormat(format) {
        return this.novelService.findByFormat(format);
    }
    async findByTranslationStatus(status) {
        return this.novelService.findByTranslationStatus(status);
    }
    async findByTag(tagId) {
        return this.novelService.findByTag(tagId);
    }
    async findByTags(tagIds) {
        return this.novelService.findByTags(tagIds);
    }
    async findByGenre(genreId) {
        return this.novelService.findByGenre(genreId);
    }
    async findByGenres(genreIds) {
        return this.novelService.findByGenres(genreIds);
    }
    async findByCountry(countryId) {
        return this.novelService.findByCountry(countryId);
    }
    async findByCountries(countryIds) {
        return this.novelService.findByCountries(countryIds);
    }
    async getTopRatedNovels(limit = 10) {
        return this.novelService.getTopRatedNovels(limit);
    }
    async getMostViewedNovels(limit = 10) {
        return this.novelService.getMostViewedNovels(limit);
    }
    async getRecentlyUpdatedNovels(limit = 10) {
        return this.novelService.getRecentlyUpdatedNovels(limit);
    }
    async searchNovels(searchTerm) {
        return this.novelService.searchNovels(searchTerm);
    }
    async getNovelWithChapters(id) {
        return this.novelService.getNovelWithChapters(id);
    }
    async updateNovelViews(id) {
        return this.novelService.updateNovelViews(id);
    }
    async getNovelStats(id) {
        return this.novelService.getNovelStats(id);
    }
    async getRelatedNovels(id, limit = 5) {
        return this.novelService.getRelatedNovels(id, limit);
    }
    async getNovelsByReleaseYear(year) {
        return this.novelService.getNovelsByReleaseYear(year);
    }
    async getAdultNovels() {
        return this.novelService.getAdultNovels();
    }
    async getNonAdultNovels() {
        return this.novelService.getNonAdultNovels();
    }
    async getNovelsByAuthorName(name) {
        return this.novelService.getNovelsByAuthorName(name);
    }
    async getNovelsByAlternativeTitle(title) {
        return this.novelService.getNovelsByAlternativeTitle(title);
    }
    async updateNovelRating(id, rating) {
        return this.novelService.updateNovelRating(id, rating);
    }
};
exports.NovelController = NovelController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], NovelController.prototype, "findOneById", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NovelController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NovelController.prototype, "createOne", null);
__decorate([
    (0, common_1.Post)('many'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NovelController.prototype, "createMany", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], NovelController.prototype, "updateOne", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], NovelController.prototype, "deleteOne", null);
__decorate([
    (0, common_1.Get)('author/:authorId'),
    __param(0, (0, common_1.Param)('authorId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], NovelController.prototype, "findByAuthor", null);
__decorate([
    (0, common_1.Get)('status/:status'),
    __param(0, (0, common_1.Param)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NovelController.prototype, "findByStatus", null);
__decorate([
    (0, common_1.Get)('format/:format'),
    __param(0, (0, common_1.Param)('format')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NovelController.prototype, "findByFormat", null);
__decorate([
    (0, common_1.Get)('translation-status/:status'),
    __param(0, (0, common_1.Param)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NovelController.prototype, "findByTranslationStatus", null);
__decorate([
    (0, common_1.Get)('tag/:tagId'),
    __param(0, (0, common_1.Param)('tagId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], NovelController.prototype, "findByTag", null);
__decorate([
    (0, common_1.Get)('tags'),
    __param(0, (0, common_1.Query)('ids', new common_1.ParseArrayPipe({ items: Number, separator: ',' }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], NovelController.prototype, "findByTags", null);
__decorate([
    (0, common_1.Get)('genre/:genreId'),
    __param(0, (0, common_1.Param)('genreId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], NovelController.prototype, "findByGenre", null);
__decorate([
    (0, common_1.Get)('genres'),
    __param(0, (0, common_1.Query)('ids', new common_1.ParseArrayPipe({ items: Number, separator: ',' }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], NovelController.prototype, "findByGenres", null);
__decorate([
    (0, common_1.Get)('country/:countryId'),
    __param(0, (0, common_1.Param)('countryId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], NovelController.prototype, "findByCountry", null);
__decorate([
    (0, common_1.Get)('countries'),
    __param(0, (0, common_1.Query)('ids', new common_1.ParseArrayPipe({ items: Number, separator: ',' }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], NovelController.prototype, "findByCountries", null);
__decorate([
    (0, common_1.Get)('top-rated'),
    __param(0, (0, common_1.Query)('limit', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], NovelController.prototype, "getTopRatedNovels", null);
__decorate([
    (0, common_1.Get)('most-viewed'),
    __param(0, (0, common_1.Query)('limit', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], NovelController.prototype, "getMostViewedNovels", null);
__decorate([
    (0, common_1.Get)('recently-updated'),
    __param(0, (0, common_1.Query)('limit', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], NovelController.prototype, "getRecentlyUpdatedNovels", null);
__decorate([
    (0, common_1.Get)('search'),
    __param(0, (0, common_1.Query)('term')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NovelController.prototype, "searchNovels", null);
__decorate([
    (0, common_1.Get)(':id/chapters'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], NovelController.prototype, "getNovelWithChapters", null);
__decorate([
    (0, common_1.Put)(':id/views'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], NovelController.prototype, "updateNovelViews", null);
__decorate([
    (0, common_1.Get)(':id/stats'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], NovelController.prototype, "getNovelStats", null);
__decorate([
    (0, common_1.Get)(':id/related'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)('limit', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], NovelController.prototype, "getRelatedNovels", null);
__decorate([
    (0, common_1.Get)('release-year/:year'),
    __param(0, (0, common_1.Param)('year', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], NovelController.prototype, "getNovelsByReleaseYear", null);
__decorate([
    (0, common_1.Get)('adult'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NovelController.prototype, "getAdultNovels", null);
__decorate([
    (0, common_1.Get)('non-adult'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NovelController.prototype, "getNonAdultNovels", null);
__decorate([
    (0, common_1.Get)('author-name/:name'),
    __param(0, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NovelController.prototype, "getNovelsByAuthorName", null);
__decorate([
    (0, common_1.Get)('alternative-title/:title'),
    __param(0, (0, common_1.Param)('title')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NovelController.prototype, "getNovelsByAlternativeTitle", null);
__decorate([
    (0, common_1.Put)(':id/rating'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)('rating', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], NovelController.prototype, "updateNovelRating", null);
exports.NovelController = NovelController = __decorate([
    (0, common_1.Controller)('novels'),
    __metadata("design:paramtypes", [novel_service_1.NovelService])
], NovelController);
//# sourceMappingURL=novel.controller.js.map