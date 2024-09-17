import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ContentComplaintUpdateManyWithoutComplaintReasonNestedInput } from '../content-complaint/content-complaint-update-many-without-complaint-reason-nested.input';
import { UserUpdateOneWithoutComplaintReasonsNestedInput } from '../user/user-update-one-without-complaint-reasons-nested.input';

@InputType()
export class ComplaintReasonUpdateWithoutUserComplaintsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => ContentComplaintUpdateManyWithoutComplaintReasonNestedInput, {nullable:true})
    contentComplaints?: ContentComplaintUpdateManyWithoutComplaintReasonNestedInput;

    @Field(() => UserUpdateOneWithoutComplaintReasonsNestedInput, {nullable:true})
    User?: UserUpdateOneWithoutComplaintReasonsNestedInput;
}
