import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { UserUpdateOneRequiredWithoutUserNotificationSettingsNestedInput } from '../user/user-update-one-required-without-user-notification-settings-nested.input';

@InputType()
export class UserNotificationSettingsUpdateInput {

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    receiveSystemNotifications?: BoolFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    receiveCommentNotifications?: BoolFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    receiveNovelUpdates?: BoolFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    receiveReviewNotifications?: BoolFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    receiveAuthorUpdates?: BoolFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutUserNotificationSettingsNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutUserNotificationSettingsNestedInput;
}
