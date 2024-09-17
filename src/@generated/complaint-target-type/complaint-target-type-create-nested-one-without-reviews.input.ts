import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComplaintTargetTypeCreateWithoutReviewsInput } from './complaint-target-type-create-without-reviews.input';
import { Type } from 'class-transformer';
import { ComplaintTargetTypeCreateOrConnectWithoutReviewsInput } from './complaint-target-type-create-or-connect-without-reviews.input';
import { Prisma } from '@prisma/client';
import { ComplaintTargetTypeWhereUniqueInput } from './complaint-target-type-where-unique.input';

@InputType()
export class ComplaintTargetTypeCreateNestedOneWithoutReviewsInput {

    @Field(() => ComplaintTargetTypeCreateWithoutReviewsInput, {nullable:true})
    @Type(() => ComplaintTargetTypeCreateWithoutReviewsInput)
    create?: ComplaintTargetTypeCreateWithoutReviewsInput;

    @Field(() => ComplaintTargetTypeCreateOrConnectWithoutReviewsInput, {nullable:true})
    @Type(() => ComplaintTargetTypeCreateOrConnectWithoutReviewsInput)
    connectOrCreate?: ComplaintTargetTypeCreateOrConnectWithoutReviewsInput;

    @Field(() => ComplaintTargetTypeWhereUniqueInput, {nullable:true})
    @Type(() => ComplaintTargetTypeWhereUniqueInput)
    connect?: Prisma.AtLeast<ComplaintTargetTypeWhereUniqueInput, 'id'>;
}
