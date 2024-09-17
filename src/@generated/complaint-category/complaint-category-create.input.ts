import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComplaintTargetTypeCreateNestedManyWithoutComplaintCategoryInput } from '../complaint-target-type/complaint-target-type-create-nested-many-without-complaint-category.input';

@InputType()
export class ComplaintCategoryCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => ComplaintTargetTypeCreateNestedManyWithoutComplaintCategoryInput, {nullable:true})
    complaintTargetTypes?: ComplaintTargetTypeCreateNestedManyWithoutComplaintCategoryInput;
}
