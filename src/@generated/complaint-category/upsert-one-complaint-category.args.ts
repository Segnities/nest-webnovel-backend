import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ComplaintCategoryWhereUniqueInput } from './complaint-category-where-unique.input';
import { Type } from 'class-transformer';
import { ComplaintCategoryCreateInput } from './complaint-category-create.input';
import { ComplaintCategoryUpdateInput } from './complaint-category-update.input';

@ArgsType()
export class UpsertOneComplaintCategoryArgs {

    @Field(() => ComplaintCategoryWhereUniqueInput, {nullable:false})
    @Type(() => ComplaintCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<ComplaintCategoryWhereUniqueInput, 'id'>;

    @Field(() => ComplaintCategoryCreateInput, {nullable:false})
    @Type(() => ComplaintCategoryCreateInput)
    create!: ComplaintCategoryCreateInput;

    @Field(() => ComplaintCategoryUpdateInput, {nullable:false})
    @Type(() => ComplaintCategoryUpdateInput)
    update!: ComplaintCategoryUpdateInput;
}
