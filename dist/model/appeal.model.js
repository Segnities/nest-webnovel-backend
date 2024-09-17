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
exports.Appeal = void 0;
const graphql_1 = require("@nestjs/graphql");
const user_model_1 = require("./user.model");
const appeal_reason_model_1 = require("./appeal-reason.model");
const enums_1 = require("./enums");
let Appeal = class Appeal {
};
exports.Appeal = Appeal;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Appeal.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Appeal.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Appeal.prototype, "body", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], Appeal.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], Appeal.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], Appeal.prototype, "reviewedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => enums_1.ApprovalStatus),
    __metadata("design:type", String)
], Appeal.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Appeal.prototype, "appealReasonId", void 0);
__decorate([
    (0, graphql_1.Field)(() => appeal_reason_model_1.AppelaReason),
    __metadata("design:type", appeal_reason_model_1.AppelaReason)
], Appeal.prototype, "appeal", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Appeal.prototype, "reviewedBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_model_1.User),
    __metadata("design:type", user_model_1.User)
], Appeal.prototype, "reviewedByUser", void 0);
exports.Appeal = Appeal = __decorate([
    (0, graphql_1.ObjectType)()
], Appeal);
//# sourceMappingURL=appeal.model.js.map