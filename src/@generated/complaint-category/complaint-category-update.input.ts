import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ComplaintTargetTypeUpdateManyWithoutComplaintCategoryNestedInput } from '../complaint-target-type/complaint-target-type-update-many-without-complaint-category-nested.input';

@InputType()
export class ComplaintCategoryUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => ComplaintTargetTypeUpdateManyWithoutComplaintCategoryNestedInput, {nullable:true})
    complaintTargetTypes?: ComplaintTargetTypeUpdateManyWithoutComplaintCategoryNestedInput;
}
