import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComplaintTargetTypeWhereInput } from './complaint-target-type-where.input';
import { Type } from 'class-transformer';
import { ComplaintTargetTypeUpdateWithoutReviewsInput } from './complaint-target-type-update-without-reviews.input';

@InputType()
export class ComplaintTargetTypeUpdateToOneWithWhereWithoutReviewsInput {

    @Field(() => ComplaintTargetTypeWhereInput, {nullable:true})
    @Type(() => ComplaintTargetTypeWhereInput)
    where?: ComplaintTargetTypeWhereInput;

    @Field(() => ComplaintTargetTypeUpdateWithoutReviewsInput, {nullable:false})
    @Type(() => ComplaintTargetTypeUpdateWithoutReviewsInput)
    data!: ComplaintTargetTypeUpdateWithoutReviewsInput;
}
