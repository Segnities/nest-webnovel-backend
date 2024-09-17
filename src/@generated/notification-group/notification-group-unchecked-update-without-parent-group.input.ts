import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NotificationGroupUncheckedUpdateManyWithoutParentGroupNestedInput } from './notification-group-unchecked-update-many-without-parent-group-nested.input';
import { NotificationUncheckedUpdateManyWithoutNotificationGroupNestedInput } from '../notification/notification-unchecked-update-many-without-notification-group-nested.input';

@InputType()
export class NotificationGroupUncheckedUpdateWithoutParentGroupInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isDefault?: BoolFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NotificationGroupUncheckedUpdateManyWithoutParentGroupNestedInput, {nullable:true})
    childGroups?: NotificationGroupUncheckedUpdateManyWithoutParentGroupNestedInput;

    @Field(() => NotificationUncheckedUpdateManyWithoutNotificationGroupNestedInput, {nullable:true})
    notifications?: NotificationUncheckedUpdateManyWithoutNotificationGroupNestedInput;
}
