import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ComplaintTargetTypeWhereUniqueInput } from './complaint-target-type-where-unique.input';
import { Type } from 'class-transformer';
import { ComplaintTargetTypeCreateWithoutReviewsInput } from './complaint-target-type-create-without-reviews.input';

@InputType()
export class ComplaintTargetTypeCreateOrConnectWithoutReviewsInput {

    @Field(() => ComplaintTargetTypeWhereUniqueInput, {nullable:false})
    @Type(() => ComplaintTargetTypeWhereUniqueInput)
    where!: Prisma.AtLeast<ComplaintTargetTypeWhereUniqueInput, 'id'>;

    @Field(() => ComplaintTargetTypeCreateWithoutReviewsInput, {nullable:false})
    @Type(() => ComplaintTargetTypeCreateWithoutReviewsInput)
    create!: ComplaintTargetTypeCreateWithoutReviewsInput;
}
