import { User } from '../../user/model/user.model';
export declare class UserNotificationSettings {
    id: number;
    user: User;
    emailNotifications: boolean;
    pushNotifications: boolean;
}
