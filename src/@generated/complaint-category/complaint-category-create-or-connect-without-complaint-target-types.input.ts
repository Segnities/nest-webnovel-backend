import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ComplaintCategoryWhereUniqueInput } from './complaint-category-where-unique.input';
import { Type } from 'class-transformer';
import { ComplaintCategoryCreateWithoutComplaintTargetTypesInput } from './complaint-category-create-without-complaint-target-types.input';

@InputType()
export class ComplaintCategoryCreateOrConnectWithoutComplaintTargetTypesInput {

    @Field(() => ComplaintCategoryWhereUniqueInput, {nullable:false})
    @Type(() => ComplaintCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<ComplaintCategoryWhereUniqueInput, 'id'>;

    @Field(() => ComplaintCategoryCreateWithoutComplaintTargetTypesInput, {nullable:false})
    @Type(() => ComplaintCategoryCreateWithoutComplaintTargetTypesInput)
    create!: ComplaintCategoryCreateWithoutComplaintTargetTypesInput;
}
