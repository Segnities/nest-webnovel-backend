import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EnumNotificationRelatedEntityFieldUpdateOperationsInput } from '../prisma/enum-notification-related-entity-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { EnumNotificationMessageStatusFieldUpdateOperationsInput } from '../prisma/enum-notification-message-status-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class NotificationUpdateManyMutationInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    message?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    img?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => EnumNotificationRelatedEntityFieldUpdateOperationsInput, {nullable:true})
    relatedEntityType?: EnumNotificationRelatedEntityFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    relatedEntityId?: IntFieldUpdateOperationsInput;

    @Field(() => EnumNotificationMessageStatusFieldUpdateOperationsInput, {nullable:true})
    notificationStatus?: EnumNotificationMessageStatusFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    metadata?: any;
}
