import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComplaintTargetTypeCreateWithoutReviewsInput } from './complaint-target-type-create-without-reviews.input';
import { Type } from 'class-transformer';
import { ComplaintTargetTypeCreateOrConnectWithoutReviewsInput } from './complaint-target-type-create-or-connect-without-reviews.input';
import { ComplaintTargetTypeUpsertWithoutReviewsInput } from './complaint-target-type-upsert-without-reviews.input';
import { Prisma } from '@prisma/client';
import { ComplaintTargetTypeWhereUniqueInput } from './complaint-target-type-where-unique.input';
import { ComplaintTargetTypeUpdateToOneWithWhereWithoutReviewsInput } from './complaint-target-type-update-to-one-with-where-without-reviews.input';

@InputType()
export class ComplaintTargetTypeUpdateOneRequiredWithoutReviewsNestedInput {

    @Field(() => ComplaintTargetTypeCreateWithoutReviewsInput, {nullable:true})
    @Type(() => ComplaintTargetTypeCreateWithoutReviewsInput)
    create?: ComplaintTargetTypeCreateWithoutReviewsInput;

    @Field(() => ComplaintTargetTypeCreateOrConnectWithoutReviewsInput, {nullable:true})
    @Type(() => ComplaintTargetTypeCreateOrConnectWithoutReviewsInput)
    connectOrCreate?: ComplaintTargetTypeCreateOrConnectWithoutReviewsInput;

    @Field(() => ComplaintTargetTypeUpsertWithoutReviewsInput, {nullable:true})
    @Type(() => ComplaintTargetTypeUpsertWithoutReviewsInput)
    upsert?: ComplaintTargetTypeUpsertWithoutReviewsInput;

    @Field(() => ComplaintTargetTypeWhereUniqueInput, {nullable:true})
    @Type(() => ComplaintTargetTypeWhereUniqueInput)
    connect?: Prisma.AtLeast<ComplaintTargetTypeWhereUniqueInput, 'id'>;

    @Field(() => ComplaintTargetTypeUpdateToOneWithWhereWithoutReviewsInput, {nullable:true})
    @Type(() => ComplaintTargetTypeUpdateToOneWithWhereWithoutReviewsInput)
    update?: ComplaintTargetTypeUpdateToOneWithWhereWithoutReviewsInput;
}
