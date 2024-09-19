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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserNotificationSettingsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let UserNotificationSettingsService = class UserNotificationSettingsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getUserNotificationSettings(userId) {
        return this.prisma.userNotificationSettings.findMany({
            where: { userId },
        });
    }
    async updateUserNotificationSetting(userId, isEnabled) {
        const existingSetting = await this.prisma.userNotificationSettings.findFirst({
            where: { userId },
        });
        if (existingSetting) {
            return this.prisma.userNotificationSettings.update({
                where: { id: existingSetting.id },
                data: { receiveSystemNotifications: isEnabled },
            });
        }
        else {
            return this.prisma.userNotificationSettings.create({
                data: {
                    userId,
                    receiveSystemNotifications: isEnabled,
                },
            });
        }
    }
    async getDefaultNotificationSettings() {
        return this.prisma.userNotificationSettings.findMany({
            where: { user: { role: { name: 'DEFAULT_USER' } } },
        });
    }
    async setDefaultNotificationSettings(userId) {
        const defaultSettings = await this.getDefaultNotificationSettings();
        const userSettings = defaultSettings.map((setting) => ({
            userId,
            receiveSystemNotifications: setting.receiveSystemNotifications,
            receiveCommentNotifications: setting.receiveCommentNotifications,
            receiveNovelUpdates: setting.receiveNovelUpdates,
            receiveReviewNotifications: setting.receiveReviewNotifications,
            receiveAuthorUpdates: setting.receiveAuthorUpdates,
        }));
        return this.prisma.userNotificationSettings.createMany({
            data: userSettings,
        });
    }
    async toggleAllNotifications(userId, isEnabled) {
        await this.prisma.userNotificationSettings.updateMany({
            where: { userId },
            data: {
                receiveSystemNotifications: isEnabled,
                receiveCommentNotifications: isEnabled,
                receiveNovelUpdates: isEnabled,
                receiveReviewNotifications: isEnabled,
                receiveAuthorUpdates: isEnabled,
            },
        });
        return this.getUserNotificationSettings(userId);
    }
    async deleteUserNotificationSettings(userId) {
        await this.prisma.userNotificationSettings.deleteMany({
            where: { userId },
        });
    }
};
exports.UserNotificationSettingsService = UserNotificationSettingsService;
exports.UserNotificationSettingsService = UserNotificationSettingsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserNotificationSettingsService);
//# sourceMappingURL=user-notification-settings.service.js.map