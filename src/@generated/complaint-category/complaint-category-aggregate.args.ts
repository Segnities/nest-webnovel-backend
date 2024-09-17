import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ComplaintCategoryWhereInput } from './complaint-category-where.input';
import { Type } from 'class-transformer';
import { ComplaintCategoryOrderByWithRelationInput } from './complaint-category-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ComplaintCategoryWhereUniqueInput } from './complaint-category-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ComplaintCategoryCountAggregateInput } from './complaint-category-count-aggregate.input';
import { ComplaintCategoryAvgAggregateInput } from './complaint-category-avg-aggregate.input';
import { ComplaintCategorySumAggregateInput } from './complaint-category-sum-aggregate.input';
import { ComplaintCategoryMinAggregateInput } from './complaint-category-min-aggregate.input';
import { ComplaintCategoryMaxAggregateInput } from './complaint-category-max-aggregate.input';

@ArgsType()
export class ComplaintCategoryAggregateArgs {

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

    @Field(() => ComplaintCategoryCountAggregateInput, {nullable:true})
    _count?: ComplaintCategoryCountAggregateInput;

    @Field(() => ComplaintCategoryAvgAggregateInput, {nullable:true})
    _avg?: ComplaintCategoryAvgAggregateInput;

    @Field(() => ComplaintCategorySumAggregateInput, {nullable:true})
    _sum?: ComplaintCategorySumAggregateInput;

    @Field(() => ComplaintCategoryMinAggregateInput, {nullable:true})
    _min?: ComplaintCategoryMinAggregateInput;

    @Field(() => ComplaintCategoryMaxAggregateInput, {nullable:true})
    _max?: ComplaintCategoryMaxAggregateInput;
}
