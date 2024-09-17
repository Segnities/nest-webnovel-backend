"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NovelTranslationStatus = exports.NovelFormat = exports.NovelStatus = exports.CommentStatus = exports.NotificationMessageStatus = exports.NotificationRelatedEntity = exports.BanStatus = exports.ApprovalStatus = exports.ROLE_NAME = exports.Provider = void 0;
var Provider;
(function (Provider) {
    Provider["GOOGLE"] = "GOOGLE";
    Provider["EMAIL_AND_PASSWORD"] = "EMAIL_AND_PASSWORD";
})(Provider || (exports.Provider = Provider = {}));
var ROLE_NAME;
(function (ROLE_NAME) {
    ROLE_NAME["SYSTEM"] = "SYSTEM";
    ROLE_NAME["ADMIN"] = "ADMIN";
    ROLE_NAME["MODERATOR"] = "MODERATOR";
    ROLE_NAME["DEFAULT_USER"] = "DEFAULT_USER";
})(ROLE_NAME || (exports.ROLE_NAME = ROLE_NAME = {}));
var ApprovalStatus;
(function (ApprovalStatus) {
    ApprovalStatus["Pending"] = "Pending";
    ApprovalStatus["Approved"] = "Approved";
    ApprovalStatus["Rejected"] = "Rejected";
    ApprovalStatus["Reviewed"] = "Reviewed";
    ApprovalStatus["Resolved"] = "Resolved";
})(ApprovalStatus || (exports.ApprovalStatus = ApprovalStatus = {}));
var BanStatus;
(function (BanStatus) {
    BanStatus["Active"] = "Active";
    BanStatus["Expired"] = "Expired";
    BanStatus["Appealed"] = "Appealed";
})(BanStatus || (exports.BanStatus = BanStatus = {}));
var NotificationRelatedEntity;
(function (NotificationRelatedEntity) {
    NotificationRelatedEntity["NOVEL"] = "NOVEL";
    NotificationRelatedEntity["COMMENT"] = "COMMENT";
    NotificationRelatedEntity["REVIEW"] = "REVIEW";
    NotificationRelatedEntity["AUTHOR"] = "AUTHOR";
    NotificationRelatedEntity["SYSTEM"] = "SYSTEM";
})(NotificationRelatedEntity || (exports.NotificationRelatedEntity = NotificationRelatedEntity = {}));
var NotificationMessageStatus;
(function (NotificationMessageStatus) {
    NotificationMessageStatus["SENT"] = "SENT";
    NotificationMessageStatus["PENDING"] = "PENDING";
    NotificationMessageStatus["READ"] = "READ";
    NotificationMessageStatus["UNREAD"] = "UNREAD";
    NotificationMessageStatus["ARCHIVED"] = "ARCHIVED";
})(NotificationMessageStatus || (exports.NotificationMessageStatus = NotificationMessageStatus = {}));
var CommentStatus;
(function (CommentStatus) {
    CommentStatus["ACTIVE"] = "ACTIVE";
    CommentStatus["DELETED"] = "DELETED";
    CommentStatus["HIDDEN_BY_MODERATOR"] = "HIDDEN_BY_MODERATOR";
    CommentStatus["HIDDEN"] = "HIDDEN";
})(CommentStatus || (exports.CommentStatus = CommentStatus = {}));
var NovelStatus;
(function (NovelStatus) {
    NovelStatus["ONGOING"] = "ONGOING";
    NovelStatus["COMPLETED"] = "COMPLETED";
    NovelStatus["HIATUS"] = "HIATUS";
    NovelStatus["CANCELLED"] = "CANCELLED";
})(NovelStatus || (exports.NovelStatus = NovelStatus = {}));
var NovelFormat;
(function (NovelFormat) {
    NovelFormat["LIGHT_NOVEL"] = "LIGHT_NOVEL";
    NovelFormat["WEB_NOVEL"] = "WEB_NOVEL";
})(NovelFormat || (exports.NovelFormat = NovelFormat = {}));
var NovelTranslationStatus;
(function (NovelTranslationStatus) {
    NovelTranslationStatus["NOT_TRANSLATED"] = "NOT_TRANSLATED";
    NovelTranslationStatus["PARTIALLY_TRANSLATED"] = "PARTIALLY_TRANSLATED";
    NovelTranslationStatus["FULLY_TRANSLATED"] = "FULLY_TRANSLATED";
    NovelTranslationStatus["MACHINE_TRANSLATED"] = "MACHINE_TRANSLATED";
    NovelTranslationStatus["ONGOING"] = "ONGOING";
})(NovelTranslationStatus || (exports.NovelTranslationStatus = NovelTranslationStatus = {}));
//# sourceMappingURL=enums.js.map