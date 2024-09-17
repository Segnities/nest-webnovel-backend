import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserCollectionMappingWhereInput } from './user-collection-mapping-where.input';
import { Type } from 'class-transformer';
import { UserCollectionMappingOrderByWithAggregationInput } from './user-collection-mapping-order-by-with-aggregation.input';
import { UserCollectionMappingScalarFieldEnum } from './user-collection-mapping-scalar-field.enum';
import { UserCollectionMappingScalarWhereWithAggregatesInput } from './user-collection-mapping-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { UserCollectionMappingCountAggregateInput } from './user-collection-mapping-count-aggregate.input';
import { UserCollectionMappingAvgAggregateInput } from './user-collection-mapping-avg-aggregate.input';
import { UserCollectionMappingSumAggregateInput } from './user-collection-mapping-sum-aggregate.input';
import { UserCollectionMappingMinAggregateInput } from './user-collection-mapping-min-aggregate.input';
import { UserCollectionMappingMaxAggregateInput } from './user-collection-mapping-max-aggregate.input';

@ArgsType()
export class UserCollectionMappingGroupByArgs {

    @Field(() => UserCollectionMappingWhereInput, {nullable:true})
    @Type(() => UserCollectionMappingWhereInput)
    where?: UserCollectionMappingWhereInput;

    @Field(() => [UserCollectionMappingOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<UserCollectionMappingOrderByWithAggregationInput>;

    @Field(() => [UserCollectionMappingScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof UserCollectionMappingScalarFieldEnum>;

    @Field(() => UserCollectionMappingScalarWhereWithAggregatesInput, {nullable:true})
    having?: UserCollectionMappingScalarWhereWithAggregatesInput;

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
