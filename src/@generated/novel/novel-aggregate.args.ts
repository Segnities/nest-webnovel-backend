import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NovelWhereInput } from './novel-where.input';
import { Type } from 'class-transformer';
import { NovelOrderByWithRelationInput } from './novel-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { NovelWhereUniqueInput } from './novel-where-unique.input';
import { Int } from '@nestjs/graphql';
import { NovelCountAggregateInput } from './novel-count-aggregate.input';
import { NovelAvgAggregateInput } from './novel-avg-aggregate.input';
import { NovelSumAggregateInput } from './novel-sum-aggregate.input';
import { NovelMinAggregateInput } from './novel-min-aggregate.input';
import { NovelMaxAggregateInput } from './novel-max-aggregate.input';

@ArgsType()
export class NovelAggregateArgs {

    @Field(() => NovelWhereInput, {nullable:true})
    @Type(() => NovelWhereInput)
    where?: NovelWhereInput;

    @Field(() => [NovelOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<NovelOrderByWithRelationInput>;

    @Field(() => NovelWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<NovelWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => NovelCountAggregateInput, {nullable:true})
    _count?: NovelCountAggregateInput;

    @Field(() => NovelAvgAggregateInput, {nullable:true})
    _avg?: NovelAvgAggregateInput;

    @Field(() => NovelSumAggregateInput, {nullable:true})
    _sum?: NovelSumAggregateInput;

    @Field(() => NovelMinAggregateInput, {nullable:true})
    _min?: NovelMinAggregateInput;

    @Field(() => NovelMaxAggregateInput, {nullable:true})
    _max?: NovelMaxAggregateInput;
}
