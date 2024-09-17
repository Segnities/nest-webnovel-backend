import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserComplaintUpdateManyWithoutReasonNestedInput } from '../user-complaint/user-complaint-update-many-without-reason-nested.input';
import { ContentComplaintUpdateManyWithoutComplaintReasonNestedInput } from '../content-complaint/content-complaint-update-many-without-complaint-reason-nested.input';

@InputType()
export class ComplaintReasonUpdateWithoutUserInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserComplaintUpdateManyWithoutReasonNestedInput, {nullable:true})
    userComplaints?: UserComplaintUpdateManyWithoutReasonNestedInput;

    @Field(() => ContentComplaintUpdateManyWithoutComplaintReasonNestedInput, {nullable:true})
    contentComplaints?: ContentComplaintUpdateManyWithoutComplaintReasonNestedInput;
}
