import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ComplaintCategoryCreateManyInput } from './complaint-category-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyComplaintCategoryArgs {

    @Field(() => [ComplaintCategoryCreateManyInput], {nullable:false})
    @Type(() => ComplaintCategoryCreateManyInput)
    data!: Array<ComplaintCategoryCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
