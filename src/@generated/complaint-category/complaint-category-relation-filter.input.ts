import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComplaintCategoryWhereInput } from './complaint-category-where.input';

@InputType()
export class ComplaintCategoryRelationFilter {

    @Field(() => ComplaintCategoryWhereInput, {nullable:true})
    is?: ComplaintCategoryWhereInput;

    @Field(() => ComplaintCategoryWhereInput, {nullable:true})
    isNot?: ComplaintCategoryWhereInput;
}
