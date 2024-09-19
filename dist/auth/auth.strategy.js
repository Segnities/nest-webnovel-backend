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
exports.FirebaseAuthStrategy = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const passport_jwt_1 = require("passport-jwt");
const admin = require("firebase-admin");
const config_1 = require("@nestjs/config");
const prisma_service_1 = require("../prisma/prisma.service");
let FirebaseAuthStrategy = class FirebaseAuthStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy, 'firebase-auth') {
    constructor(configService, prisma) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKeyProvider: async (request, rawJwtToken, done) => {
                const projectId = this.configService.get('FIREBASE_PROJECT_ID');
                done(null, projectId);
            },
        });
        this.configService = configService;
        this.prisma = prisma;
        if (!admin.apps.length) {
            this.firebaseApp = admin.initializeApp({
                projectId: this.configService.get('FIREBASE_PROJECT_ID'),
            });
        }
        else {
            this.firebaseApp = admin.app();
        }
    }
    async validate(token) {
        try {
            console.log(token);
            const decodedToken = await admin.auth().verifyIdToken(token);
            const user = await this.prisma.user.findUnique({
                where: { email: decodedToken.email },
                include: { role: true },
            });
            if (!user) {
                throw new common_1.UnauthorizedException('User not found');
            }
            return user;
        }
        catch (error) {
            throw new common_1.UnauthorizedException('Invalid token');
        }
    }
};
exports.FirebaseAuthStrategy = FirebaseAuthStrategy;
exports.FirebaseAuthStrategy = FirebaseAuthStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService,
        prisma_service_1.PrismaService])
], FirebaseAuthStrategy);
//# sourceMappingURL=auth.strategy.js.map