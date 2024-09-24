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
exports.UserCollectionMappingController = void 0;
const common_1 = require("@nestjs/common");
const user_collection_mapping_service_1 = require("./user-collection-mapping.service");
const client_1 = require("@prisma/client");
let UserCollectionMappingController = class UserCollectionMappingController {
    constructor(userCollectionMappingService) {
        this.userCollectionMappingService = userCollectionMappingService;
    }
    async createMapping(createMappingDto) {
        return this.userCollectionMappingService.createMapping(createMappingDto);
    }
    async getMappingsByUserId(userId) {
        return this.userCollectionMappingService.getMappingsByUserId(userId);
    }
    async getMappingsByCollectionId(collectionId) {
        return this.userCollectionMappingService.getMappingsByCollectionId(collectionId);
    }
    async updateMapping(id, updateMappingDto) {
        return this.userCollectionMappingService.updateMapping(id, updateMappingDto);
    }
    async deleteMapping(id) {
        return this.userCollectionMappingService.deleteMapping(id);
    }
    async getUserCollectionCount(userId) {
        return this.userCollectionMappingService.getUserCollectionCount(userId);
    }
};
exports.UserCollectionMappingController = UserCollectionMappingController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserCollectionMappingController.prototype, "createMapping", null);
__decorate([
    (0, common_1.Get)('user/:userId'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserCollectionMappingController.prototype, "getMappingsByUserId", null);
__decorate([
    (0, common_1.Get)('collection/:collectionId'),
    __param(0, (0, common_1.Param)('collectionId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserCollectionMappingController.prototype, "getMappingsByCollectionId", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], UserCollectionMappingController.prototype, "updateMapping", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserCollectionMappingController.prototype, "deleteMapping", null);
__decorate([
    (0, common_1.Get)('user/:userId/count'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserCollectionMappingController.prototype, "getUserCollectionCount", null);
exports.UserCollectionMappingController = UserCollectionMappingController = __decorate([
    (0, common_1.Controller)('user-collection-mapping'),
    __metadata("design:paramtypes", [user_collection_mapping_service_1.UserCollectionMappingService])
], UserCollectionMappingController);
//# sourceMappingURL=user-collection-mapping.controller.js.map