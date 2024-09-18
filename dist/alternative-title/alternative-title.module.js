"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlternativeTitleModule = void 0;
const common_1 = require("@nestjs/common");
const alternative_title_controller_1 = require("./alternative-title.controller");
const alternative_title_service_1 = require("./alternative-title.service");
const prisma_service_1 = require("../prisma/prisma.service");
let AlternativeTitleModule = class AlternativeTitleModule {
};
exports.AlternativeTitleModule = AlternativeTitleModule;
exports.AlternativeTitleModule = AlternativeTitleModule = __decorate([
    (0, common_1.Module)({
        controllers: [alternative_title_controller_1.AlternativeTitleController],
        providers: [alternative_title_service_1.AlternativeTitleService, prisma_service_1.PrismaService],
    })
], AlternativeTitleModule);
//# sourceMappingURL=alternative-title.module.js.map