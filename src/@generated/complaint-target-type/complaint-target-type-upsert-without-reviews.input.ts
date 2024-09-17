import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComplaintTargetTypeUpdateWithoutReviewsInput } from './complaint-target-type-update-without-reviews.input';
import { Type } from 'class-transformer';
import { ComplaintTargetTypeCreateWithoutReviewsInput } from './complaint-target-type-create-without-reviews.input';
import { ComplaintTargetTypeWhereInput } from './complaint-target-type-where.input';

@InputType()
export class ComplaintTargetTypeUpsertWithoutReviewsInput {

    @Field(() => ComplaintTargetTypeUpdateWithoutReviewsInput, {nullable:false})
    @Type(() => ComplaintTargetTypeUpdateWithoutReviewsInput)
    update!: ComplaintTargetTypeUpdateWithoutReviewsInput;

    @Field(() => ComplaintTargetTypeCreateWithoutReviewsInput, {nullable:false})
    @Type(() => ComplaintTargetTypeCreateWithoutReviewsInput)
    create!: ComplaintTargetTypeCreateWithoutReviewsInput;

    @Field(() => ComplaintTargetTypeWhereInput, {nullable:true})
    @Type(() => ComplaintTargetTypeWhereInput)
    where?: ComplaintTargetTypeWhereInput;
}
