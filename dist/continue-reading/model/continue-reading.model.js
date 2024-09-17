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
exports.ContinueReading = void 0;
const graphql_1 = require("@nestjs/graphql");
const user_model_1 = require("../../user/model/user.model");
const novel_model_1 = require("../../novel/model/novel.model");
let ContinueReading = class ContinueReading {
};
exports.ContinueReading = ContinueReading;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], ContinueReading.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_model_1.User),
    __metadata("design:type", typeof (_a = typeof user_model_1.User !== "undefined" && user_model_1.User) === "function" ? _a : Object)
], ContinueReading.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)(() => novel_model_1.Novel),
    __metadata("design:type", typeof (_b = typeof novel_model_1.Novel !== "undefined" && novel_model_1.Novel) === "function" ? _b : Object)
], ContinueReading.prototype, "novel", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], ContinueReading.prototype, "lastReadChapter", void 0);
exports.ContinueReading = ContinueReading = __decorate([
    (0, graphql_1.ObjectType)()
], ContinueReading);
//# sourceMappingURL=continue-reading.model.js.map