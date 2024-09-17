import { User } from './user.model';
export declare class UserNotificationSettings {
    id: number;
    receiveSystemNotifications: boolean;
    receiveCommentNotifications: boolean;
    receiveNovelUpdates: boolean;
    receiveReviewNotifications: boolean;
    receiveAuthorUpdates: boolean;
    userId: number;
    user: User;
}
