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
exports.UserCollectionMapping = void 0;
const graphql_1 = require("@nestjs/graphql");
const collection_model_1 = require("./collection.model");
const user_model_1 = require("./user.model");
const novel_collection_mapping_model_1 = require("./novel-collection-mapping.model");
let UserCollectionMapping = class UserCollectionMapping {
};
exports.UserCollectionMapping = UserCollectionMapping;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], UserCollectionMapping.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], UserCollectionMapping.prototype, "collectionId", void 0);
__decorate([
    (0, graphql_1.Field)(() => collection_model_1.Collection),
    __metadata("design:type", typeof (_a = typeof collection_model_1.Collection !== "undefined" && collection_model_1.Collection) === "function" ? _a : Object)
], UserCollectionMapping.prototype, "collection", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], UserCollectionMapping.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_model_1.User),
    __metadata("design:type", user_model_1.User)
], UserCollectionMapping.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], UserCollectionMapping.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], UserCollectionMapping.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => [novel_collection_mapping_model_1.NovelCollectionMapping]),
    __metadata("design:type", Array)
], UserCollectionMapping.prototype, "novelCollectionMapping", void 0);
exports.UserCollectionMapping = UserCollectionMapping = __decorate([
    (0, graphql_1.ObjectType)()
], UserCollectionMapping);
//# sourceMappingURL=user-collection-mapping.model.js.map