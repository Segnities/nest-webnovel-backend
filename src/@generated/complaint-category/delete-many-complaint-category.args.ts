import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ComplaintCategoryWhereInput } from './complaint-category-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyComplaintCategoryArgs {

    @Field(() => ComplaintCategoryWhereInput, {nullable:true})
    @Type(() => ComplaintCategoryWhereInput)
    where?: ComplaintCategoryWhereInput;
}
