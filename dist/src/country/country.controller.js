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
exports.CountryController = void 0;
const common_1 = require("@nestjs/common");
const country_service_1 = require("./country.service");
const client_1 = require("@prisma/client");
let CountryController = class CountryController {
    constructor(countryService) {
        this.countryService = countryService;
    }
    async findOneById(id) {
        return this.countryService.findOneById(id);
    }
    async findAll(args) {
        return this.countryService.findAll(args);
    }
    async createOne(data) {
        return this.countryService.createOne(data);
    }
    async createMany(data) {
        return this.countryService.createMany(data);
    }
    async updateOne(id, data) {
        return this.countryService.updateOne(id, data);
    }
    async deleteOne(id) {
        await this.countryService.deleteOne(id);
    }
    async findByTitle(title) {
        return this.countryService.findByTitle(title);
    }
    async getCountriesWithNovelCount() {
        return this.countryService.getCountriesWithNovelCount();
    }
    async getTopCountriesByNovelCount(limit = 10) {
        return this.countryService.getTopCountriesByNovelCount(limit);
    }
    async getNovelsByCountry(id, args) {
        return this.countryService.getNovelsByCountry(id, args);
    }
    async searchCountries(term) {
        return this.countryService.searchCountries(term);
    }
    async getCountryStats() {
        return this.countryService.getCountryStats();
    }
    async updateNovelCount() {
        await this.countryService.updateNovelCount();
    }
};
exports.CountryController = CountryController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CountryController.prototype, "findOneById", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CountryController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CountryController.prototype, "createOne", null);
__decorate([
    (0, common_1.Post)('many'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], CountryController.prototype, "createMany", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], CountryController.prototype, "updateOne", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CountryController.prototype, "deleteOne", null);
__decorate([
    (0, common_1.Get)('title/:title'),
    __param(0, (0, common_1.Param)('title')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CountryController.prototype, "findByTitle", null);
__decorate([
    (0, common_1.Get)('with-novel-count'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CountryController.prototype, "getCountriesWithNovelCount", null);
__decorate([
    (0, common_1.Get)('top'),
    __param(0, (0, common_1.Query)('limit', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CountryController.prototype, "getTopCountriesByNovelCount", null);
__decorate([
    (0, common_1.Get)(':id/novels'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], CountryController.prototype, "getNovelsByCountry", null);
__decorate([
    (0, common_1.Get)('search/:term'),
    __param(0, (0, common_1.Param)('term')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CountryController.prototype, "searchCountries", null);
__decorate([
    (0, common_1.Get)('stats'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CountryController.prototype, "getCountryStats", null);
__decorate([
    (0, common_1.Post)('update-novel-count'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CountryController.prototype, "updateNovelCount", null);
exports.CountryController = CountryController = __decorate([
    (0, common_1.Controller)('countries'),
    __metadata("design:paramtypes", [country_service_1.CountryService])
], CountryController);
//# sourceMappingURL=country.controller.js.map