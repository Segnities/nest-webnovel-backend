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
exports.NotificationService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const firebase_config_1 = require("../firebase.config");
let NotificationService = class NotificationService {
    constructor(prisma, firebaseAdminService) {
        this.prisma = prisma;
        this.firebaseAdminService = firebaseAdminService;
    }
    async sendPushNotification({ token, title, body, icon }) {
        try {
            const admin = this.firebaseAdminService.getAdmin();
            const response = await admin.messaging().send({
                token,
                webpush: {
                    notification: {
                        title,
                        body,
                        icon,
                    },
                },
            });
            return response;
        }
        catch (error) {
            throw error;
        }
    }
    async sendNotificationToMultipleTokens({ tokens, title, body, icon, }) {
        const message = {
            notification: {
                title,
                body,
                icon,
            },
            tokens,
        };
        try {
            const admin = this.firebaseAdminService.getAdmin();
            const response = await admin.messaging().sendEachForMulticast(message);
            console.log("Successfully sent messages:", response);
            return {
                success: true,
                message: `Successfully sent ${response.successCount} messages; ${response.failureCount} failed.`,
            };
        }
        catch (error) {
            console.log("Error sending messages:", error);
            return { success: false, message: "Failed to send notifications" };
        }
    }
    async sendTopicNotification({ topic, title, body, icon, }) {
        const message = {
            notification: {
                title,
                body,
                icon,
                badge: icon,
                vibrate: [200, 100, 200],
                requireInteraction: true,
            },
            topic,
        };
        try {
            const admin = this.firebaseAdminService.getAdmin();
            const response = await admin.messaging().send(message);
            console.log("Successfully sent message:", response);
            return { success: true, message: "Topic notification sent successfully" };
        }
        catch (error) {
            console.log("Error sending message:", error);
            return { success: false, message: "Failed to send topic notification" };
        }
    }
    async createNotification(data) {
        return this.prisma.notification.create({ data });
    }
    async getNotificationsByUser(userId, status) {
        return this.prisma.notification.findMany({
            where: { userId, notificationStatus: status },
            orderBy: { createdAt: 'desc' },
        });
    }
    async updateNotificationStatus(id, status) {
        return this.prisma.notification.update({
            where: { id },
            data: { notificationStatus: status },
        });
    }
    async deleteNotification(id) {
        return this.prisma.notification.delete({ where: { id } });
    }
    async getNotificationsByRelatedEntity(entityType, entityId) {
        return this.prisma.notification.findMany({
            where: { relatedEntityType: entityType, relatedEntityId: entityId },
        });
    }
    async getUserNotificationSettings(id, userId) {
        return this.prisma.userNotificationSettings.findUnique({
            where: { userId, id },
        });
    }
    async updateUserNotificationSettings(id, userId, data) {
        return this.prisma.userNotificationSettings.update({
            where: { userId, id },
            data,
        });
    }
};
exports.NotificationService = NotificationService;
exports.NotificationService = NotificationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        firebase_config_1.FirebaseAdminService])
], NotificationService);
//# sourceMappingURL=notification.service.js.map