import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComplaintCategoryUpdateWithoutComplaintTargetTypesInput } from './complaint-category-update-without-complaint-target-types.input';
import { Type } from 'class-transformer';
import { ComplaintCategoryCreateWithoutComplaintTargetTypesInput } from './complaint-category-create-without-complaint-target-types.input';
import { ComplaintCategoryWhereInput } from './complaint-category-where.input';

@InputType()
export class ComplaintCategoryUpsertWithoutComplaintTargetTypesInput {

    @Field(() => ComplaintCategoryUpdateWithoutComplaintTargetTypesInput, {nullable:false})
    @Type(() => ComplaintCategoryUpdateWithoutComplaintTargetTypesInput)
    update!: ComplaintCategoryUpdateWithoutComplaintTargetTypesInput;

    @Field(() => ComplaintCategoryCreateWithoutComplaintTargetTypesInput, {nullable:false})
    @Type(() => ComplaintCategoryCreateWithoutComplaintTargetTypesInput)
    create!: ComplaintCategoryCreateWithoutComplaintTargetTypesInput;

    @Field(() => ComplaintCategoryWhereInput, {nullable:true})
    @Type(() => ComplaintCategoryWhereInput)
    where?: ComplaintCategoryWhereInput;
}
