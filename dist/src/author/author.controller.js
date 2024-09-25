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
exports.AuthorController = void 0;
const common_1 = require("@nestjs/common");
const author_service_1 = require("./author.service");
const client_1 = require("@prisma/client");
let AuthorController = class AuthorController {
    constructor(authorService) {
        this.authorService = authorService;
    }
    async createAuthor(data) {
        return this.authorService.createAuthor(data);
    }
    async getAuthorById(id) {
        return this.authorService.getAuthorById(Number(id));
    }
    async getAuthorByName(name) {
        return this.authorService.getAuthorByName(name);
    }
    async updateAuthor(id, data) {
        return this.authorService.updateAuthor(Number(id), data);
    }
    async deleteAuthor(id) {
        return this.authorService.deleteAuthor(Number(id));
    }
    async getAllAuthors(skip, take, orderBy) {
        return this.authorService.getAllAuthors({
            skip: skip ? Number(skip) : undefined,
            take: take ? Number(take) : undefined,
            orderBy: orderBy ? JSON.parse(orderBy) : undefined,
        });
    }
    async getAuthorNovels(id) {
        return this.authorService.getAuthorNovels(Number(id));
    }
    async getAuthorSubscribers(id) {
        return this.authorService.getAuthorSubscribers(Number(id));
    }
    async searchAuthors(searchString) {
        return this.authorService.searchAuthors(searchString);
    }
    async getTopAuthors(limit) {
        return this.authorService.getTopAuthors(limit ? Number(limit) : undefined);
    }
    async addNovelToAuthor(id, novelData) {
        return this.authorService.addNovelToAuthor(Number(id), novelData);
    }
};
exports.AuthorController = AuthorController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthorController.prototype, "createAuthor", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AuthorController.prototype, "getAuthorById", null);
__decorate([
    (0, common_1.Get)('name/:name'),
    __param(0, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AuthorController.prototype, "getAuthorByName", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AuthorController.prototype, "updateAuthor", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AuthorController.prototype, "deleteAuthor", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('skip')),
    __param(1, (0, common_1.Query)('take')),
    __param(2, (0, common_1.Query)('orderBy')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], AuthorController.prototype, "getAllAuthors", null);
__decorate([
    (0, common_1.Get)(':id/novels'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AuthorController.prototype, "getAuthorNovels", null);
__decorate([
    (0, common_1.Get)(':id/subscribers'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AuthorController.prototype, "getAuthorSubscribers", null);
__decorate([
    (0, common_1.Get)('search'),
    __param(0, (0, common_1.Query)('q')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AuthorController.prototype, "searchAuthors", null);
__decorate([
    (0, common_1.Get)('top'),
    __param(0, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AuthorController.prototype, "getTopAuthors", null);
__decorate([
    (0, common_1.Post)(':id/novels'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AuthorController.prototype, "addNovelToAuthor", null);
exports.AuthorController = AuthorController = __decorate([
    (0, common_1.Controller)('authors'),
    __metadata("design:paramtypes", [author_service_1.AuthorService])
], AuthorController);
//# sourceMappingURL=author.controller.js.map