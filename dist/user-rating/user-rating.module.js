"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRatingModule = void 0;
const common_1 = require("@nestjs/common");
const user_rating_controller_1 = require("./user-rating.controller");
const user_rating_service_1 = require("./user-rating.service");
const prisma_service_1 = require("../prisma/prisma.service");
let UserRatingModule = class UserRatingModule {
};
exports.UserRatingModule = UserRatingModule;
exports.UserRatingModule = UserRatingModule = __decorate([
    (0, common_1.Module)({
        controllers: [user_rating_controller_1.UserRatingController],
        providers: [user_rating_service_1.UserRatingService, prisma_service_1.PrismaService],
    })
], UserRatingModule);
//# sourceMappingURL=user-rating.module.js.map