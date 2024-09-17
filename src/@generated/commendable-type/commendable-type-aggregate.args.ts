import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommendableTypeWhereInput } from './commendable-type-where.input';
import { Type } from 'class-transformer';
import { CommendableTypeOrderByWithRelationInput } from './commendable-type-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { CommendableTypeWhereUniqueInput } from './commendable-type-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CommendableTypeCountAggregateInput } from './commendable-type-count-aggregate.input';
import { CommendableTypeAvgAggregateInput } from './commendable-type-avg-aggregate.input';
import { CommendableTypeSumAggregateInput } from './commendable-type-sum-aggregate.input';
import { CommendableTypeMinAggregateInput } from './commendable-type-min-aggregate.input';
import { CommendableTypeMaxAggregateInput } from './commendable-type-max-aggregate.input';

@ArgsType()
export class CommendableTypeAggregateArgs {

    @Field(() => CommendableTypeWhereInput, {nullable:true})
    @Type(() => CommendableTypeWhereInput)
    where?: CommendableTypeWhereInput;

    @Field(() => [CommendableTypeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CommendableTypeOrderByWithRelationInput>;

    @Field(() => CommendableTypeWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CommendableTypeWhereUniqueInput, 'id'>;

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
