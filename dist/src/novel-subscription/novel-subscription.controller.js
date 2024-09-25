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
exports.NovelSubscriptionController = void 0;
const common_1 = require("@nestjs/common");
const novel_subscription_service_1 = require("./novel-subscription.service");
let NovelSubscriptionController = class NovelSubscriptionController {
    constructor(novelSubscriptionService) {
        this.novelSubscriptionService = novelSubscriptionService;
    }
    async subscribeToNovel(userId, novelId) {
        return this.novelSubscriptionService.subscribeToNovel(userId, novelId);
    }
    async unsubscribeFromNovel(userId, novelId) {
        await this.novelSubscriptionService.unsubscribeFromNovel(userId, novelId);
    }
    async getNovelSubscribers(novelId) {
        return this.novelSubscriptionService.getNovelSubscribers(novelId);
    }
    async getUserSubscriptions(userId) {
        return this.novelSubscriptionService.getUserSubscriptions(userId);
    }
    async isUserSubscribedToNovel(userId, novelId) {
        return this.novelSubscriptionService.isUserSubscribedToNovel(userId, novelId);
    }
    async getSubscriptionCount(novelId) {
        return this.novelSubscriptionService.getSubscriptionCount(novelId);
    }
    async getRecentSubscribers(novelId, limit = 5) {
        return this.novelSubscriptionService.getRecentSubscribers(novelId, limit);
    }
    async getMostSubscribedNovels(limit = 10) {
        return this.novelSubscriptionService.getMostSubscribedNovels(limit);
    }
    async getSubscribedNovelsByUser(userId) {
        return this.novelSubscriptionService.getSubscribedNovelsByUser(userId);
    }
};
exports.NovelSubscriptionController = NovelSubscriptionController;
__decorate([
    (0, common_1.Post)(':userId/:novelId'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('novelId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], NovelSubscriptionController.prototype, "subscribeToNovel", null);
__decorate([
    (0, common_1.Delete)(':userId/:novelId'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('novelId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], NovelSubscriptionController.prototype, "unsubscribeFromNovel", null);
__decorate([
    (0, common_1.Get)('novel/:novelId'),
    __param(0, (0, common_1.Param)('novelId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], NovelSubscriptionController.prototype, "getNovelSubscribers", null);
__decorate([
    (0, common_1.Get)('user/:userId'),
    __param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], NovelSubscriptionController.prototype, "getUserSubscriptions", null);
__decorate([
    (0, common_1.Get)('check/:userId/:novelId'),
    __param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('novelId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], NovelSubscriptionController.prototype, "isUserSubscribedToNovel", null);
__decorate([
    (0, common_1.Get)('count/:novelId'),
    __param(0, (0, common_1.Param)('novelId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], NovelSubscriptionController.prototype, "getSubscriptionCount", null);
__decorate([
    (0, common_1.Get)('recent/:novelId'),
    __param(0, (0, common_1.Param)('novelId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)('limit', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], NovelSubscriptionController.prototype, "getRecentSubscribers", null);
__decorate([
    (0, common_1.Get)('most-subscribed'),
    __param(0, (0, common_1.Query)('limit', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], NovelSubscriptionController.prototype, "getMostSubscribedNovels", null);
__decorate([
    (0, common_1.Get)('user-subscribed/:userId'),
    __param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], NovelSubscriptionController.prototype, "getSubscribedNovelsByUser", null);
exports.NovelSubscriptionController = NovelSubscriptionController = __decorate([
    (0, common_1.Controller)('novel-subscriptions'),
    __metadata("design:paramtypes", [novel_subscription_service_1.NovelSubscriptionService])
], NovelSubscriptionController);
//# sourceMappingURL=novel-subscription.controller.js.map