"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BanModule = void 0;
const common_1 = require("@nestjs/common");
const ban_controller_1 = require("./ban.controller");
const ban_service_1 = require("./ban.service");
const prisma_service_1 = require("../prisma/prisma.service");
let BanModule = class BanModule {
};
exports.BanModule = BanModule;
exports.BanModule = BanModule = __decorate([
    (0, common_1.Module)({
        controllers: [ban_controller_1.BanController],
        providers: [ban_service_1.BanService, prisma_service_1.PrismaService],
    })
], BanModule);
//# sourceMappingURL=ban.module.js.map