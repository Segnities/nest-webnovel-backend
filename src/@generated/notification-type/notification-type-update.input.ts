import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NotificationUpdateManyWithoutTypeNestedInput } from '../notification/notification-update-many-without-type-nested.input';

@InputType()
export class NotificationTypeUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NotificationUpdateManyWithoutTypeNestedInput, {nullable:true})
    notifications?: NotificationUpdateManyWithoutTypeNestedInput;
}
