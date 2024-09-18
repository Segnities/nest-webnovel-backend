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
exports.AuthorSubscriptionController = void 0;
const common_1 = require("@nestjs/common");
const author_subscription_service_1 = require("./author-subscription.service");
let AuthorSubscriptionController = class AuthorSubscriptionController {
    constructor(authorSubscriptionService) {
        this.authorSubscriptionService = authorSubscriptionService;
    }
    async subscribeToAuthor(userId, authorId) {
        return this.authorSubscriptionService.subscribeToAuthor(userId, authorId);
    }
    async unsubscribeFromAuthor(userId, authorId) {
        await this.authorSubscriptionService.unsubscribeFromAuthor(userId, authorId);
    }
    async getAuthorSubscribers(authorId) {
        return this.authorSubscriptionService.getAuthorSubscribers(authorId);
    }
    async getUserSubscriptions(userId) {
        return this.authorSubscriptionService.getUserSubscriptions(userId);
    }
    async isUserSubscribedToAuthor(userId, authorId) {
        return this.authorSubscriptionService.isUserSubscribedToAuthor(userId, authorId);
    }
    async getSubscriptionCount(authorId) {
        return this.authorSubscriptionService.getSubscriptionCount(authorId);
    }
    async getRecentSubscribers(authorId, limit = 5) {
        return this.authorSubscriptionService.getRecentSubscribers(authorId, limit);
    }
    async getMostSubscribedAuthors(limit = 10) {
        return this.authorSubscriptionService.getMostSubscribedAuthors(limit);
    }
};
exports.AuthorSubscriptionController = AuthorSubscriptionController;
__decorate([
    (0, common_1.Post)(':userId/:authorId'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('authorId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], AuthorSubscriptionController.prototype, "subscribeToAuthor", null);
__decorate([
    (0, common_1.Delete)(':userId/:authorId'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('authorId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], AuthorSubscriptionController.prototype, "unsubscribeFromAuthor", null);
__decorate([
    (0, common_1.Get)('author/:authorId'),
    __param(0, (0, common_1.Param)('authorId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AuthorSubscriptionController.prototype, "getAuthorSubscribers", null);
__decorate([
    (0, common_1.Get)('user/:userId'),
    __param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AuthorSubscriptionController.prototype, "getUserSubscriptions", null);
__decorate([
    (0, common_1.Get)('check/:userId/:authorId'),
    __param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('authorId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], AuthorSubscriptionController.prototype, "isUserSubscribedToAuthor", null);
__decorate([
    (0, common_1.Get)('count/:authorId'),
    __param(0, (0, common_1.Param)('authorId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AuthorSubscriptionController.prototype, "getSubscriptionCount", null);
__decorate([
    (0, common_1.Get)('recent/:authorId'),
    __param(0, (0, common_1.Param)('authorId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)('limit', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], AuthorSubscriptionController.prototype, "getRecentSubscribers", null);
__decorate([
    (0, common_1.Get)('most-subscribed'),
    __param(0, (0, common_1.Query)('limit', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AuthorSubscriptionController.prototype, "getMostSubscribedAuthors", null);
exports.AuthorSubscriptionController = AuthorSubscriptionController = __decorate([
    (0, common_1.Controller)('author-subscriptions'),
    __metadata("design:paramtypes", [author_subscription_service_1.AuthorSubscriptionService])
], AuthorSubscriptionController);
//# sourceMappingURL=author-subscription.controller.js.map