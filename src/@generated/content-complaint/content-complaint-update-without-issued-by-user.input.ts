import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumApprovalStatusFieldUpdateOperationsInput } from '../prisma/enum-approval-status-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ComplaintReasonUpdateOneRequiredWithoutContentComplaintsNestedInput } from '../complaint-reason/complaint-reason-update-one-required-without-content-complaints-nested.input';
import { ComplaintTargetTypeUpdateOneRequiredWithoutContentComplaintsNestedInput } from '../complaint-target-type/complaint-target-type-update-one-required-without-content-complaints-nested.input';
import { UserUpdateOneRequiredWithoutResolvedContentComplaintsNestedInput } from '../user/user-update-one-required-without-resolved-content-complaints-nested.input';

@InputType()
export class ContentComplaintUpdateWithoutIssuedByUserInput {

    @Field(() => EnumApprovalStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumApprovalStatusFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    contentId?: IntFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    resolvedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => ComplaintReasonUpdateOneRequiredWithoutContentComplaintsNestedInput, {nullable:true})
    complaintReason?: ComplaintReasonUpdateOneRequiredWithoutContentComplaintsNestedInput;

    @Field(() => ComplaintTargetTypeUpdateOneRequiredWithoutContentComplaintsNestedInput, {nullable:true})
    complaintTargetType?: ComplaintTargetTypeUpdateOneRequiredWithoutContentComplaintsNestedInput;

    @Field(() => UserUpdateOneRequiredWithoutResolvedContentComplaintsNestedInput, {nullable:true})
    resolvedByUser?: UserUpdateOneRequiredWithoutResolvedContentComplaintsNestedInput;
}
