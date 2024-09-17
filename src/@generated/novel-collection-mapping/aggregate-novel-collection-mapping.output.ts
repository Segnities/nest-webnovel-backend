import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { NovelCollectionMappingCountAggregate } from './novel-collection-mapping-count-aggregate.output';
import { NovelCollectionMappingAvgAggregate } from './novel-collection-mapping-avg-aggregate.output';
import { NovelCollectionMappingSumAggregate } from './novel-collection-mapping-sum-aggregate.output';
import { NovelCollectionMappingMinAggregate } from './novel-collection-mapping-min-aggregate.output';
import { NovelCollectionMappingMaxAggregate } from './novel-collection-mapping-max-aggregate.output';

@ObjectType()
export class AggregateNovelCollectionMapping {

    @Field(() => NovelCollectionMappingCountAggregate, {nullable:true})
    _count?: NovelCollectionMappingCountAggregate;

    @Field(() => NovelCollectionMappingAvgAggregate, {nullable:true})
    _avg?: NovelCollectionMappingAvgAggregate;

    @Field(() => NovelCollectionMappingSumAggregate, {nullable:true})
    _sum?: NovelCollectionMappingSumAggregate;

    @Field(() => NovelCollectionMappingMinAggregate, {nullable:true})
    _min?: NovelCollectionMappingMinAggregate;

    @Field(() => NovelCollectionMappingMaxAggregate, {nullable:true})
    _max?: NovelCollectionMappingMaxAggregate;
}
