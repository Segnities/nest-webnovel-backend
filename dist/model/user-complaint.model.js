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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserComplaint = void 0;
const graphql_1 = require("@nestjs/graphql");
const user_model_1 = require("./user.model");
const complaint_reason_model_1 = require("./complaint-reason.model");
const complaint_target_type_model_1 = require("./complaint-target-type.model");
const enums_1 = require("./enums");
let UserComplaint = class UserComplaint {
};
exports.UserComplaint = UserComplaint;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], UserComplaint.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => enums_1.ApprovalStatus),
    __metadata("design:type", String)
], UserComplaint.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], UserComplaint.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], UserComplaint.prototype, "reasonId", void 0);
__decorate([
    (0, graphql_1.Field)(() => complaint_reason_model_1.ComplaintReason),
    __metadata("design:type", complaint_reason_model_1.ComplaintReason)
], UserComplaint.prototype, "reason", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], UserComplaint.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_model_1.User),
    __metadata("design:type", user_model_1.User)
], UserComplaint.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], UserComplaint.prototype, "complaintTargetId", void 0);
__decorate([
    (0, graphql_1.Field)(() => complaint_target_type_model_1.ComplaintTargetType),
    __metadata("design:type", typeof (_a = typeof complaint_target_type_model_1.ComplaintTargetType !== "undefined" && complaint_target_type_model_1.ComplaintTargetType) === "function" ? _a : Object)
], UserComplaint.prototype, "complaintTargetType", void 0);
exports.UserComplaint = UserComplaint = __decorate([
    (0, graphql_1.ObjectType)()
], UserComplaint);
//# sourceMappingURL=user-complaint.model.js.map