import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EnumApprovalStatusFieldUpdateOperationsInput } from '../prisma/enum-approval-status-field-update-operations.input';
import { BanUpdateManyWithoutAppealNestedInput } from '../ban/ban-update-many-without-appeal-nested.input';
import { AppelaReasonUpdateOneRequiredWithoutAppealsNestedInput } from '../appela-reason/appela-reason-update-one-required-without-appeals-nested.input';

@InputType()
export class AppealUpdateWithoutReviewedByUserInput {

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

    @Field(() => BanUpdateManyWithoutAppealNestedInput, {nullable:true})
    bans?: BanUpdateManyWithoutAppealNestedInput;

    @Field(() => AppelaReasonUpdateOneRequiredWithoutAppealsNestedInput, {nullable:true})
    appeal?: AppelaReasonUpdateOneRequiredWithoutAppealsNestedInput;
}
