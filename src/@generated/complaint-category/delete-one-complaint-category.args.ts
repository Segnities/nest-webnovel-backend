import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ComplaintCategoryWhereUniqueInput } from './complaint-category-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneComplaintCategoryArgs {

    @Field(() => ComplaintCategoryWhereUniqueInput, {nullable:false})
    @Type(() => ComplaintCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<ComplaintCategoryWhereUniqueInput, 'id'>;
}
