import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EnumApprovalStatusFieldUpdateOperationsInput } from '../prisma/enum-approval-status-field-update-operations.input';
import { BanUpdateManyWithoutAppealNestedInput } from '../ban/ban-update-many-without-appeal-nested.input';
import { UserUpdateOneRequiredWithoutReviewedAppealsNestedInput } from '../user/user-update-one-required-without-reviewed-appeals-nested.input';

@InputType()
export class AppealUpdateWithoutAppealInput {

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

    @Field(() => UserUpdateOneRequiredWithoutReviewedAppealsNestedInput, {nullable:true})
    reviewedByUser?: UserUpdateOneRequiredWithoutReviewedAppealsNestedInput;
}
