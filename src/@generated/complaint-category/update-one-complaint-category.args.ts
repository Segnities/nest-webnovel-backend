import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ComplaintCategoryUpdateInput } from './complaint-category-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ComplaintCategoryWhereUniqueInput } from './complaint-category-where-unique.input';

@ArgsType()
export class UpdateOneComplaintCategoryArgs {

    @Field(() => ComplaintCategoryUpdateInput, {nullable:false})
    @Type(() => ComplaintCategoryUpdateInput)
    data!: ComplaintCategoryUpdateInput;

    @Field(() => ComplaintCategoryWhereUniqueInput, {nullable:false})
    @Type(() => ComplaintCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<ComplaintCategoryWhereUniqueInput, 'id'>;
}
