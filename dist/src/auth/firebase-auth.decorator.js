"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = Auth;
const common_1 = require("@nestjs/common");
const firebase_auth_guard_1 = require("./firebase-auth.guard");
function Auth(...permissions) {
    return (0, common_1.applyDecorators)((0, common_1.SetMetadata)('permissions', permissions), (0, common_1.UseGuards)(firebase_auth_guard_1.FirebaseAuthGuard));
}
//# sourceMappingURL=firebase-auth.decorator.js.map