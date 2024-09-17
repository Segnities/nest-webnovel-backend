import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComplaintTargetTypeCreateManyComplaintCategoryInput } from './complaint-target-type-create-many-complaint-category.input';
import { Type } from 'class-transformer';

@InputType()
export class ComplaintTargetTypeCreateManyComplaintCategoryInputEnvelope {

    @Field(() => [ComplaintTargetTypeCreateManyComplaintCategoryInput], {nullable:false})
    @Type(() => ComplaintTargetTypeCreateManyComplaintCategoryInput)
    data!: Array<ComplaintTargetTypeCreateManyComplaintCategoryInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
