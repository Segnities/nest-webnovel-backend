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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Review = void 0;
const graphql_1 = require("@nestjs/graphql");
const user_model_1 = require("./user.model");
const novel_model_1 = require("./novel.model");
const commendable_type_model_1 = require("./commendable-type.model");
const complaint_target_type_model_1 = require("./complaint-target-type.model");
let Review = class Review {
};
exports.Review = Review;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Review.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Review.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Review.prototype, "body", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], Review.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], Review.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Review.prototype, "likes", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Review.prototype, "views", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Review.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_model_1.User),
    __metadata("design:type", user_model_1.User)
], Review.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Review.prototype, "novelId", void 0);
__decorate([
    (0, graphql_1.Field)(() => novel_model_1.Novel),
    __metadata("design:type", typeof (_a = typeof novel_model_1.Novel !== "undefined" && novel_model_1.Novel) === "function" ? _a : Object)
], Review.prototype, "novel", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Review.prototype, "commendableTypeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => commendable_type_model_1.CommendableType),
    __metadata("design:type", typeof (_b = typeof commendable_type_model_1.CommendableType !== "undefined" && commendable_type_model_1.CommendableType) === "function" ? _b : Object)
], Review.prototype, "commendableType", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Review.prototype, "complaintTargetId", void 0);
__decorate([
    (0, graphql_1.Field)(() => complaint_target_type_model_1.ComplaintTargetType),
    __metadata("design:type", typeof (_c = typeof complaint_target_type_model_1.ComplaintTargetType !== "undefined" && complaint_target_type_model_1.ComplaintTargetType) === "function" ? _c : Object)
], Review.prototype, "complainTargetType", void 0);
exports.Review = Review = __decorate([
    (0, graphql_1.ObjectType)()
], Review);
//# sourceMappingURL=review.model.js.map