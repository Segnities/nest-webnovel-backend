import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComplaintCategoryWhereInput } from './complaint-category-where.input';
import { Type } from 'class-transformer';
import { ComplaintCategoryUpdateWithoutComplaintTargetTypesInput } from './complaint-category-update-without-complaint-target-types.input';

@InputType()
export class ComplaintCategoryUpdateToOneWithWhereWithoutComplaintTargetTypesInput {

    @Field(() => ComplaintCategoryWhereInput, {nullable:true})
    @Type(() => ComplaintCategoryWhereInput)
    where?: ComplaintCategoryWhereInput;

    @Field(() => ComplaintCategoryUpdateWithoutComplaintTargetTypesInput, {nullable:false})
    @Type(() => ComplaintCategoryUpdateWithoutComplaintTargetTypesInput)
    data!: ComplaintCategoryUpdateWithoutComplaintTargetTypesInput;
}
