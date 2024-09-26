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
exports.UserRatingController = void 0;
const common_1 = require("@nestjs/common");
const user_rating_service_1 = require("./user-rating.service");
const client_1 = require("@prisma/client");
let UserRatingController = class UserRatingController {
    constructor(userRatingService) {
        this.userRatingService = userRatingService;
    }
    async createRating(data) {
        return this.userRatingService.create(data);
    }
    async updateRating(id, data) {
        return this.userRatingService.update(id, data);
    }
    async getRating(id) {
        return this.userRatingService.findOneById(id);
    }
    async deleteRating(id) {
        return this.userRatingService.delete(id);
    }
};
exports.UserRatingController = UserRatingController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserRatingController.prototype, "createRating", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], UserRatingController.prototype, "updateRating", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserRatingController.prototype, "getRating", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserRatingController.prototype, "deleteRating", null);
exports.UserRatingController = UserRatingController = __decorate([
    (0, common_1.Controller)('user-rating'),
    __metadata("design:paramtypes", [user_rating_service_1.UserRatingService])
], UserRatingController);
//# sourceMappingURL=user-rating.controller.js.map