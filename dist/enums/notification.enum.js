"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationMessageStatus = exports.NotificationRelatedEntity = void 0;
const graphql_1 = require("@nestjs/graphql");
var NotificationRelatedEntity;
(function (NotificationRelatedEntity) {
    NotificationRelatedEntity["NOVEL"] = "NOVEL";
    NotificationRelatedEntity["COMMENT"] = "COMMENT";
    NotificationRelatedEntity["REVIEW"] = "REVIEW";
    NotificationRelatedEntity["AUTHOR"] = "AUTHOR";
})(NotificationRelatedEntity || (exports.NotificationRelatedEntity = NotificationRelatedEntity = {}));
var NotificationMessageStatus;
(function (NotificationMessageStatus) {
    NotificationMessageStatus["READ"] = "READ";
    NotificationMessageStatus["UNREAD"] = "UNREAD";
})(NotificationMessageStatus || (exports.NotificationMessageStatus = NotificationMessageStatus = {}));
(0, graphql_1.registerEnumType)(NotificationRelatedEntity, {
    name: 'NotificationRelatedEntity',
});
(0, graphql_1.registerEnumType)(NotificationMessageStatus, {
    name: 'NotificationMessageStatus',
});
//# sourceMappingURL=notification.enum.js.map