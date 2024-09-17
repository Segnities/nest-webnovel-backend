import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComplaintTargetTypeScalarWhereInput } from './complaint-target-type-scalar-where.input';
import { Type } from 'class-transformer';
import { ComplaintTargetTypeUpdateManyMutationInput } from './complaint-target-type-update-many-mutation.input';

@InputType()
export class ComplaintTargetTypeUpdateManyWithWhereWithoutComplaintCategoryInput {

    @Field(() => ComplaintTargetTypeScalarWhereInput, {nullable:false})
    @Type(() => ComplaintTargetTypeScalarWhereInput)
    where!: ComplaintTargetTypeScalarWhereInput;

    @Field(() => ComplaintTargetTypeUpdateManyMutationInput, {nullable:false})
    @Type(() => ComplaintTargetTypeUpdateManyMutationInput)
    data!: ComplaintTargetTypeUpdateManyMutationInput;
}
