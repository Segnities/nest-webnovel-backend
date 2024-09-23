"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContinueReadingModule = void 0;
const common_1 = require("@nestjs/common");
const continue_reading_controller_1 = require("./continue-reading.controller");
const continue_reading_service_1 = require("./continue-reading.service");
const prisma_service_1 = require("../prisma/prisma.service");
let ContinueReadingModule = class ContinueReadingModule {
};
exports.ContinueReadingModule = ContinueReadingModule;
exports.ContinueReadingModule = ContinueReadingModule = __decorate([
    (0, common_1.Module)({
        controllers: [continue_reading_controller_1.ContinueReadingController],
        providers: [continue_reading_service_1.ContinueReadingService, prisma_service_1.PrismaService],
    })
], ContinueReadingModule);
//# sourceMappingURL=continue-reading.module.js.map