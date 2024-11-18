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
exports.NotificationController = void 0;
const common_1 = require("@nestjs/common");
const notification_service_1 = require("./notification.service");
const client_1 = require("@prisma/client");
const swagger_1 = require("@nestjs/swagger");
const notification_dto_1 = require("./dto/notification.dto");
let NotificationController = class NotificationController {
    constructor(notificationService) {
        this.notificationService = notificationService;
    }
    async sendNotification(body) {
        return this.notificationService.sendPushNotification({
            token: body.token,
            title: body.title,
            body: body.body,
            icon: body.icon,
        });
    }
    async sendMultipleNotifications(body) {
        return this.notificationService.sendNotificationToMultipleTokens({
            tokens: body.tokens,
            title: body.title,
            body: body.body,
            icon: body.icon,
        });
    }
    async sendTopicNotification(body) {
        return this.notificationService.sendTopicNotification({
            topic: body.topic,
            title: body.title,
            body: body.body,
            icon: body.icon,
        });
    }
    async createNotification(createNotificationDto) {
        return this.notificationService.createNotification(createNotificationDto);
    }
    async getNotificationsByUser(userId, status) {
        return this.notificationService.getNotificationsByUser(userId, status);
    }
    async updateNotificationStatus(id, status) {
        return this.notificationService.updateNotificationStatus(id, status);
    }
    async deleteNotification(id) {
        return this.notificationService.deleteNotification(id);
    }
    async getNotificationsByRelatedEntity(entityType, entityId) {
        return this.notificationService.getNotificationsByRelatedEntity(entityType, entityId);
    }
    async getUserNotificationSettings(id, userId) {
        return this.notificationService.getUserNotificationSettings(id, userId);
    }
    async updateUserNotificationSettings(id, userId, updateSettingsDto) {
        return this.notificationService.updateUserNotificationSettings(id, userId, updateSettingsDto);
    }
};
exports.NotificationController = NotificationController;
__decorate([
    (0, common_1.Post)("send-notification"),
    (0, swagger_1.ApiOperation)({ summary: "Send a push notification to a single device" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Notification sent successfully" }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NotificationController.prototype, "sendNotification", null);
__decorate([
    (0, common_1.Post)("send-multiple-notifications"),
    (0, swagger_1.ApiOperation)({ summary: "Send push notifications to multiple devices" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Notifications sent successfully" }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [notification_dto_1.MultipleDeviceNotificationDto]),
    __metadata("design:returntype", Promise)
], NotificationController.prototype, "sendMultipleNotifications", null);
__decorate([
    (0, common_1.Post)("send-topic-notification"),
    (0, swagger_1.ApiOperation)({ summary: "Send a push notification to a topic" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Topic notification sent successfully",
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [notification_dto_1.TopicNotificationDto]),
    __metadata("design:returntype", Promise)
], NotificationController.prototype, "sendTopicNotification", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NotificationController.prototype, "createNotification", null);
__decorate([
    (0, common_1.Get)(':userId'),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Query)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], NotificationController.prototype, "getNotificationsByUser", null);
__decorate([
    (0, common_1.Patch)(':id/status'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], NotificationController.prototype, "updateNotificationStatus", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], NotificationController.prototype, "deleteNotification", null);
__decorate([
    (0, common_1.Get)('/related-entity/:entityType/:entityId'),
    __param(0, (0, common_1.Param)('entityType')),
    __param(1, (0, common_1.Param)('entityId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], NotificationController.prototype, "getNotificationsByRelatedEntity", null);
__decorate([
    (0, common_1.Get)('/settings/:id/:userId'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], NotificationController.prototype, "getUserNotificationSettings", null);
__decorate([
    (0, common_1.Patch)('/settings/:id/:userId'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('userId')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Object]),
    __metadata("design:returntype", Promise)
], NotificationController.prototype, "updateUserNotificationSettings", null);
exports.NotificationController = NotificationController = __decorate([
    (0, common_1.Controller)('notifications'),
    __metadata("design:paramtypes", [notification_service_1.NotificationService])
], NotificationController);
//# sourceMappingURL=notification.controller.js.map