import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationMessageStatus } from './notification-message-status.enum';

@InputType()
export class EnumNotificationMessageStatusFieldUpdateOperationsInput {

    @Field(() => NotificationMessageStatus, {nullable:true})
    set?: keyof typeof NotificationMessageStatus;
}
