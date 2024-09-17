import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumApprovalStatusFieldUpdateOperationsInput } from '../prisma/enum-approval-status-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ComplaintReasonUpdateOneRequiredWithoutUserComplaintsNestedInput } from '../complaint-reason/complaint-reason-update-one-required-without-user-complaints-nested.input';
import { UserUpdateOneRequiredWithoutUserComplaintsNestedInput } from '../user/user-update-one-required-without-user-complaints-nested.input';

@InputType()
export class UserComplaintUpdateWithoutComplaintTargetTypeInput {

    @Field(() => EnumApprovalStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumApprovalStatusFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => ComplaintReasonUpdateOneRequiredWithoutUserComplaintsNestedInput, {nullable:true})
    reason?: ComplaintReasonUpdateOneRequiredWithoutUserComplaintsNestedInput;

    @Field(() => UserUpdateOneRequiredWithoutUserComplaintsNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutUserComplaintsNestedInput;
}
