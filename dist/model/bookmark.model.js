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
exports.Bookmark = void 0;
const graphql_1 = require("@nestjs/graphql");
const user_model_1 = require("./user.model");
const chapter_model_1 = require("./chapter.model");
let Bookmark = class Bookmark {
};
exports.Bookmark = Bookmark;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Bookmark.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Bookmark.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_model_1.User),
    __metadata("design:type", user_model_1.User)
], Bookmark.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Bookmark.prototype, "chapterId", void 0);
__decorate([
    (0, graphql_1.Field)(() => chapter_model_1.Chapter),
    __metadata("design:type", typeof (_a = typeof chapter_model_1.Chapter !== "undefined" && chapter_model_1.Chapter) === "function" ? _a : Object)
], Bookmark.prototype, "chapter", void 0);
exports.Bookmark = Bookmark = __decorate([
    (0, graphql_1.ObjectType)()
], Bookmark);
//# sourceMappingURL=bookmark.model.js.map