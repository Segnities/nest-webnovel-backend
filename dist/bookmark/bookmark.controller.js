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
exports.BookmarkController = void 0;
const common_1 = require("@nestjs/common");
const bookmark_service_1 = require("./bookmark.service");
let BookmarkController = class BookmarkController {
    constructor(bookmarkService) {
        this.bookmarkService = bookmarkService;
    }
    async createBookmark(data) {
        return this.bookmarkService.createBookmark(data);
    }
    async getBookmarkById(id) {
        return this.bookmarkService.getBookmarkById(id);
    }
    async updateBookmark(id, data) {
        return this.bookmarkService.updateBookmark(id, data);
    }
    async deleteBookmark(id) {
        return this.bookmarkService.deleteBookmark(id);
    }
    async getBookmarksByUserId(userId) {
        return this.bookmarkService.getBookmarksByUserId(userId);
    }
    async getBookmarksByChapterId(chapterId) {
        return this.bookmarkService.getBookmarksByChapterId(chapterId);
    }
};
exports.BookmarkController = BookmarkController;
exports.BookmarkController = BookmarkController = __decorate([
    (0, common_1.Controller)('bookmark'),
    __metadata("design:paramtypes", [bookmark_service_1.BookmarkService])
], BookmarkController);
//# sourceMappingURL=bookmark.controller.js.map