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
exports.Ban = void 0;
const graphql_1 = require("@nestjs/graphql");
const user_model_1 = require("./user.model");
const appeal_model_1 = require("./appeal.model");
const complaint_target_type_model_1 = require("./complaint-target-type.model");
let Ban = class Ban {
};
exports.Ban = Ban;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Ban.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], Ban.prototype, "banStart", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], Ban.prototype, "banEnd", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Ban.prototype, "duration", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Boolean)
], Ban.prototype, "appealed", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Ban.prototype, "appealId", void 0);
__decorate([
    (0, graphql_1.Field)(() => appeal_model_1.Appeal),
    __metadata("design:type", appeal_model_1.Appeal)
], Ban.prototype, "appeal", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], Ban.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], Ban.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Ban.prototype, "issuedBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_model_1.User),
    __metadata("design:type", user_model_1.User)
], Ban.prototype, "issuedByUser", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Ban.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_model_1.User),
    __metadata("design:type", user_model_1.User)
], Ban.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Ban.prototype, "complaintTargetId", void 0);
__decorate([
    (0, graphql_1.Field)(() => complaint_target_type_model_1.ComplaintTargetType),
    __metadata("design:type", typeof (_a = typeof complaint_target_type_model_1.ComplaintTargetType !== "undefined" && complaint_target_type_model_1.ComplaintTargetType) === "function" ? _a : Object)
], Ban.prototype, "complaintTargetType", void 0);
exports.Ban = Ban = __decorate([
    (0, graphql_1.ObjectType)()
], Ban);
//# sourceMappingURL=ban.model.js.map