import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { AppealUncheckedUpdateManyWithoutAppealNestedInput } from '../appeal/appeal-unchecked-update-many-without-appeal-nested.input';

@InputType()
export class AppelaReasonUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => AppealUncheckedUpdateManyWithoutAppealNestedInput, {nullable:true})
    appeals?: AppealUncheckedUpdateManyWithoutAppealNestedInput;
}
