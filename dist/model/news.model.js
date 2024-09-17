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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.News = void 0;
const graphql_1 = require("@nestjs/graphql");
const user_model_1 = require("./user.model");
const commendable_type_model_1 = require("./commendable-type.model");
const complaint_target_type_model_1 = require("./complaint-target-type.model");
let News = class News {
};
exports.News = News;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], News.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], News.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], News.prototype, "body", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], News.prototype, "likes", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], News.prototype, "views", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Boolean)
], News.prototype, "published", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], News.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], News.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], News.prototype, "commendableTypeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => commendable_type_model_1.CommendableType),
    __metadata("design:type", typeof (_a = typeof commendable_type_model_1.CommendableType !== "undefined" && commendable_type_model_1.CommendableType) === "function" ? _a : Object)
], News.prototype, "commendableType", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], News.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_model_1.User),
    __metadata("design:type", user_model_1.User)
], News.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], News.prototype, "complaintTargetId", void 0);
__decorate([
    (0, graphql_1.Field)(() => complaint_target_type_model_1.ComplaintTargetType),
    __metadata("design:type", typeof (_b = typeof complaint_target_type_model_1.ComplaintTargetType !== "undefined" && complaint_target_type_model_1.ComplaintTargetType) === "function" ? _b : Object)
], News.prototype, "complainTargetType", void 0);
exports.News = News = __decorate([
    (0, graphql_1.ObjectType)()
], News);
//# sourceMappingURL=news.model.js.map