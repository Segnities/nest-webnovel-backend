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
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Novel = void 0;
const graphql_1 = require("@nestjs/graphql");
const index_1 = require("../types/index");
const country_model_1 = require("../../country/model/country.model");
let Novel = class Novel {
};
exports.Novel = Novel;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Novel.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Novel.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], Novel.prototype, "original_title", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Novel.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Novel.prototype, "img", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Boolean)
], Novel.prototype, "isAdult", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], Novel.prototype, "releaseYear", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], Novel.prototype, "coverImg", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], Novel.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], Novel.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Novel.prototype, "views", void 0);
__decorate([
    (0, graphql_1.Field)(() => country_model_1.Country),
    __metadata("design:type", country_model_1.Country)
], Novel.prototype, "country", void 0);
__decorate([
    (0, graphql_1.Field)(() => index_1.NovelStatus),
    __metadata("design:type", Number)
], Novel.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => Author),
    __metadata("design:type", typeof (_a = typeof Author !== "undefined" && Author) === "function" ? _a : Object)
], Novel.prototype, "author", void 0);
__decorate([
    (0, graphql_1.Field)(() => index_1.NovelTranslationStatus),
    __metadata("design:type", Number)
], Novel.prototype, "translationStatus", void 0);
__decorate([
    (0, graphql_1.Field)(() => index_1.NovelFormat),
    __metadata("design:type", Number)
], Novel.prototype, "format", void 0);
__decorate([
    (0, graphql_1.Field)(() => CommendableType),
    __metadata("design:type", typeof (_b = typeof CommendableType !== "undefined" && CommendableType) === "function" ? _b : Object)
], Novel.prototype, "commendableType", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Tag]),
    __metadata("design:type", Array)
], Novel.prototype, "tags", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Genre]),
    __metadata("design:type", Array)
], Novel.prototype, "genres", void 0);
__decorate([
    (0, graphql_1.Field)(() => [AlternativeTitle]),
    __metadata("design:type", Array)
], Novel.prototype, "alternativeTitles", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Chapter]),
    __metadata("design:type", Array)
], Novel.prototype, "chapters", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Review]),
    __metadata("design:type", Array)
], Novel.prototype, "reviews", void 0);
__decorate([
    (0, graphql_1.Field)(() => NovelRating, { nullable: true }),
    __metadata("design:type", typeof (_c = typeof NovelRating !== "undefined" && NovelRating) === "function" ? _c : Object)
], Novel.prototype, "novelRating", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserRating]),
    __metadata("design:type", Array)
], Novel.prototype, "usersRatings", void 0);
__decorate([
    (0, graphql_1.Field)(() => [NovelCollectionMapping]),
    __metadata("design:type", Array)
], Novel.prototype, "novelCollectionMapping", void 0);
__decorate([
    (0, graphql_1.Field)(() => ComplaintTargetType),
    __metadata("design:type", typeof (_d = typeof ComplaintTargetType !== "undefined" && ComplaintTargetType) === "function" ? _d : Object)
], Novel.prototype, "complainTargetType", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ContinueReading]),
    __metadata("design:type", Array)
], Novel.prototype, "continueReading", void 0);
__decorate([
    (0, graphql_1.Field)(() => [NovelSubscription]),
    __metadata("design:type", Array)
], Novel.prototype, "novelSubscription", void 0);
__decorate([
    (0, graphql_1.Field)(() => []),
    __metadata("design:type", Array)
], Novel.prototype, "s", void 0);
exports.Novel = Novel = __decorate([
    (0, graphql_1.ObjectType)()
], Novel);
//# sourceMappingURL=novel.model.js.map