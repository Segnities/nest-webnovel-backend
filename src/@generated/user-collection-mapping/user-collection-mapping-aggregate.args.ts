import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserCollectionMappingWhereInput } from './user-collection-mapping-where.input';
import { Type } from 'class-transformer';
import { UserCollectionMappingOrderByWithRelationInput } from './user-collection-mapping-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { UserCollectionMappingWhereUniqueInput } from './user-collection-mapping-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UserCollectionMappingCountAggregateInput } from './user-collection-mapping-count-aggregate.input';
import { UserCollectionMappingAvgAggregateInput } from './user-collection-mapping-avg-aggregate.input';
import { UserCollectionMappingSumAggregateInput } from './user-collection-mapping-sum-aggregate.input';
import { UserCollectionMappingMinAggregateInput } from './user-collection-mapping-min-aggregate.input';
import { UserCollectionMappingMaxAggregateInput } from './user-collection-mapping-max-aggregate.input';

@ArgsType()
export class UserCollectionMappingAggregateArgs {

    @Field(() => UserCollectionMappingWhereInput, {nullable:true})
    @Type(() => UserCollectionMappingWhereInput)
    where?: UserCollectionMappingWhereInput;

    @Field(() => [UserCollectionMappingOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserCollectionMappingOrderByWithRelationInput>;

    @Field(() => UserCollectionMappingWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<UserCollectionMappingWhereUniqueInput, 'id' | 'collectionId_userId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => UserCollectionMappingCountAggregateInput, {nullable:true})
    _count?: UserCollectionMappingCountAggregateInput;

    @Field(() => UserCollectionMappingAvgAggregateInput, {nullable:true})
    _avg?: UserCollectionMappingAvgAggregateInput;

    @Field(() => UserCollectionMappingSumAggregateInput, {nullable:true})
    _sum?: UserCollectionMappingSumAggregateInput;

    @Field(() => UserCollectionMappingMinAggregateInput, {nullable:true})
    _min?: UserCollectionMappingMinAggregateInput;

    @Field(() => UserCollectionMappingMaxAggregateInput, {nullable:true})
    _max?: UserCollectionMappingMaxAggregateInput;
}
