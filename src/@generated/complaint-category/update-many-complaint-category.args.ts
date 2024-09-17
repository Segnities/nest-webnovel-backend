import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ComplaintCategoryUpdateManyMutationInput } from './complaint-category-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ComplaintCategoryWhereInput } from './complaint-category-where.input';

@ArgsType()
export class UpdateManyComplaintCategoryArgs {

    @Field(() => ComplaintCategoryUpdateManyMutationInput, {nullable:false})
    @Type(() => ComplaintCategoryUpdateManyMutationInput)
    data!: ComplaintCategoryUpdateManyMutationInput;

    @Field(() => ComplaintCategoryWhereInput, {nullable:true})
    @Type(() => ComplaintCategoryWhereInput)
    where?: ComplaintCategoryWhereInput;
}
