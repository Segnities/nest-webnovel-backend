import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ComplaintTargetTypeUncheckedUpdateManyWithoutComplaintCategoryNestedInput } from '../complaint-target-type/complaint-target-type-unchecked-update-many-without-complaint-category-nested.input';

@InputType()
export class ComplaintCategoryUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => ComplaintTargetTypeUncheckedUpdateManyWithoutComplaintCategoryNestedInput, {nullable:true})
    complaintTargetTypes?: ComplaintTargetTypeUncheckedUpdateManyWithoutComplaintCategoryNestedInput;
}
