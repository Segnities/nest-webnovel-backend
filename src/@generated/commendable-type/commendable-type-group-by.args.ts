import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommendableTypeWhereInput } from './commendable-type-where.input';
import { Type } from 'class-transformer';
import { CommendableTypeOrderByWithAggregationInput } from './commendable-type-order-by-with-aggregation.input';
import { CommendableTypeScalarFieldEnum } from './commendable-type-scalar-field.enum';
import { CommendableTypeScalarWhereWithAggregatesInput } from './commendable-type-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { CommendableTypeCountAggregateInput } from './commendable-type-count-aggregate.input';
import { CommendableTypeAvgAggregateInput } from './commendable-type-avg-aggregate.input';
import { CommendableTypeSumAggregateInput } from './commendable-type-sum-aggregate.input';
import { CommendableTypeMinAggregateInput } from './commendable-type-min-aggregate.input';
import { CommendableTypeMaxAggregateInput } from './commendable-type-max-aggregate.input';

@ArgsType()
export class CommendableTypeGroupByArgs {

    @Field(() => CommendableTypeWhereInput, {nullable:true})
    @Type(() => CommendableTypeWhereInput)
    where?: CommendableTypeWhereInput;

    @Field(() => [CommendableTypeOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<CommendableTypeOrderByWithAggregationInput>;

    @Field(() => [CommendableTypeScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof CommendableTypeScalarFieldEnum>;

    @Field(() => CommendableTypeScalarWhereWithAggregatesInput, {nullable:true})
    having?: CommendableTypeScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => CommendableTypeCountAggregateInput, {nullable:true})
    _count?: CommendableTypeCountAggregateInput;

    @Field(() => CommendableTypeAvgAggregateInput, {nullable:true})
    _avg?: CommendableTypeAvgAggregateInput;

    @Field(() => CommendableTypeSumAggregateInput, {nullable:true})
    _sum?: CommendableTypeSumAggregateInput;

    @Field(() => CommendableTypeMinAggregateInput, {nullable:true})
    _min?: CommendableTypeMinAggregateInput;

    @Field(() => CommendableTypeMaxAggregateInput, {nullable:true})
    _max?: CommendableTypeMaxAggregateInput;
}
