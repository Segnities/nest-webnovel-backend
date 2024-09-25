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
exports.AlternativeTitleController = void 0;
const common_1 = require("@nestjs/common");
const alternative_title_service_1 = require("./alternative-title.service");
const client_1 = require("@prisma/client");
let AlternativeTitleController = class AlternativeTitleController {
    constructor(alternativeTitleService) {
        this.alternativeTitleService = alternativeTitleService;
    }
    async findOneById(id) {
        return this.alternativeTitleService.findOneById(id);
    }
    async findAll(args) {
        return this.alternativeTitleService.findAll(args);
    }
    async createOne(data) {
        return this.alternativeTitleService.createOne(data);
    }
    async createMany(data) {
        return this.alternativeTitleService.createMany(data);
    }
    async updateOne(id, data) {
        return this.alternativeTitleService.updateOne(id, data);
    }
    async deleteOne(id) {
        await this.alternativeTitleService.deleteOne(id);
    }
    async findByNovelId(novelId) {
        return this.alternativeTitleService.findByNovelId(novelId);
    }
    async findByTitle(title) {
        return this.alternativeTitleService.findByTitle(title);
    }
};
exports.AlternativeTitleController = AlternativeTitleController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AlternativeTitleController.prototype, "findOneById", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AlternativeTitleController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AlternativeTitleController.prototype, "createOne", null);
__decorate([
    (0, common_1.Post)('many'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], AlternativeTitleController.prototype, "createMany", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], AlternativeTitleController.prototype, "updateOne", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AlternativeTitleController.prototype, "deleteOne", null);
__decorate([
    (0, common_1.Get)('novel/:novelId'),
    __param(0, (0, common_1.Param)('novelId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AlternativeTitleController.prototype, "findByNovelId", null);
__decorate([
    (0, common_1.Get)('title/:title'),
    __param(0, (0, common_1.Param)('title')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AlternativeTitleController.prototype, "findByTitle", null);
exports.AlternativeTitleController = AlternativeTitleController = __decorate([
    (0, common_1.Controller)('alternative-titles'),
    __metadata("design:paramtypes", [alternative_title_service_1.AlternativeTitleService])
], AlternativeTitleController);
//# sourceMappingURL=alternative-title.controller.js.map