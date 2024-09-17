import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ComplaintTargetTypeWhereUniqueInput } from './complaint-target-type-where-unique.input';
import { Type } from 'class-transformer';
import { ComplaintTargetTypeUpdateWithoutComplaintCategoryInput } from './complaint-target-type-update-without-complaint-category.input';

@InputType()
export class ComplaintTargetTypeUpdateWithWhereUniqueWithoutComplaintCategoryInput {

    @Field(() => ComplaintTargetTypeWhereUniqueInput, {nullable:false})
    @Type(() => ComplaintTargetTypeWhereUniqueInput)
    where!: Prisma.AtLeast<ComplaintTargetTypeWhereUniqueInput, 'id'>;

    @Field(() => ComplaintTargetTypeUpdateWithoutComplaintCategoryInput, {nullable:false})
    @Type(() => ComplaintTargetTypeUpdateWithoutComplaintCategoryInput)
    data!: ComplaintTargetTypeUpdateWithoutComplaintCategoryInput;
}
