import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ComplaintCategoryCreateInput } from './complaint-category-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneComplaintCategoryArgs {

    @Field(() => ComplaintCategoryCreateInput, {nullable:false})
    @Type(() => ComplaintCategoryCreateInput)
    data!: ComplaintCategoryCreateInput;
}
