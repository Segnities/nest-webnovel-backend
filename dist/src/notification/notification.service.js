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
let NotificationService = class NotificationService {
    constructor(prisma) {
        this.prisma = prisma;
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
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], NotificationService);
//# sourceMappingURL=notification.service.js.map