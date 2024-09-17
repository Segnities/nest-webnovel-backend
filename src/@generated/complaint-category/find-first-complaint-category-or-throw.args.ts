import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ComplaintCategoryWhereInput } from './complaint-category-where.input';
import { Type } from 'class-transformer';
import { ComplaintCategoryOrderByWithRelationInput } from './complaint-category-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ComplaintCategoryWhereUniqueInput } from './complaint-category-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ComplaintCategoryScalarFieldEnum } from './complaint-category-scalar-field.enum';

@ArgsType()
export class FindFirstComplaintCategoryOrThrowArgs {

    @Field(() => ComplaintCategoryWhereInput, {nullable:true})
    @Type(() => ComplaintCategoryWhereInput)
    where?: ComplaintCategoryWhereInput;

    @Field(() => [ComplaintCategoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ComplaintCategoryOrderByWithRelationInput>;

    @Field(() => ComplaintCategoryWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ComplaintCategoryWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ComplaintCategoryScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ComplaintCategoryScalarFieldEnum>;
}
