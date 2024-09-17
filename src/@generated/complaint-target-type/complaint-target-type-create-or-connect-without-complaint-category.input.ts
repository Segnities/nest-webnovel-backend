import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ComplaintTargetTypeWhereUniqueInput } from './complaint-target-type-where-unique.input';
import { Type } from 'class-transformer';
import { ComplaintTargetTypeCreateWithoutComplaintCategoryInput } from './complaint-target-type-create-without-complaint-category.input';

@InputType()
export class ComplaintTargetTypeCreateOrConnectWithoutComplaintCategoryInput {

    @Field(() => ComplaintTargetTypeWhereUniqueInput, {nullable:false})
    @Type(() => ComplaintTargetTypeWhereUniqueInput)
    where!: Prisma.AtLeast<ComplaintTargetTypeWhereUniqueInput, 'id'>;

    @Field(() => ComplaintTargetTypeCreateWithoutComplaintCategoryInput, {nullable:false})
    @Type(() => ComplaintTargetTypeCreateWithoutComplaintCategoryInput)
    create!: ComplaintTargetTypeCreateWithoutComplaintCategoryInput;
}
