"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppealModule = void 0;
const common_1 = require("@nestjs/common");
const appeal_controller_1 = require("./appeal.controller");
const appeal_service_1 = require("./appeal.service");
const prisma_service_1 = require("../prisma/prisma.service");
let AppealModule = class AppealModule {
};
exports.AppealModule = AppealModule;
exports.AppealModule = AppealModule = __decorate([
    (0, common_1.Module)({
        controllers: [appeal_controller_1.AppealController],
        providers: [appeal_service_1.AppealService, prisma_service_1.PrismaService],
    })
], AppealModule);
//# sourceMappingURL=appeal.module.js.map