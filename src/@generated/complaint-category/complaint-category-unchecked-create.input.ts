import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ComplaintTargetTypeUncheckedCreateNestedManyWithoutComplaintCategoryInput } from '../complaint-target-type/complaint-target-type-unchecked-create-nested-many-without-complaint-category.input';

@InputType()
export class ComplaintCategoryUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => ComplaintTargetTypeUncheckedCreateNestedManyWithoutComplaintCategoryInput, {nullable:true})
    complaintTargetTypes?: ComplaintTargetTypeUncheckedCreateNestedManyWithoutComplaintCategoryInput;
}
