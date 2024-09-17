import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NotificationGroupUpdateOneWithoutChildGroupsNestedInput } from './notification-group-update-one-without-child-groups-nested.input';
import { NotificationGroupUpdateManyWithoutParentGroupNestedInput } from './notification-group-update-many-without-parent-group-nested.input';
import { NotificationUpdateManyWithoutNotificationGroupNestedInput } from '../notification/notification-update-many-without-notification-group-nested.input';

@InputType()
export class NotificationGroupUpdateInput {

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

    @Field(() => NotificationGroupUpdateOneWithoutChildGroupsNestedInput, {nullable:true})
    parentGroup?: NotificationGroupUpdateOneWithoutChildGroupsNestedInput;

    @Field(() => NotificationGroupUpdateManyWithoutParentGroupNestedInput, {nullable:true})
    childGroups?: NotificationGroupUpdateManyWithoutParentGroupNestedInput;

    @Field(() => NotificationUpdateManyWithoutNotificationGroupNestedInput, {nullable:true})
    notifications?: NotificationUpdateManyWithoutNotificationGroupNestedInput;
}
