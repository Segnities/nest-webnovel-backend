import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EnumApprovalStatusFieldUpdateOperationsInput } from '../prisma/enum-approval-status-field-update-operations.input';
import { BanUncheckedUpdateManyWithoutAppealNestedInput } from '../ban/ban-unchecked-update-many-without-appeal-nested.input';

@InputType()
export class AppealUncheckedUpdateWithoutReviewedByUserInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    body?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    reviewedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => EnumApprovalStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumApprovalStatusFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    appealReasonId?: IntFieldUpdateOperationsInput;

    @Field(() => BanUncheckedUpdateManyWithoutAppealNestedInput, {nullable:true})
    bans?: BanUncheckedUpdateManyWithoutAppealNestedInput;
}
