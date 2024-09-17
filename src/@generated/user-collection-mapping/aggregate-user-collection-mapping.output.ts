import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { UserCollectionMappingCountAggregate } from './user-collection-mapping-count-aggregate.output';
import { UserCollectionMappingAvgAggregate } from './user-collection-mapping-avg-aggregate.output';
import { UserCollectionMappingSumAggregate } from './user-collection-mapping-sum-aggregate.output';
import { UserCollectionMappingMinAggregate } from './user-collection-mapping-min-aggregate.output';
import { UserCollectionMappingMaxAggregate } from './user-collection-mapping-max-aggregate.output';

@ObjectType()
export class AggregateUserCollectionMapping {

    @Field(() => UserCollectionMappingCountAggregate, {nullable:true})
    _count?: UserCollectionMappingCountAggregate;

    @Field(() => UserCollectionMappingAvgAggregate, {nullable:true})
    _avg?: UserCollectionMappingAvgAggregate;

    @Field(() => UserCollectionMappingSumAggregate, {nullable:true})
    _sum?: UserCollectionMappingSumAggregate;

    @Field(() => UserCollectionMappingMinAggregate, {nullable:true})
    _min?: UserCollectionMappingMinAggregate;

    @Field(() => UserCollectionMappingMaxAggregate, {nullable:true})
    _max?: UserCollectionMappingMaxAggregate;
}
