import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { AppealUpdateManyWithoutAppealNestedInput } from '../appeal/appeal-update-many-without-appeal-nested.input';

@InputType()
export class AppelaReasonUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => AppealUpdateManyWithoutAppealNestedInput, {nullable:true})
    appeals?: AppealUpdateManyWithoutAppealNestedInput;
}
