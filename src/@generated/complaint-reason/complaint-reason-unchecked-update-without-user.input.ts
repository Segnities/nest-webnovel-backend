import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserComplaintUncheckedUpdateManyWithoutReasonNestedInput } from '../user-complaint/user-complaint-unchecked-update-many-without-reason-nested.input';
import { ContentComplaintUncheckedUpdateManyWithoutComplaintReasonNestedInput } from '../content-complaint/content-complaint-unchecked-update-many-without-complaint-reason-nested.input';

@InputType()
export class ComplaintReasonUncheckedUpdateWithoutUserInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserComplaintUncheckedUpdateManyWithoutReasonNestedInput, {nullable:true})
    userComplaints?: UserComplaintUncheckedUpdateManyWithoutReasonNestedInput;

    @Field(() => ContentComplaintUncheckedUpdateManyWithoutComplaintReasonNestedInput, {nullable:true})
    contentComplaints?: ContentComplaintUncheckedUpdateManyWithoutComplaintReasonNestedInput;
}
