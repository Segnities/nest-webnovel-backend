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
exports.ContinueReadingController = void 0;
const common_1 = require("@nestjs/common");
const continue_reading_service_1 = require("./continue-reading.service");
const client_1 = require("@prisma/client");
const CreateContinueReadingDto_1 = require("./dto/CreateContinueReadingDto");
let ContinueReadingController = class ContinueReadingController {
    constructor(continueReadingService) {
        this.continueReadingService = continueReadingService;
    }
    async createContinueReading(data) {
        return this.continueReadingService.createContinueReading(data);
    }
    async createOrUpdateProgress(data) {
        return this.continueReadingService.createOrUpdateReadingProgress(data);
    }
    async getContinueReadingById(id) {
        return this.continueReadingService.getContinueReadingById(id);
    }
    async updateContinueReading(id, data) {
        return this.continueReadingService.updateContinueReading(id, data);
    }
    async deleteContinueReading(id) {
        return this.continueReadingService.deleteContinueReading(id);
    }
    async getContinueReadingByUserId(userId) {
        return this.continueReadingService.getContinueReadingByUserId(userId);
    }
};
exports.ContinueReadingController = ContinueReadingController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateContinueReadingDto_1.CreateContinueReadingDto]),
    __metadata("design:returntype", Promise)
], ContinueReadingController.prototype, "createContinueReading", null);
__decorate([
    (0, common_1.Post)('progress'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateContinueReadingDto_1.CreateContinueReadingDto]),
    __metadata("design:returntype", Promise)
], ContinueReadingController.prototype, "createOrUpdateProgress", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ContinueReadingController.prototype, "getContinueReadingById", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], ContinueReadingController.prototype, "updateContinueReading", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ContinueReadingController.prototype, "deleteContinueReading", null);
__decorate([
    (0, common_1.Get)('user/:userId'),
    __param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ContinueReadingController.prototype, "getContinueReadingByUserId", null);
exports.ContinueReadingController = ContinueReadingController = __decorate([
    (0, common_1.Controller)('continue-reading'),
    __metadata("design:paramtypes", [continue_reading_service_1.ContinueReadingService])
], ContinueReadingController);
//# sourceMappingURL=continue-reading.controller.js.map