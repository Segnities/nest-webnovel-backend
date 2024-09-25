"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirebaseAdmin = void 0;
const common_1 = require("@nestjs/common");
const promises_1 = require("fs/promises");
const admin = require("firebase-admin");
let app = null;
let FirebaseAdmin = class FirebaseAdmin {
    async onApplicationBootstrap() {
        if (!app) {
            const firebaseServiceAccountFile = await (0, promises_1.readFile)('./config/yavir_reads-80075-firebase-adminsdk-chbv5-23034ba1df.json', 'utf8');
            const serviceAccount = await JSON.parse(firebaseServiceAccountFile);
            app = admin.initializeApp({
                credential: admin.credential.cert(serviceAccount),
            });
        }
    }
    setup() {
        return app;
    }
};
exports.FirebaseAdmin = FirebaseAdmin;
exports.FirebaseAdmin = FirebaseAdmin = __decorate([
    (0, common_1.Injectable)()
], FirebaseAdmin);
//# sourceMappingURL=firebase.setup.js.map