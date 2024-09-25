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
exports.UserNotificationSettingsController = void 0;
const common_1 = require("@nestjs/common");
const user_notification_settings_service_1 = require("./user-notification-settings.service");
let UserNotificationSettingsController = class UserNotificationSettingsController {
    constructor(userNotificationSettingsService) {
        this.userNotificationSettingsService = userNotificationSettingsService;
    }
    async getUserNotificationSettings(userId) {
        return this.userNotificationSettingsService.getUserNotificationSettings(userId);
    }
    async updateUserNotificationSetting(userId, isEnabled) {
        return this.userNotificationSettingsService.updateUserNotificationSetting(userId, isEnabled);
    }
    async setDefaultNotificationSettings(userId) {
        return this.userNotificationSettingsService.setDefaultNotificationSettings(userId);
    }
    async toggleAllNotifications(userId, isEnabled) {
        return this.userNotificationSettingsService.toggleAllNotifications(userId, isEnabled);
    }
    async deleteUserNotificationSettings(userId) {
        return this.userNotificationSettingsService.deleteUserNotificationSettings(userId);
    }
};
exports.UserNotificationSettingsController = UserNotificationSettingsController;
__decorate([
    (0, common_1.Get)(':userId'),
    __param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserNotificationSettingsController.prototype, "getUserNotificationSettings", null);
__decorate([
    (0, common_1.Put)(':userId'),
    __param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)('isEnabled')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Boolean]),
    __metadata("design:returntype", Promise)
], UserNotificationSettingsController.prototype, "updateUserNotificationSetting", null);
__decorate([
    (0, common_1.Post)('default/:userId'),
    __param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserNotificationSettingsController.prototype, "setDefaultNotificationSettings", null);
__decorate([
    (0, common_1.Put)('toggle-all/:userId'),
    __param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)('isEnabled')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Boolean]),
    __metadata("design:returntype", Promise)
], UserNotificationSettingsController.prototype, "toggleAllNotifications", null);
__decorate([
    (0, common_1.Delete)(':userId'),
    __param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserNotificationSettingsController.prototype, "deleteUserNotificationSettings", null);
exports.UserNotificationSettingsController = UserNotificationSettingsController = __decorate([
    (0, common_1.Controller)('user-notification-settings'),
    __metadata("design:paramtypes", [user_notification_settings_service_1.UserNotificationSettingsService])
], UserNotificationSettingsController);
//# sourceMappingURL=user-notification-settings.controller.js.map