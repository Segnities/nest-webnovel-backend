import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NovelCollectionMappingWhereInput } from './novel-collection-mapping-where.input';
import { Type } from 'class-transformer';
import { NovelCollectionMappingOrderByWithRelationInput } from './novel-collection-mapping-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { NovelCollectionMappingWhereUniqueInput } from './novel-collection-mapping-where-unique.input';
import { Int } from '@nestjs/graphql';
import { NovelCollectionMappingCountAggregateInput } from './novel-collection-mapping-count-aggregate.input';
import { NovelCollectionMappingAvgAggregateInput } from './novel-collection-mapping-avg-aggregate.input';
import { NovelCollectionMappingSumAggregateInput } from './novel-collection-mapping-sum-aggregate.input';
import { NovelCollectionMappingMinAggregateInput } from './novel-collection-mapping-min-aggregate.input';
import { NovelCollectionMappingMaxAggregateInput } from './novel-collection-mapping-max-aggregate.input';

@ArgsType()
export class NovelCollectionMappingAggregateArgs {

    @Field(() => NovelCollectionMappingWhereInput, {nullable:true})
    @Type(() => NovelCollectionMappingWhereInput)
    where?: NovelCollectionMappingWhereInput;

    @Field(() => [NovelCollectionMappingOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<NovelCollectionMappingOrderByWithRelationInput>;

    @Field(() => NovelCollectionMappingWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<NovelCollectionMappingWhereUniqueInput, 'id' | 'novelId_userCollectionId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => NovelCollectionMappingCountAggregateInput, {nullable:true})
    _count?: NovelCollectionMappingCountAggregateInput;

    @Field(() => NovelCollectionMappingAvgAggregateInput, {nullable:true})
    _avg?: NovelCollectionMappingAvgAggregateInput;

    @Field(() => NovelCollectionMappingSumAggregateInput, {nullable:true})
    _sum?: NovelCollectionMappingSumAggregateInput;

    @Field(() => NovelCollectionMappingMinAggregateInput, {nullable:true})
    _min?: NovelCollectionMappingMinAggregateInput;

    @Field(() => NovelCollectionMappingMaxAggregateInput, {nullable:true})
    _max?: NovelCollectionMappingMaxAggregateInput;
}
